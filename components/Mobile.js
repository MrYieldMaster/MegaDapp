import React, { useEffect } from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { useDetectClickOutside } from "react-detect-click-outside";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
const Mobile = ({ side, setSide, setActive, active }) => {
  const router = useRouter();
  const handleClose = () => {
    setSide((prevState) => !prevState);
  };
  const ref = useDetectClickOutside({ onTriggered: handleClose });

  return (
    <motion.aside
      exit={{ x: -224 }}
      ref={ref}
      class={`${
        side ? "ml-0" : "-ml-56"
      }  transition-all duration-500 fixed left-0 right-0 w-56   top-0 z-[9] `}
      aria-label="Sidebar"
    >
      <div
        id="sidemenu"
        class="   flex flex-col  py-4 px-3 backdrop-blur-md rounded h-screen pt-24 "
      >
        <ul class="space-y-2">
          <li>
            <Link href="/">
              <a
                className={`${
                  router.asPath === "/" ? "border-gradient" : ""
                } flex w-full items-center py-3 px-4 text-base font-normal  rounded-lg  hover:border-gradient  `}
              >
                <img src="/icons/home.svg" />

                <span className="ml-3 leading-3 mt-1 ">Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/swap">
              <a
                className={`${
                  router.asPath === "/swap" ? "border-gradient" : ""
                } flex w-full items-center py-3 px-4 text-base font-normal  rounded-lg  hover:border-gradient  `}
              >
                <img src="/icons/trade.svg" />
                <span className="ml-3 leading-3 mt-1 ">Trade</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/farm">
              <a
                className={`${
                  router.asPath === "/farm" ? "border-gradient" : ""
                } flex w-full items-center py-3 px-4 text-base font-normal  rounded-lg  hover:border-gradient  `}
              >
                <img src="/icons/farm.svg" />
                <span className="ml-3 leading-3 mt-1 ">Farms</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/stake">
              <a
                className={`${
                  router.asPath === "/stake" ? "border-gradient" : ""
                } flex w-full items-center py-3 px-4 text-base font-normal  rounded-lg  hover:border-gradient  `}
              >
                <img src="/icons/stake.svg" />
                <span className="ml-3 leading-3 mt-1 ">Stake</span>
              </a>
            </Link>
          </li>
          <li>
          <Link href="/lottery">
              <a
                className={`${
                  router.asPath === "/lottery" ? "border-gradient" : ""
                } flex w-full items-center py-3 px-4 text-base font-normal  rounded-lg  hover:border-gradient  `}
              >
                <img src="/icons/lottery.svg" />
                <span className="ml-3 leading-3 mt-1 ">Lottery</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/miners/busd">
              <a
                className={`${
                  router.asPath === "//miners/busd" ? "border-gradient" : ""
                } flex w-full items-center py-3 px-4 text-base font-normal  rounded-lg  hover:border-gradient  `}
              >
                <img src="/icons/busd.png" />
                <span className="ml-3 leading-3 mt-1 ">BUSD MINERS</span>
              </a>
            </Link>
          </li>{" "}
          <li>
            <Link href="/miners/bnb">
              <a
                className={`${
                  router.asPath === "//miners/bnb" ? "border-gradient" : ""
                } flex w-full items-center py-3 px-4 text-base font-normal  rounded-lg  hover:border-gradient  `}
              >
                <img src="/icons/bnb.png" />
                <span className="ml-3 leading-3 mt-1 ">BNB MINERS</span>
              </a>
            </Link>
          </li>
        </ul>
        <img src="/line.svg" className="my-6" />
        <ul class="pt-4   flex flex-col h-full">
          <li className="">
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-white rounded-lg transition"
            >
              {/* <img src="/mobile-logo.svg" /> */}
              <img src="/token.gif" className="w-12 " />
              <span class="">0.004$</span>
            </a>
          </li>
          <li className="">
            <a
              href="#"
              class="flex text-base  p-2  gap-4 font-normal  rounded-lg transition duration-75 "
            >
              <div>Socials</div>
              <a href="#" target="_blank">
                {" "}
                <FaTelegram className="text-xl" />
              </a>
              <a href="#" target="_blank">
                {" "}
                <FaTwitter className="text-xl" />
              </a>
            </a>
          </li>
        </ul>
      </div>
    </motion.aside>
  );
};

export default Mobile;
