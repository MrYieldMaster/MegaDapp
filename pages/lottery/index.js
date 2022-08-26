import React from "react";
import Link from "next/link";
const Farm = () => {
  return (
    <div className="w-full pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
        <LotteryItem prize="60$" tickets="15" amount="10$" />
        <LotteryItem prize="100$" tickets="10" amount="20$" />
        <LotteryItem prize="250$" tickets="10" amount="50$" />
        <LotteryItem prize="550$" tickets="10" amount="100$" />
      </div>
      <div className="max-w-[900px] mx-auto mt-16 text-center">
        <h2>How to Play</h2>
        <div className="max-w-[700px] mx-auto mt-2">
          If the digits on your tickets match the winning numbers in the correct
          order, you win a portion of the prize pool.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-8">
          <div className="border-gradient py-12 px-6 rounded-2xl relative">
            <span className="absolute top-4 right-4">STEP 1</span>
            <div className="text-lg font-bold mb-2">Buy Tickets</div>
            <div className="text-sm">
              Prices are set when the round starts, equal to 5 USD in ODEX per
              ticket.
            </div>
          </div>
          <div className="border-gradient py-12 px-6 rounded-2xl relative">
            <span className="absolute top-4 right-4">STEP 2</span>
            <div className="text-lg font-bold mb-2">Wait for the Draw</div>
            <div className="text-sm">
              There are two draws every day: one every 12 hours.
            </div>
          </div>
          <div className="border-gradient py-12 px-6 rounded-2xl relative">
            <span className="absolute top-4 right-4">STEP 3</span>
            <div className="text-lg font-bold mb-2">Check for Prizes</div>
            <div className="text-sm">
              Once the round’s over, come back to the page and check to see if
              you’ve won!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farm;

const LotteryItem = ({ prize, tickets, amount }) => {
  return (
    <div className=" border-image-farm flex-col   flex  justify-center max-w-[300px] w-full mx-auto">
      <div className="text-center flex items-center justify-center">
        <div className="flex flex-col mb-6">
          <span className="text-4xl font-bold">{prize}</span>
          <span className="font-semibold">Prize</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-xl font-bold">Tickets</div>
        <div className="text-xl font-bold">{tickets}</div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-xl font-bold">Winners</div>
        <div className="text-xl font-bold">1</div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-xl font-bold">Entry</div>
        <div className="text-xl font-bold">{amount}</div>
      </div>
      <Link href={"/lottery/1"}>
        <a className="text-center block border-gradient py-2 px-8 rounded-md font-bold mt-8 mb-4">
          Join
        </a>
      </Link>
    </div>
  );
};
