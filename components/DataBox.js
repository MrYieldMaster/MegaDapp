import React from "react";

const DataBox = () => {
  return (
    <div className="relative">
      <img src="data-box.svg" className="w-[250px]" />
      <div className="absolute inset-0 p-4">
        <div className="text-lg">Price</div>
        <div className="text-2xl mt-4">0.001</div>
      </div>
    </div>
  );
};

export default DataBox;
