import Image from "next/image";
import React from "react";

const Leftside = () => {
  return (
    <div className="w-full">
      <Image
        alt="About"
        src="/assets/about/left.jpg"
        width={650}
        height={650}
        loading="lazy"
        className="rounded-xl"
      />

      <div>
        <h2 className="mb-2 mt-8 text-2xl font-bold">About Event</h2>

        <p className="max-w-[650px] text-justify text-gray-500">
          The Saudi-Swiss Symposium, where we have gathered an impressive
          line-up of market leaders, government officials, and a diverse range
          of companies from both Saudi Arabia and Switzerland. This event
          promises to be a unique opportunity for networking, learning, and
          collaboration.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="mb-2 mt-8 text-2xl font-bold">Why Attend?</h2>

        <p className="max-w-[650px] text-justify text-gray-500">
          Our symposium will feature engaging presentations, discussions, and
          networking sessions with:
        </p>
        <p className="max-w-[650px] text-justify text-gray-500">
          <span className="font-bold text-black">+40 Swiss Companies:</span>{" "}
          Gain insights into the innovative approaches and success stories of
          leading Swiss companies, and explore potential collaborations.{" "}
        </p>
        <p className="max-w-[650px] text-justify text-gray-500">
          <span className="font-bold text-black">+90 Saudi Companies: </span>
          Discover the vast opportunities for partnership and investment in the
          thriving Saudi market.{" "}
        </p>
        <p className="max-w-[650px] text-justify text-gray-500">
          <span className="font-bold text-black">+20 Government Bodies: </span>
          Hear from government officials about the latest policies and
          initiatives supporting business growth and international cooperation
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="mb-2 mt-8 text-2xl font-bold">Highlights</h2>

        <p className="max-w-[650px] text-justify text-gray-500">
          <span className="font-bold text-black">Keynote Addresses: </span>
          Listen to inspiring speeches from industry experts and thought
          leaders.
        </p>

        <p className="max-w-[650px] text-justify text-gray-500">
          <span className="font-bold text-black">Panel Discussions: </span>
          Participate in thought-provoking discussions on topics shaping the
          Saudi-Swiss business landscape.
        </p>

        <p className="max-w-[650px] text-justify text-gray-500">
          <span className="font-bold text-black">
            Networking Opportunities:{" "}
          </span>
          Connect with potential partners, investors, and industry peers during
          our networking breaks and evening reception.
        </p>
      </div>
    </div>
  );
};

export default Leftside;
