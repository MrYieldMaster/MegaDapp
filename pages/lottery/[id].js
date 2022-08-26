import React from "react";

const LotteryItem = () => {
  return (
    <div className=" w-full">
      <img src="/top-cut.svg" />
      <div className="text-center mt-8">
        <h2>The MYF LOTTERY</h2>
        <h1 className="mt-4">120$</h1>
        <button className="py-2 flex gap-2 items-center justify-center mx-auto px-8 rounded-lg text-lg mt-4 font-bold bg-gradient-to-r from-primary to-secondary">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.3137 2L14.2631 2.94934C13.5597 4.19866 13.7398 5.81097 14.8032 6.87441C15.8667 7.93786 17.479 8.11792 18.7283 7.4146L19.6777 8.36396L16.6569 11.3848L16.1287 10.8566C15.7382 10.4661 15.105 10.4661 14.7145 10.8566C14.3239 11.2471 14.3239 11.8803 14.7145 12.2708L15.2426 12.799L8.36396 19.6777L7.49923 18.8129C8.71921 17.5286 8.69924 15.4983 7.43932 14.2384C6.1794 12.9784 4.14908 12.9585 2.86473 14.1784L2 13.3137L8.87868 6.43503L9.2145 6.77081C9.605 7.16134 10.2382 7.16134 10.6287 6.77081C11.0192 6.38029 11.0192 5.74713 10.6287 5.3566L10.2929 5.02081L13.3137 2ZM11.8995 0.585789C12.6805 -0.195263 13.9469 -0.195263 14.7279 0.585789L16.299 2.15684C16.6895 2.54736 16.6895 3.18053 16.299 3.57105L16.2175 3.65257C15.7183 4.15173 15.7183 4.96103 16.2175 5.4602C16.7166 5.95936 17.5259 5.95936 18.0251 5.4602L18.1066 5.37868C18.4971 4.98816 19.1303 4.98816 19.5208 5.37868L21.0919 6.94975C21.8729 7.7308 21.8729 8.99713 21.0919 9.7782L9.7782 21.0919C8.99713 21.8729 7.7308 21.8729 6.94975 21.0919L5.37869 19.5208C4.98817 19.1303 4.98817 18.4971 5.37869 18.1066L6.02511 17.4602C6.52427 16.961 6.52427 16.1517 6.02511 15.6526C5.52594 15.1534 4.71664 15.1534 4.21748 15.6526L3.57106 16.299C3.18054 16.6895 2.54737 16.6895 2.15685 16.299L0.585789 14.7279C-0.195263 13.9469 -0.195263 12.6805 0.585789 11.8995L11.8995 0.585789ZM12.8787 7.6066C12.4882 7.21608 11.855 7.21608 11.4645 7.6066C11.0739 7.99712 11.0739 8.63029 11.4645 9.0208L12.4645 10.0208C12.855 10.4113 13.4882 10.4113 13.8787 10.0208C14.2692 9.6303 14.2692 8.99713 13.8787 8.6066L12.8787 7.6066Z"
              fill="white"
            />
          </svg>
          <span>Buy Now</span>
        </button>
      </div>
      <img src="/top-cut.svg" className="-scale-y-100 mt-8" />

      <div className="text-center mt-16">
        <h2>Get your tickets now!</h2>
        <div className="text-xl md:text-2xl font-bold mt-4">
          16H - 20M - 30S
        </div>
        <div className="">Until the draw!</div>
      </div>
      <div className="bg-secondary/30  max-w-[700px] mx-auto rounded-lg mt-16 ">
        <div className="p-6 flex justify-between items-center text-lg  md:text-2xl border-b border-white">
          <div>Next Draw</div>
          <div>24 Aug 2pm UTC</div>
        </div>
        <div className="px-6 py-4 flex justify-between items-center text-lg  md:text-2xl ">
          <div>Prize Pot</div>
          <div>120$</div>
        </div>
        <div className="px-6 pb-4  flex justify-between items-center text-lg  md:text-2xl ">
          <div>Your Tickets</div>
          <div>0</div>
        </div>
      </div>
    </div>
  );
};

export default LotteryItem;
