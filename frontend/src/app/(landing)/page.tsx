"use client";
import { MEDIA_URL } from "@/lib/const";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import IconBackground from "@/components/common/IconBackground";
import Footer from "@/components/Footer";
import leafPng from "@/../public/leaf.jpeg";
import logo from "@/../public/logo_white.png";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ num }: { num: number }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="w-96 h-96 rounded-lg border-2 border-primary-dark shadow-lg bg-primary-white p-4"
      ref={ref}
      initial="hidden"
      animate={control}
      variants={boxVariant}
    >
      <p>Box {num}</p>
    </motion.div>
  );
};

async function LandingPage() {
  // bg-repeat bg-[url('http://localhost:8000/api/media/variants/logo.png')] bg-[length:100px_100px]
  return (
    <div className="flex flex-col items-center w-full">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {/* http://localhost:8000/api/media/ */}
        <Image
          className=""
          src={leafPng}
          alt=""
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <div className="relative -mt-16 md:!-mt-24 min-h-screen w-full">
        <div className="absolute top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          {/* http://localhost:8000/api/media/ */}
          <Image
            className=""
            src={logo}
            alt=""
            style={{ objectFit: "contain" }}
            fill
          />
          <p className="w-full absolute -bottom-10 text-center text-primary-white text-6xl font-semibold">
            шалфей
          </p>
        </div>
        <div className="bg-red-300 w-fit p-4 absolute left-1/2 bottom-48 md:bottom-20 -translate-x-1/2">
          Arrow down
        </div>
      </div>
      <IconBackground className="min-h-screen w-full py-24 flex justify-center bg-primary-main">
        <div className="grid gap-48 grid-cols-1 sm:grid-cols-3">
          {[1, 2, 3, 4, 5].map((box) => (
            <Box key={box} num={box} />
          ))}
        </div>
      </IconBackground>
      <Footer />
    </div>
  );
}

export default LandingPage;
