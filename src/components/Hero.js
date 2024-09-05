import React from "react";
import { stats } from "../data/stats";

const Hero = () => {
  return (
    <div className="border border-black">
      <section className="text-white body-font bg-[#003145]">
        <div className="container mx-[10%] flex px-5 py-[10%] flex-col md:flex-row items-center">
          <div className="lg:w-3/4 gap-y-5 md:w-3/4 w-full lg:pr-24 md:pr-16  my-[-5%] px-[3%] flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
            <div className="absolute top-2 left-[-10px] w-2 md:h-[35%] h-[20%] bg-[#FFCE5C]" />

            <h1 className="title-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 font-bold text-white w-full">
              Accelerate Innovation
              <br className="my-2" />
              with Global AI Challenges
            </h1>

            <p className="mb-8 leading-relaxed w-[70%] text-lg">
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
            <div className="flex justify-center">
              <button className="ml-4 inline-flex text-[#003145]  font-bold bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg">
                Create Challenge
              </button>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/4 lg:max-w-lg md:max-w-md w-5/6   items-center justify-center flex mx-[-10%]">
            <img
              className="object-cover object-center round"
              alt="hero"
              src="/images/rocket.svg"
            />
          </div>
        </div>
      </section>
      <section className="text-white body-font bg-[#002A3B]">
        <div className="container px-5 sm:py-12 py-4 mx-auto ml-[10%]">
          <div className="flex flex-wrap -mx-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 w-full md:w-1/3 flex items-center"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white text-indigo-500 mb-4 mr-4">
                  <img
                    src={stat.imgSrc}
                    alt={stat.imgAlt}
                    width={stat.width}
                    height={stat.height}
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-white text-lg title-font font-medium">
                    {stat.title}
                  </h2>
                  <p className="leading-relaxed text-sm">{stat.description}</p>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:flex w-[1px] h-[80%] bg-white mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
