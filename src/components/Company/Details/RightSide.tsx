import Image from "next/image";
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

const RightSide = (Props: Props) => {
  return (
    <div className="flex w-full flex-col gap-y-8 sm:w-[65%]">
      {/* Person */}
      <div>
        <h3 className="mb-4 text-xl font-bold">Contact Representitve</h3>
        <div className="flex  gap-x-3">
          <Image
            alt="Person"
            src={`${Props.person.photo}`}
            width={100}
            height={100}
            className="h-12 w-12 rounded-full border-2 object-cover"
          />
          <div>
            <h3>{Props.person.position}</h3>
            <h4 className="font-bold ">{Props.person.name}</h4>
            {/* <h5 className="text-sm text-gray-400">{Props.person.email}</h5> */}
          </div>
        </div>
      </div>

      {/* Sector */}
      {/* <div>
        <h3 className="mb-4 text-xl font-bold">Sector</h3>
        <p className="text-gray-500">{Props.sector}</p>
    </div> */}

      {/* Contacts */}
      <div>
        <h3 className="mb-4 text-xl font-bold">Contacts</h3>
        <div className="flex">
          <h4 className="mr-2 font-bold">Email:</h4>
          <p className="text-gray-500"> {Props.email}</p>
        </div>
        <div className="flex">
          <h4 className="mr-2 font-bold">Website:</h4>
          <p className="text-gray-500">{Props.website}</p>
        </div>
      </div>
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
    </div>
  );
};

export default RightSide;
