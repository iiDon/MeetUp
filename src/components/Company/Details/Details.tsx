import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

interface Props {
  id: string;
  name: string;
  shortProfile: string;
  sector: string;
  email: string;
  website: string;
  logo: string;
  person: {
    name: string;
    position: string;
    email: string;
    photo: string;
  };
}

const Details = (Props: Props) => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row">
      <LeftSide {...Props} />
      <RightSide {...Props} />
    </div>
  );
};

export default Details;
