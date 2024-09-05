import React from "react";
import { useFilter } from "../context/FilterContext";
import { challenges } from "../data/stats";
import ChallengeCard from "./ChallengeCard";

const ChallengesMenu = () => {
  const { isFilterOpen, toggleFilter } = useFilter();

  return (
    <div>
      <section className="text-gray-600 body-font bg-[#002A3B]">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-white">
              Explore Challenges
            </h1>

            <div className="lg:w-full mx-auto leading-relaxed text-base flex flex-row items-center justify-center gap-4">
              <div className="w-3/4">
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div>
                {/* //filter2 */}
                {isFilterOpen ? (
                  <div className="relative w-full">
                    <button
                      onClick={toggleFilter}
                      className="flex relative items-center mx-16 justify-between z-20 h-12 w-full rounded-t-lg focus-within:shadow-lg bg-white px-3"
                    >
                      <span className="text-black">Filter</span>
                      <img
                        src="/images/upArrow.svg"
                        width={20}
                        height={20}
                        className="object-contain ml-auto"
                        alt="Up arrow"
                      />

                      <div className="absolute flex  flex-col top-full border-t-2    border-gray-200 left-0 w-full p-2 bg-white rounded-b-lg">
                        <div className=" flex flex-col">
                          <h1 className=" inline-flex items-center mt-3 mx-2   text-lg">
                            Status
                          </h1>
                          <label className="inline-flex items-center    mt-3 mx-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600"
                            />
                            <span className="ml-2 text-gray-700">All</span>
                          </label>

                          <label className="inline-flex items-center mt-3 mx-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600"
                            />
                            <span className="ml-2 text-gray-700">Active</span>
                          </label>
                          <label className="inline-flex items-center mt-3 mx-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600"
                            />
                            <span className="ml-2 text-gray-700">Upcoming</span>
                          </label>
                          <label className="inline-flex items-center mt-3 mx-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600"
                            />
                            <span className="ml-2 text-gray-700">Past</span>
                          </label>
                        </div>
                        <div className=" flex flex-col  py-5     ">
                          <h1 className=" inline-flex items-center py-2 mt-3 mx-2 border-t-2 text-lg">
                            Level
                          </h1>
                          <label className="inline-flex items-center mt-3 mx-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600"
                            />
                            <span className="ml-2 text-gray-700">Easy</span>
                          </label>

                          <label className="inline-flex items-center mt-3 mx-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600"
                            />
                            <span className="ml-2 text-gray-700">Medium</span>
                          </label>
                          <label className="inline-flex items-center mt-3 mx-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600"
                            />
                            <span className="ml-2 text-gray-700">Hard</span>
                          </label>
                        </div>
                      </div>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={toggleFilter}
                    className="relative flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white px-3"
                  >
                    <span className="grid place-items-center h-full w-12 text-black">
                      Filter
                    </span>
                    <img
                      src="/images/downArrow.svg"
                      width={20}
                      height={20}
                      className="object-contain m-1"
                      alt="Down arrow"
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {isFilterOpen && (
        //filter-20
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center "></div>
      )}

      <section className="text-gray-600 body-font bg-[#003145] px-5 md:px-20 mx-auto">
        <div className="container px-20 py-24 mx-auto">
          <div className="-m-4 grid grid-cols-1 md:grid-cols-3 gap-10">
            {challenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                name={challenge.name}
                imgSrc={challenge.imgSrc}
                status={challenge.status}
                description={challenge.description}
                countdownDate={challenge.countdownDate}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChallengesMenu;
