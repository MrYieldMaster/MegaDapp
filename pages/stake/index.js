import React, { useState } from "react";
import StakeModal from "components/Modal/StakeModal";
const Farm = () => {
  let [stake, setStake] = useState(false);
  let [unstake, unStake] = useState(false);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
        <FarmItem
          pair="MFY/BNB "
          flex="19.56%"
          locked="100%"
          setStake={setStake}
          unStake={unStake}
        />
        <FarmItem
          pair="MYF/BUSD"
          flex="19.56%"
          locked="100%"
          setStake={setStake}
          unStake={unStake}
        />
        <FarmItem
          pair="USDM/BUSD"
          flex="19.56%"
          locked="100%"
          setStake={setStake}
          unStake={unStake}
        />
      </div>
      <StakeModal
        stake={true}
        data={{ heading: "Stake" }}
        isOpen={stake}
        setIsOpen={setStake}
      />
      <StakeModal
        stake={false}
        data={{ heading: "UnStake" }}
        isOpen={unstake}
        setIsOpen={unStake}
      />
    </div>
  );
};

export default Farm;

const FarmItem = ({ pair, flex, locked, setStake, unStake }) => {
  return (
    <div className=" border-image-farm   max-w-[300px] w-full mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold">{pair}</div>
        </div>
        <img src="/farm/bnb-myf.svg" className="w-[50px]" />
      </div>
      <img src="/line.svg" className="py-6" />

      <div className="flex justify-between">
        <div>LOCKED APY:</div>
        <div>{locked}</div>
      </div>
      <div className="flex justify-between">
        <div>Total Stake:</div>
        <div>15m MYF</div>
      </div>
      <img src="/line.svg" className="py-6" />

      <div>
        <div className="flex gap-6">
          <button
            onClick={() => setStake(true)}
            className="py-3 w-full text-sm px-4 bg-gradient-to-tr from-primary to-secondary rounded-lg leading-3"
          >
            Stake
          </button>
          <button
            onClick={() => unStake(true)}
            className="py-3 w-full text-sm px-4 bg-gradient-to-tr from-primary to-secondary rounded-lg leading-3"
          >
            Unstake
          </button>
        </div>
      </div>
    </div>
  );
};
