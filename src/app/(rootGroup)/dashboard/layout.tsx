import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center justify-between min-h-screen p-24">
      {/* side navbar  */}

      <div className="sidebar fixed top-0 z-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-xl text-gray-100">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="px-2 py-1 bg-blue-600 rounded-md bi bi-app-indicator" />
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              TailwindCSS
            </h1>
            <i className="cursor-pointer bi bi-x ml-28 lg:hidden" />
          </div>
          <div className="my-2 bg-gray-600 h-[1px]" />
        </div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="text-sm bi bi-search" />
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-house-door-fill" />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-bookmark-fill" />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Bookmark
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]" />
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-chat-left-text-fill" />
          <div className="flex items-center justify-between w-full">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Chatbox
            </span>
            <span className="text-sm rotate-180" id="arrow">
              <i className="bi bi-chevron-down" />
            </span>
          </div>
        </div>
        <div
          className="w-4/5 mx-auto mt-2 text-sm font-bold text-left text-gray-200"
          id="submenu"
        >
          <h1 className="p-2 mt-1 rounded-md cursor-pointer hover:bg-blue-600">
            Social
          </h1>
          <h1 className="p-2 mt-1 rounded-md cursor-pointer hover:bg-blue-600">
            Personal
          </h1>
          <h1 className="p-2 mt-1 rounded-md cursor-pointer hover:bg-blue-600">
            Friends
          </h1>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-box-arrow-in-right" />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </div>

      {/* main content  */}

      <div className="main-content flex-1 w-full max-w-[1000px] lg:ml-[300px]">
        {children}
      </div>
    </section>
  );
};

export default layout;
