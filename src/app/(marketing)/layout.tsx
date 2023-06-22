import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* root navbar  */}
        <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
          <div className="flex items-center flex-shrink-0 mr-6 text-white">
            <span className="text-xl font-semibold tracking-tight">
              Root Navbar
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow"></div>
            <div>
              <a
                href="#responsive-header"
                className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
              >
                Docs
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
              >
                Examples
              </a>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
};

export default layout;
