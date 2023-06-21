"use client";
import React, { useEffect, useRef, useState } from "react";

import styles from "./Navbar.module.css";
import useClickOutside from "@/lib/hooks/useClickOustide";
import { Disease, Branch, Menu } from "@/lib/types";
import * as Tabs from "@radix-ui/react-tabs";
// import { useNavMenu } from "@/lib/NavMenuContext";

type Tab = {
  name: string;
  type: "category" | "herbset" | "disease";
};

export function NavMenu(props: { menu: Menu; showMenu: boolean }) {
  const tabActiveStyle =
    "rounded py-2 px-4 border border-emerald-700 shadow hover:text-white hover:bg-emerald-700 data-[state=active]:text-white data-[state=active]:bg-emerald-700 data-[state=active]:shadow-lg";
  const tabContent = "pt-2 grid grid-cols-3 text-lg gap-4 duration-150;";
  // const { menu } = useNavMenu();

  const [loading, setLoading] = useState(false);
  const [diseases, setDiseases] = useState<Disease[]>();
  // const [activeDisease, setActiveDisease] = useState<Disease>();
  const [prevSections, setPrevSections] = useState<Disease[]>([]);
  const [branches, setBranches] = useState<Branch[]>();
  const [activeBranch, setActiveBranch] = useState<Branch>();
  // console.log(diseases);
  useEffect(() => {
    setDiseases(props.menu.diseases);
    setBranches(props.menu.branches);
    setActiveBranch(props.menu.branches?.at(0));
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
        <div className="absolute top-10 left-0 right-0 mx-auto w-[1200px] text-lg mt-12 border p-4 border-black rounded-lg shadow-xl flex gap-8 z-20 bg-white">
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
                  <Tabs.Trigger className={tabActiveStyle} value="category">
                    Категории
                  </Tabs.Trigger>
                  <Tabs.Trigger className={tabActiveStyle} value="herbset">
                    Сборы Трав
                  </Tabs.Trigger>
                  <Tabs.Trigger className={tabActiveStyle} value="disease">
                    Заболевания
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content className={tabContent} value="category">
                  {activeBranch?.categories.map((category) => (
                    <p
                      key={category.id}
                      className={` hover:text-emerald-500 cursor-pointer borderr truncate duration-150 hover:shadow-modal text-center py-1 px-2 hover:outline outline-1 outline-emerald-500 rounded ${
                        category.subcategories.length ? "font-semibold" : ""
                      }`}
                    >
                      {category.name}
                    </p>
                  ))}
                </Tabs.Content>
                <Tabs.Content className={tabContent} value="herbset">
                  {activeBranch?.herbsets.map((herbset) => (
                    <p
                      key={herbset.id}
                      className={` hover:text-emerald-500 cursor-pointer borderr truncate duration-150 hover:shadow-lg text-center py-1 px-2 hover:outline outline-1 outline-emerald-500 rounded ${
                        herbset.subsets.length ? "font-semibold" : ""
                      }`}
                    >
                      {herbset.name}
                    </p>
                  ))}
                </Tabs.Content>
                <Tabs.Content className={tabContent} value="disease">
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
                      {diseases?.map((disease) => (
                        <p
                          key={disease.id}
                          onClick={() => changeActiveSection(disease)}
                          className={` hover:text-emerald-500 cursor-pointer borderr truncate duration-150 hover:shadow-lg text-center py-1 px-2 hover:outline outline-1 outline-emerald-500 rounded ${
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
