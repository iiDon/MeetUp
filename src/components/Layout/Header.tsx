import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-72 bg-purple-950 py-4">
      <nav className="mx-8 flex justify-between pb-8">
        <Link href="/">
          <Image src="/assets/logo.png" width={150} height={150} alt="logo" />
        </Link>
        <Link href="/">
          <Image src="/assets/logo.png" width={150} height={150} alt="logo" />
        </Link>
      </nav>
      <div className="flex flex-col items-center justify-center gap-y-8 text-center text-white">
        <h4 className="rounded-full bg-purple-800 px-8 py-4 shadow-lg">
          The Meetup
        </h4>
        <h1 className="text-4xl font-bold">The Saudi Swiss Symposium</h1>
      </div>
    </div>
  );
};

export default Header;
