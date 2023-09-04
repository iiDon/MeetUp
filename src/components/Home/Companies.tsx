import Image from "next/image";
import Link from "next/link";
import React from "react";
import { COMPANIES } from "~/Contstant/Companies";
import Modal from "../Book";

const Companies = () => {
  return (
    <div className="flex-  mb-16  flex-col" id="companies">
      <div className="pt-8 text-center">
        <h5 className="font-bold">Choose the Company</h5>
        <h1 className="py-8 text-2xl font-bold">
          Companies Whose Participant In Event
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {COMPANIES.map((company, index) => {
          return (
            <Company
              key={index}
              id={company.id}
              name={company.name}
              shortProfile={company.shortProfile}
              sector={company.sector}
              email={company.email}
              website={company.website}
              logo={company.logo}
              person={company.person}
            />
          );
        })}
      </div>
    </div>
  );
};

interface CompanyProps {
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

const Company = (company: CompanyProps) => {
  // const Tags = ["Festival", "Educational", "Party"];
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="flex flex-col gap-y-3  border bg-white p-4 shadow-md">
        <Image
          alt="Company"
          src={`${company.logo}`}
          width={3000}
          height={3000}
          className="m-auto h-24 w-full object-contain"
        />
        <h4 className="text-lg font-bold">{company.name}</h4>
        <h5 className="text-sm text-gray-400">{company.email}</h5>
        {/* <ul className="">
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
        </ul> */}
        <div className="flex items-center gap-x-3">
          <Image
            alt="Person"
            src={`${company.person.photo}`}
            width={100}
            height={100}
            className="h-12 w-12 rounded-full border-2 object-cover"
          />
          <div>
            <h4 className="font-bold ">{company.person.name}</h4>
            <h5 className="text-sm text-gray-400">{company.person.position}</h5>
          </div>
        </div>
        <div className="flex w-full  flex-col justify-between gap-2 transition-all">
          <button
            onClick={() => setShowModal(true)}
            className="h-12 w-full rounded-lg bg-purple-700 px-4 font-bold text-white transition-all hover:bg-purple-800 hover:transition-all "
          >
            Book Now
          </button>

          <Link href={`/${company.id}`}>
            <button className="h-12  w-full rounded-lg border-2 border-purple-700 px-4 font-bold text-purple-700 hover:bg-purple-700 hover:text-white hover:transition-all">
              Read More
            </button>
          </Link>
        </div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          companyApplied={company.email}
          companyName={company.name}
        />
      </div>
    </>
  );
};

export default Companies;
