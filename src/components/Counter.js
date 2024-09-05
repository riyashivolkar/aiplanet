import React, { useState, useEffect } from "react";

const Counter = ({ countdownDate, status }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetDate = new Date(countdownDate).getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      if (status === "Upcoming") {
        return {
          status: "startsIn",
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
      } else if (status === "Active") {
        return {
          status: "endsIn",
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
      }
    } else {
      return {
        status: "endedOn",
        endDate: new Date(targetDate).toDateString(), // Format the end date
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear timer on unmount
  }, [countdownDate, status]);

  return (
    <div className="flex items-center justify-center flex-col">
      {timeLeft.status === "startsIn" ? (
        <>
          <h1>Starts In</h1>
          <div className="text-center text-[#454545]">
            <ul className="flex justify-center space-x-4 text-sm font-semibold">
              <li className="bg-white p-4 rounded-lg">
                <span className="block text-3xl">{timeLeft.days}</span>
                <span className="font-normal">Days</span>
              </li>
              <li className="bg-white p-4 rounded-lg">
                <span className="block text-3xl">{timeLeft.hours}</span>
                <span className="font-normal">Hours</span>
              </li>
              <li className="bg-white p-4 rounded-lg">
                <span className="block text-3xl">{timeLeft.minutes}</span>
                <span className="font-normal">Minutes</span>
              </li>
            </ul>
          </div>
        </>
      ) : timeLeft.status === "endsIn" ? (
        <>
          <h1>Ends In</h1>
          <div className="text-center text-[#454545]">
            <ul className="flex justify-center space-x-4 text-sm font-semibold">
              <li className="bg-white p-4 rounded-lg">
                <span className="block text-3xl">{timeLeft.days}</span>
                <span className="font-normal">Days</span>
              </li>
              <li className="bg-white p-4 rounded-lg">
                <span className="block text-3xl">{timeLeft.hours}</span>
                <span className="font-normal">Hours</span>
              </li>
              <li className="bg-white p-4 rounded-lg">
                <span className="block text-3xl">{timeLeft.minutes}</span>
                <span className="font-normal">Minutes</span>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div>
          <h1 className=" text-sm">Ended On</h1>
          <h1 className="text-lg flex flex-col text-center font-semibold text-[#454545] py-8 ">
            {timeLeft.endDate}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Counter;
