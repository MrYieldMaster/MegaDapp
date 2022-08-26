import React, { useState } from "react";
import SwapModal from "components/Modal/SwapModal";
import { FiChevronDown } from "react-icons/fi";
const Swap = () => {
  const [enabled, setEnabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      {isOpen && <SwapModal closeModal={closeModal} isOpen={isOpen} />}
      <div className="flex gap-8 items-center border-gradient rounded-full py-1 px-2 ">
        <div
          onClick={() => setEnabled(true)}
          className={`${
            enabled ? "bg-secondary/20" : ""
          }  py-2 rounded-full px-4 text-white cursor-pointer`}
        >
          Swap
        </div>
        <div
          onClick={() => setEnabled(false)}
          className={`${
            !enabled ? "bg-secondary/20" : ""
          }  py-2 rounded-full px-4 text-white cursor-pointer`}
        >
          Liquidity
        </div>
      </div>
      <div className="relative border-image w-full max-w-[400px] mt-4">
        {/* <img src="swap.svg" className="" /> */}
        {enabled && <Trade openModal={openModal} />}
        {!enabled && <Liquidity openModal={openModal} />}
      </div>
    </div>
  );
};

export default Swap;

const Trade = ({ openModal }) => {
  return (
    <div className="p-2 sm:p-4">
      <div className="flex justify-between items-start">
        <div>
          <h2>Exchange</h2>
          <span className="text-sm">Trade tokens in an instant</span>
        </div>
        <div className="flex gap-6">
          <img className="w-6" src="/setting.svg" />
          <img className="w-6" src="/refresh.svg" />
        </div>
      </div>
      <img src="/line.svg" className="py-6" />
      <div className=" text-sm sm:text-base">
        <div className="flex justify-between mb-1">
          <div className="flex gap-2 items-center" onClick={openModal}>
            <img src="/token-icons/btc.svg" />
            <span>BTC</span>
            <FiChevronDown />
          </div>
          <div>Balance: 0.001</div>
        </div>
        <div className="relative">
          <img src="/input.svg" />
          <input
            type="number"
            className="absolute inset-0 bg-transparent px-4 leading-3 focus-visible:outline-0"
          />
          <button className="text-sm p-1 sm:p-2 leading-3 bg-primary font-bold rounded-lg absolute top-1/2 transform -translate-y-1/2 right-4">
            MAX
          </button>
        </div>
      </div>
      <div className="my-4 w-full">
        <img src="/exchange.svg" className="mx-auto" />
      </div>
      <div className="text-sm sm:text-base">
        <div className="flex justify-between mb-1">
          <div className="flex gap-2 items-center" onClick={openModal}>
            <img src="/token-icons/btc.svg" />
            <span>BTC</span>
            <FiChevronDown />
          </div>
          <div>Balance: 0.001</div>
        </div>
        <div className="relative">
          <img src="/input.svg" />
          <input
            type="number"
            className="absolute inset-0 bg-transparent px-4 leading-3 focus-visible:outline-0"
          />
          <button className="text-sm p-1 sm:p-2  leading-3 bg-primary font-bold rounded-lg absolute top-1/2 transform -translate-y-1/2 right-4">
            MAX
          </button>
        </div>
      </div>
      <div className="my-4">
        <button className="text-xl font-bold py-2 w-full bg-gradient-to-r from-primary to-secondary rounded-lg">
          Swap
        </button>
      </div>
    </div>
  );
};

const Liquidity = ({ openModal }) => {
  return (
    <div className="p-2 sm:p-4">
      <div className="flex justify-between items-start">
        <div>
          <h2>Add Liquidity</h2>
          <span className="text-sm">Add liquidity to receive LP tokens</span>
        </div>
        <div className="flex gap-6">
          <img className="w-6" src="/setting.svg" />
          <img className="w-6" src="/refresh.svg" />
        </div>
      </div>
      <img src="/line.svg" className="py-6" />
      <div className=" text-sm sm:text-base">
        <div className="flex justify-between mb-1">
          <div className="flex gap-2 items-center" onClick={openModal}>
            <img src="/token-icons/btc.svg" />
            <span>BTC</span>
            <FiChevronDown />
          </div>
          <div>Balance: 0.001</div>
        </div>
        <div className="relative">
          <img src="/input.svg" />
          <input
            type="number"
            className="absolute inset-0 bg-transparent px-4 leading-3 focus-visible:outline-0"
          />
          <button className="text-sm p-1 sm:p-2 leading-3 bg-primary font-bold rounded-lg absolute top-1/2 transform -translate-y-1/2 right-4">
            MAX
          </button>
        </div>
      </div>
      <div className="my-4 w-full">
        <img src="/exchange.svg" className="mx-auto" />
      </div>
      <div className="text-sm sm:text-base">
        <div className="flex justify-between mb-1">
          <div className="flex gap-2 items-center" onClick={openModal}>
            <img src="/token-icons/btc.svg" />
            <span>BTC</span>
            <FiChevronDown />
          </div>
          <div>Balance: 0.001</div>
        </div>
        <div className="relative">
          <img src="/input.svg" />
          <input
            type="number"
            className="absolute inset-0 bg-transparent px-4 leading-3 focus-visible:outline-0"
          />
          <button className="text-sm p-1 sm:p-2  leading-3 bg-primary font-bold rounded-lg absolute top-1/2 transform -translate-y-1/2 right-4">
            MAX
          </button>
        </div>
      </div>
      <div className="my-4">
        <button className="text-xl font-bold py-2 w-full bg-gradient-to-r from-primary to-secondary rounded-lg">
          Swap
        </button>
      </div>
    </div>
  );
};
