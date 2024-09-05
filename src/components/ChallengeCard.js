import React from "react";
import Counter from "./Counter";

const ChallengeCard = ({ name, imgSrc, status, countdownDate }) => {
  return (
    <div className="p-4 w-full ">
      <div className="h-full flex flex-col items-center text-center rounded-t-3xl     bg-white rounded-b-lg">
        <img
          alt={name}
          className="flex-shrink-0  w-full h-56 object-cover object-center mb-4"
          src={imgSrc}
        />{" "}
        <div className="w-full flex justify-center flex-col items-center py-2">
          <div className="w-1/4">
            <h3
              className={`    py-2 text-gray-600 rounded-lg ${
                status === "Active"
                  ? "bg-[#44924C3D] text-[#44924C]"
                  : status === "Upcoming"
                  ? "bg-[#F2C94C40]"
                  : "bg-[#FF3C002B]"
              }`}
            >
              {status}
            </h3>
          </div>
          <div className=" w-[60%]">
            {" "}
            <h2 className="title-font font-medium text-lg text-gray-900 text-wrap py-4">
              {name}
            </h2>
          </div>

          <Counter countdownDate={countdownDate} status={status} />

          <button className=" bg-[#44924C] mb-4  flex flex-row rounded-md items-center justify-center gap-2 px-6 py-2 font-semibold text-white  text-sm">
            <img
              src="/images/correct.svg"
              width={15}
              height={15}
              className=" object-contain"
            ></img>
            Participate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
