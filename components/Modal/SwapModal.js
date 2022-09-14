import React, { useEffect } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";
const Swap = ({ isOpen, closeModal }) => {
  // let [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(null);

  const tokens = [
    { name: "ETH", address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
    { name: "DAI", address: "0x6B175474E89094C44Da98b954EedeAC495271d0F" },
    { name: "USDC", address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" },
    { name: "USDT", address: "0xdAC17F958D2ee523a2206206994597C13D831ec7" },
    { name: "WBTC", address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599" },
    { name: "WETH", address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
  ];

  useEffect(async () => {
    const resp = await axios.get(
      "https://www.gemini.com/uniswap/manifest.json" ,
      "https://raw.githubusercontent.com/pancakeswap/token-list/main/lists/cmc.json"
    );
    setItems(resp?.data?.tokens);
  });

  return (
    <div className={` w-full`}>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto mt-16"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block  w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform border-gradient  backdrop-blur-md  rounded-2xl">
                  <div className="flex justify-between">
                    <Dialog.Title as="p" className="text-lg  leading-6">
                      Select a token
                    </Dialog.Title>
                    <div onClick={closeModal} className="cursor-pointer">
                      <FiX className="text-3xl" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <input className="bg-transparent  border-gradient  py-4 px-4 w-full rounded-full focus-visible:outline-0" />
                  </div>
                  <div className="mt-2 hidden md:block">Common bases</div>
                  <div className="mt-2 hidden md:block">
                    <ul className="flex gap-2 flex-wrap">
                      <li className="border hover:bg-white  cursor-pointer inline-block border-gradient  p-2 rounded-lg">
                        <div className="flex gap-2 items-center">
                          <img className="w-6" src={`/mobile-logo.svg`} />
                          <div>MYF</div>
                        </div>
                      </li>
                      {tokens.map((t, idx) => (
                        <li
                          key={idx}
                          className="border hover:bg-white  cursor-pointer inline-block border-gradient  p-2 rounded-lg"
                        >
                          <div className="flex gap-2 ">
                            <img
                              className="w-6"
                              src={`https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/${t.address}/logo.png`}
                            />
                            <div>{t.name}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 h-[250px] border-t border-b border-white overflow-y-auto">
                    <ul className="flex  flex-col py-2">
                      <li className="hover:border-gradient rounded-lg  ">
                        <div className="flex gap-2 items-center p-2">
                          <img src={`/mobile-logo.svg`} className="w-8" />
                          <div className="flex flex-col ">
                            <div>MYF</div>
                            <div className="text-[10px] font-thin">
                              MegaYeildFinance
                            </div>
                          </div>
                        </div>
                      </li>
                      {items &&
                        items.map((t, idx) => (
                          <li
                            key={idx}
                            className="hover:border-gradient rounded-lg  "
                          >
                            <div className="flex gap-2 items-center p-2">
                              <img src={t.logoURI} className="w-8" />
                              <div className="flex flex-col ">
                                <div>{t.symbol}</div>
                                <div className="text-[10px] font-thin">
                                  {t.name}
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
};

export default Swap;
