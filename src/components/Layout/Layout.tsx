import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (Props: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="m-auto max-w-[1300px] px-6 sm:px-8">{Props.children}</div>
      <Footer />
    </div>
  );
};
