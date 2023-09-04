import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8  sm:px-6 lg:px-8 ">
        <div className=" border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between ">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Cookies
              </a>
            </li>
          </ul>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <a href="/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                <span className="sr-only">Twitter</span>

                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="m-auto mt-8 flex flex-col justify-around sm:flex-row">
          <Image
            className="h-full w-auto   "
            src="/assets/nidlp-footer.png"
            alt="logo"
            width={280}
            height={240}
            priority
          />
          <Image className="h-full w-auto  " src="/assets/logo.png" alt="logo" width={280} height={240} priority />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
