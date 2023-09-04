import React from "react";

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

const LeftSide = (Props: Props) => {
  return (
    <div className="w-full">
      <article className="mb-8">
        <h4 className="mb-4 text-xl font-bold">About Company</h4>
        <p className="text-justify text-gray-500">{Props.shortProfile}</p>
      </article>

      <article>
        {/* <h4 className="mb-4 text-xl font-bold ">Objective</h4>
        <p className="text-justify text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          laboriosam dolorum quaerat totam sit? Aliquam laudantium consectetur
          voluptatibus earum doloremque quos, asperiores harum consequatur modi
          eum, iure debitis optio impedit.
        </p> */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Sector</h3>
          <p className="text-gray-500">{Props.sector}</p>
        </div>
      </article>
    </div>
  );
};

export default LeftSide;
