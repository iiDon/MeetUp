import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

const About = () => {
  return (
    <div className=" my-12 flex w-full flex-col  gap-x-12  sm:flex-row ">
      <Leftside />
      <Rightside />
    </div>
  );
};

export default About;
