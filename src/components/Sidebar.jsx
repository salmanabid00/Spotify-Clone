import React from "react";
import { assets } from "../assets/assets";

function Sidebar() {
  return (
    <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex bg-[#121212]">
      <div className="bg-[#242424] h-[15%] rounded-md flex flex-col justify-around p-4">
        <div className="flex items-center gap-2 pl-4 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-2 pl-4 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#242424] h-[85%] rounded-md mt-2">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img className="w-8" src={assets.stack_icon} alt="Library Icon" />
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="w-5 cursor-pointer"
                src={assets.arrow_icon}
                alt="Arrow Icon"
              />
              <img
                className="w-5 cursor-pointer"
                src={assets.plus_icon}
                alt="Plus Icon"
              />
            </div>
          </div>
          <div className="bg-[#242424] m-2 rounded-md p-4 flex flex-col gap-2">
            <h1 className="text-lg font-semibold">
              Create Your First Playlist
            </h1>
            <p className="text-sm font-light">It's easy, we'll help you</p>
            <button className="px-4 py-2 bg-white text-sm text-black rounded-full mt-2">
              Create Playlist
            </button>
          </div>
          <div className="bg-[#242424] m-2 rounded-md p-4 flex flex-col gap-2 mt-4">
            <h1 className="text-lg font-semibold">Let's find some Podcasts</h1>
            <p className="text-sm font-light">
              We'll keep you up to date on new episodes
            </p>
            <button className="px-4 py-2 bg-white text-sm text-black rounded-full mt-2">
              Browse Podcast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
