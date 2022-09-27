import React from "react";
import Chart from "components/Chart";
import useSWR from "swr";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Table from "components/Table";
const LotteryItem = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data: chartData, error: chartError } = useSWR(
    "https://webforge.design/api/royaltyfinance/historical.php",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );
  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    // if (remainingTime === 0) {
    //   return <div className="timer">Too lale...</div>;
    // }

    return (
      <div className="flex flex-col justify-center items-center text-center h-full w-full">
        <div className="text-lg">Next Winner In</div>
        <div className="text-2xl text-primary text-center">
          {" "}
          {minutes}:{seconds}
        </div>
      </div>
    );
  };
  return (
    <div className=" w-full l pb-24">
      <img src="/top-cut.svg" />
      <div
        className="grid grid-cols-1 lg:grid-cols-2 max-w-[900px] mx-auto  justify-items-center gap-8 mt-16"
        // style={{ gridTemplateColumns: "30% 70%" }}
      >
        <div className="flex flex-col gap-6 items-center order-2 md:order-1  item-center justify-center">
          <svg className="absolute">
            <defs>
              <linearGradient id="your-unique-id" x1="1" y1="0" x2="0" y2="0">
                <stop offset="40%" stopColor="#FFB413" />
                <stop offset="60%" stopColor="#811343" />
              </linearGradient>
            </defs>
          </svg>
          <CountdownCircleTimer
            isPlaying
            duration={30000}
            initialRemainingTime={1500}
            colors="url(#your-unique-id)"
            strokeLinecap="butt"
            strokeWidth="15"
            trailColor="#fff"
            size="220"
            // colorsTime={[10]}
            onComplete={() => {
              return { shouldRepeat: true, delay: 1 };
            }}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        {chartData?.data && (
          <Chart data={chartData?.data?.ethereum?.dexTrades} />
        )}
      </div>
      <img src="/top-cut.svg" className="-scale-y-100 mt-8" />

      <div className=" mt-16 mx-auto max-w-[900px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Deposit />
          <Pending />
        </div>
      </div>
      <PoolStats />
      <div className="mt-16 mx-auto max-w-[900px]">
        <div className="border border-gradient  rounded-lg p-6">
          <h2>Winners of jackpot</h2>
          <div className="mt-6">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryItem;

const Deposit = () => {
  return (
    <div className="relative border-image w-full max-w-[400px] mt-4">
      <div className="p-2 sm:p-4">
        <div className="flex  items-start">
          <div>
            <h2>BUSD MINER</h2>
          </div>
        </div>
        <div className="flex w-full mt-8 flex-col">
          <div className="flex justify-between items-center w-full">
            <span>Your Deposit</span>
            <span>--</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>--</span>
            <span>--</span>
          </div>
        </div>
        <div className="flex w-full mt-4 flex-col">
          <div className="flex justify-between items-center w-full">
            <span>You've Claimed</span>
            <span>Max Payout</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>--</span>
            <span>--</span>
          </div>
        </div>
        <div className="flex w-full mt-4 flex-col">
          <div className="flex justify-between items-center w-full">
            <span>Your Share</span>
            <span>LP in your wallet</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>--</span>
            <span>--</span>
          </div>
        </div>
        <div className="flex w-full mt-4 flex-col">
          <div className="flex flex-col gap-2 items-end w-full">
            <button className="py-2 px-4 bg-primary rounded-lg">
              UNZIP BUSD
            </button>
            <span>--</span>
          </div>
        </div>
        <div className="flex w-full justify-center mt-8">
          <button className="btext-xl font-bold py-2 w-full bg-gradient-to-r from-primary to-secondary rounded-lg">
            DEPOSIT
          </button>
        </div>
      </div>
    </div>
  );
};

const Pending = () => {
  return (
    <div className="relative border-image w-full max-w-[400px] mt-4">
      <div className="p-2 sm:p-4">
        <div className="flex  items-start">
          <div>
            <h2>Your Pending Reward</h2>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div className="flex justify-between items-center w-full">
            <span>Your Deposit</span>
            <span>--</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>Referral Rewards</span>
            <span>--</span>
          </div>

          <div className="flex justify-between items-center w-full">
            <span>Num Referrals</span>
            <span>--</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>Top Deposit Rewards</span>
            <span>--</span>
          </div>

          <div className="flex justify-between items-center w-full">
            <span>xMEGA Holding Bonus</span>
            <span>--</span>
          </div>

          <div className="h-4 bg-primary/20 rounded-full w-full relative">
            <div className="bg-primary h-4 w-[20%] absolute rounded-full" />
          </div>
        </div>

        <div className="flex w-full gap-4 justify-center mt-8">
          <button className="font-bold py-2 w-full bg-gradient-to-r from-primary to-secondary rounded-lg">
            Claim
          </button>
          <button className="font-bold py-2 w-full bg-gradient-to-r from-primary to-secondary rounded-lg">
            Compound
          </button>
        </div>
      </div>
    </div>
  );
};

const PoolStats = () => {
  return (
    <div className=" mt-16 mx-auto max-w-[900px]">
      <div className="border border-gradient  rounded-lg p-6">
        <h2>Pool Statistics</h2>

        <div className="mt-4 space-y-4">
          <div className="flex justify-between items-center w-full">
            <span>Pool Balance</span>
            <span>--</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>Total Claimed</span>
            <span>--</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>Total Users</span>
            <span>--</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>Daily Returns</span>
            <span>--</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>APR</span>
            <span>--</span>
          </div>
        </div>
      </div>
    </div>
  );
};
