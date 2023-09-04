import Image from "next/image";
import React from "react";
import Modal from "../Book";

interface BookNowProps {
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

const BookNow = (company: BookNowProps) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        companyApplied={company.email}
        companyName={company.name}
      />
      <div className="my-8 flex flex-col items-center justify-between gap-y-8 rounded-lg bg-white p-8 shadow-md md:flex-row">
        <Image
          src={`${company.logo}`}
          alt="bookNow"
          width={50}
          height={50}
          className="h-24 w-24 rounded-full border-4 object-contain"
        />

        <div>
          <h1 className="text-xl font-bold">{company.name}</h1>
          <p className="text-gray-400">{company.email}</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="h-fit w-44 rounded-lg bg-purple-600 p-4 font-bold text-white hover:bg-purple-700"
        >
          Book Now
        </button>
      </div>
    </>
  );
};

export default BookNow;
