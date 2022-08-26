import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Link from "next/link";

const Header = ({ active, setActive, side, setSide }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav
      style={{ zIndex: 9999 }}
      className={` absolute left-0 right-0 top-0 flex flex-wrap items-center justify-between  py-4 backdrop-blur-2xl mb-3`}
    >
      <div className="container max-w-[1200px] px-6 mx-auto flex  items-center justify-between">
        <div className="w-full gap-4  flex lg:w-auto static justify-start">
          <button
            className="lg:hidden p-2"
            onClick={() => setSide((prevState) => !prevState)}
          >
            {side ? <img src="/menu.svg" /> : <img src="/icons/menu.svg" />}
          </button>
          <Link href="/">
            <a className="flex gap-4 items-center">
              <img src="/logo.png" className="hidden md:block w-24 lg:w-44" />
              <img src="/mobile-logo.svg" className="w-8 block md:hidden" />
            </a>
          </Link>
        </div>
        <div>
          <li className="flex gap-2 items-center cursor-pointer border-gradient rounded-md">
            <button className="py-2 px-4 ">Connect </button>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
