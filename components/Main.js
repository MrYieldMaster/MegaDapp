import React from "react";
import DataBox from "./DataBox";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Chart from "components/Chart";
import useSWR from "swr";
const Main = () => {
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
        <div className="text-lg">Next Rebase</div>
        <div className="text-2xl text-primary text-center">
          {" "}
          {minutes}:{seconds}
        </div>
      </div>
    );
  };
  return (
    <main className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center max-w-[900px] mx-auto">
        <DataBox />
        <DataBox />
        <DataBox />
      </div>
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
    </main>
  );
};

export default Main;
