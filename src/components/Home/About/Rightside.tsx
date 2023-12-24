import React from "react";
import Countdown from "react-countdown";

const Rightside = () => {
  return (
    <div className="flex w-full flex-col gap-y-6 sm:w-[65%]">
      {/* Date */}
      <DateTime />

      <h2 className="text-center text-2xl font-bold sm:text-left">
        The Saudi Swiss Symposium
      </h2>

      {/* Tags */}
      {/* <Tags /> */}

      {/* Location */}
      <div>
        {/* Map */}
        <div>
          <iframe
            className="mb-8 h-72 w-full rounded-lg border-2 shadow-sm"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.627061066577!2d46.718289299999995!3d24.8082207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efc5ababc7065%3A0xbd4b4b5828b1d31a!2z2YHZitix2YXZiNmG2Kog2KfZhNix2YrYp9i2!5e0!3m2!1sar!2ssa!4v1693738371311!5m2!1sar!2ssa"
            width="600"
            height="450"
            loading="lazy"
          />
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-bold">
            Fairmont Hotel, Riyadh, Saudi Arabia
          </h4>
        </div>
      </div>

      {/* CountDown */}
      <CowntDown />
    </div>
  );
};

const DateTime = () => {
  return (
    <div className="flex items-center justify-center gap-x-4 sm:justify-start ">
      {/* <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border shadow-md">
        <p>Sep</p>
        <p className="font-bold">10</p>
      </div> */}

      <div>
        <p className="text-gray-500">Saturday</p>
        <h4 className="font-bold">10 September, 2023</h4>
      </div>
    </div>
  );
};

const Tags = () => {
  const Tags = ["Festival", "Educational", "Party"];
  return (
    <ul className="m-auto sm:m-0 ">
      {Tags.map((tag, index) => {
        return (
          <li
            key={index}
            className="mr-2 inline-block rounded-full border border-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          >
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

const CowntDown = () => {
  return (
    <div>
      <Countdown
        date={new Date("2024-09-10T09:00:00")}
        renderer={({ days, hours, minutes, completed }) => {
          if (completed) {
            return <p>Event is Over</p>;
          } else {
            return (
              <div className="flex flex-col rounded-2xl border bg-white p-4 shadow-sm">
                <div className="flex justify-around">
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold">{days}</h3>
                    <p className="text-xl text-gray-500">Days</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold">{hours}</h3>
                    <p className="text-xl text-gray-500">Hours</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold">{minutes}</h3>
                    <p className="text-xl text-gray-500">Minutes</p>
                  </div>
                </div>
              </div>
            );
          }
        }}
      />
    </div>
  );
};

export default Rightside;
