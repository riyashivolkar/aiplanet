import React from "react";
import { dataInfo } from "../data/stats";

const Info = () => {
  return (
    <section className="text-gray-600 body-font px-5">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            Why Participate in{" "}
            <span className="text-green-600">AI Challenges?</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dataInfo.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#F8F9FD] flex flex-col items-start"
            >
              <div className="h-full flex flex-col items-start text-left gap-y-2">
                <img
                  alt={item.imgAlt}
                  className="flex-shrink-0 rounded-2xl w-25 h-25 object-cover object-center ml-2 mb-4"
                  src={item.imgSrc}
                />
                <div className="pl-2">
                  <h2 className="title-font font-bold text-xl text-gray-900 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
