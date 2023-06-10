import React, { useEffect, useRef, useState } from "react";

import styles from "./Navbar.module.css";
import useClickOutside from "@/lib/hooks/useClickOustide";
import { Disease, Branch } from "@/lib/types";
import * as Tabs from "@radix-ui/react-tabs";

type Tab = {
  name: string;
  type: "category" | "herbset" | "disease";
};

const getMenu = async () => {
  const resp = await fetch("http://127.0.0.1:8003/api/branches/");
  const data = await resp.json();
  return data;
};

export async function Menu(props: {
  setShowMenu: (x: boolean) => void;
  showMenu: boolean;
}) {
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => props.setShowMenu(false));

  const [activeTab, setActiveTab] = useState<Tab>("Показания");

  const [loading, setLoading] = useState(false);
  const [diseases, setDiseases] = useState<Disease[]>([]);
  // const [activeDisease, setActiveDisease] = useState<Disease>();
  const [prevSections, setPrevSections] = useState<Disease[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [activeBranch, setActiveBranch] = useState<Branch>();

  useEffect(() => {
    setLoading(true);
    const data = getMenu();

    setDiseases(data.diseases);
    setBranches(data.branches);
    setActiveBranch(data.branches[0]);
    setLoading(false);

    // setLoading(true);
    // fetch("api/diseases");
  }, []);

  const changeActiveSection = (disease: Disease) => {
    if (disease?.subcategories.length) {
      setPrevSections((prev) => [...prev, disease]);
    } else {
      // send to the page
      // router.push(_section.name);
      // setSelectedPage(_section.title);
    }
  };

  const goBack = () => {
    if (prevSections.length === 0) return;
    // setActiveSection();
    setPrevSections((p) => p.splice(-1));
  };

  return (
    <>
      {props.showMenu && (
        <div
          className="absolute top-10 w-[1200px] text-lg m-12 border p-4 border-black rounded-lg shadow-xl flex gap-8 z-10 bg-white"
          ref={menuRef}
        >
          <div className="w-full grid grid-cols-4 gap-4">
            {/*  */}
            <div className="col-span-1 flex flex-col gap-4 select-none">
              {branches?.map((branch: Branch) => (
                <p
                  key={branch.id}
                  onClick={() => {
                    setActiveBranch(branch);
                    // setPrevSections([disease]);
                  }}
                  className={`p-2 shadow hover:shadow-xl border border-emerald-700 rounded hover:bg-emerald-700 hover:text-white h-fit ${
                    activeBranch === branch ? "bg-emerald-700 text-white" : ""
                  }`}
                >
                  {branch.name}
                </p>
              ))}
            </div>
            {/*  */}
            <div className="col-span-3 p-2 border border-emerald-700 rounded w-full h-fit flex flex-col gap-2 divide-y hover:shadow-xl duration-150">
              <Tabs.Root className="flex flex-col" defaultValue="herbset">
                <Tabs.List
                  className="justify-center flex gap-8 pb-2 border-b"
                  aria-label="Manage your account"
                >
                  <Tabs.Trigger
                    className={styles["tab-active"]}
                    value="category"
                  >
                    Категории
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className={styles["tab-active"]}
                    value="herbset"
                  >
                    Сборы Трав
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className={styles["tab-active"]}
                    value="disease"
                  >
                    Заболевания
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content
                  className={styles["tab-content"]}
                  value="category"
                >
                  {activeBranch?.categories.map((category) => (
                    <p
                      key={category.id}
                      className={` hover:text-blue-500 cursor-pointer borderr truncate duration-150 ${
                        category.subcategories.length ? "font-semibold" : ""
                      }`}
                    >
                      {category.name}
                    </p>
                  ))}
                </Tabs.Content>
                <Tabs.Content className={styles["tab-content"]} value="herbset">
                  {activeBranch?.herbsets.map((herbset) => (
                    <p
                      key={herbset.id}
                      className={` hover:text-blue-500 cursor-pointer borderr truncate duration-150 ${
                        herbset.subsets.length ? "font-semibold" : ""
                      }`}
                    >
                      {herbset.name}
                    </p>
                  ))}
                </Tabs.Content>
                <Tabs.Content className={styles["tab-content"]} value="disease">
                  {prevSections.length ? (
                    <>
                      {prevSections[
                        prevSections.length - 1
                      ]?.subcategories?.map((disease) => (
                        <p
                          key={disease.id}
                          onClick={() => changeActiveSection(disease)}
                          className={` hover:text-blue-500 cursor-pointer borderr truncate duration-150 ${
                            disease.subcategories.length ? "font-semibold" : ""
                          }`}
                        >
                          {disease.name}
                        </p>
                      ))}
                    </>
                  ) : (
                    <>
                      {diseases.map((disease) => (
                        <p
                          key={disease.id}
                          onClick={() => changeActiveSection(disease)}
                          className={` hover:text-blue-500 cursor-pointer borderr truncate duration-150 ${
                            disease.subcategories.length ? "font-semibold" : ""
                          }`}
                        >
                          {disease.name}
                        </p>
                      ))}
                    </>
                  )}
                </Tabs.Content>
              </Tabs.Root>
              {/* <div className="flex items-center">
                {prevSections.length ? (
                  <p onClick={() => goBack()} className="hover:text-blue-500 select-none text-sm">
                    Назад
                  </p>
                ) : (
                  ""
                )}
                <p className="w-full text-lg font-medium text-center">
                  {prevSections.length
                    ? prevSections[prevSections.length - 1]?.name
                    : activeBranch?.name}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
