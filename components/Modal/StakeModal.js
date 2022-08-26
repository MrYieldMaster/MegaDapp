import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function StakeModal({ isOpen, setIsOpen, data, stake }) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10  " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl border-gradient  backdrop-blur-md py-12 px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className=" font-medium leading-6 text-white"
                  >
                    {data.heading}
                  </Dialog.Title>
                  {stake && (
                    <div className="mt-4 flex flex-col">
                      <span>YOUR ACCOUNT BALANCE</span>
                      <span className="text-lg font-bold">15.5k MYF</span>
                    </div>
                  )}
                  {!stake && (
                    <div className="mt-4 flex flex-col">
                      <span>EARNED REWARD</span>
                      <span className="text-lg font-bold">15.5k MYF</span>
                    </div>
                  )}
                  {!stake && (
                    <div className="mt-4 flex flex-col">
                      <span>CURRENTLY STAKING</span>
                      <span className="text-lg font-bold">15.5k MYF</span>
                    </div>
                  )}
                  <div className="relative w-full my-2">
                    <img src="input.svg" className="w-full" />
                    <input
                      type="number"
                      placeholder="MYF"
                      className="absolute inset-0 bg-transparent px-4 leading-3 focus-visible:outline-0"
                    />
                    <button className="text-sm p-1 sm:p-2  leading-3 bg-primary font-bold rounded-lg absolute top-1/2 transform -translate-y-1/2 right-4">
                      MAX
                    </button>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="bg-gradient-to-tr w-full from-primary to-secondary text-white inline-flex justify-center rounded-md   px-4 py-3 text-sm font-medium "
                      onClick={closeModal}
                    >
                      {data.heading}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
