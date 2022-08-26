import React from "react";

const Farm = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
        <FarmItem pair="MFY/BNB " apr="19.56%" />
        <FarmItem pair="MYF/BUSD" apr="19.56%" enable={true} />
        <FarmItem pair="USDM/BUSD" apr="19.56%" />
      </div>
    </div>
  );
};

export default Farm;

const FarmItem = ({ pair, apr, enable = false }) => {
  return (
    <div className=" border-image-farm   max-w-[300px] w-full mx-auto">
      <div className="flex justify-between items-center">
        <img src="/farm/bnb-myf.svg" className="w-[50px]" />
        <div>
          <div className="font-bold">{pair}</div>
          <div className="flex gap-2">
            <div className="py-1 px-2 text-[8px] border border-white rounded-full">
              CORE
            </div>
            <div className="py-1 px-2 text-[8px] border border-white rounded-full">
              40x
            </div>
          </div>
        </div>
      </div>
      <img src="/line.svg" className="py-6" />
      <div className="flex justify-between">
        <div>APR:</div>
        <div>{apr}</div>
      </div>
      <div className="flex justify-between">
        <div>Earn:</div>
        <div>MEGA + Fees</div>
      </div>
      <img src="/line.svg" className="py-6" />

      <div>
        <div>MEGA EARNED</div>
        <div className="flex justify-between">
          <div>0.000</div>
          <button className="py-2 text-sm px-4 bg-gradient-to-tr from-primary to-secondary rounded-lg leading-3">
            HARVEST
          </button>
        </div>
      </div>
      <div className="mt-4 mb-4">
        <div>{pair} LP STAKED</div>
        {!enable ? (
          <div className="flex justify-between">
            <div>0.000</div>
            <button className="py-2 text-sm px-4 bg-gradient-to-tr from-primary to-secondary rounded-lg leading-3">
              STAKE
            </button>
          </div>
        ) : (
          <button className="py-3 text-sm px-12 w-full bg-gradient-to-tr from-primary to-secondary rounded-lg leading-3">
            Enable Contract
          </button>
        )}
      </div>
    </div>
  );
};
