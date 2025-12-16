import { Auth } from "@/components/auth";
import { Search } from "lucide-react";
import React from "react";
import { Categories } from "./categories";

const categories = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Youtube",
    value: "Youtube",
  },
  {
    name: "Instagram",
    value: "Instagram",
  },
  {
    name: "Tiktok",
    value: "Tiktok",
  },
  {
    name: "Linkedin",
    value: "Linkedin",
  },
  {
    name: "Tweet",
    value: "Tweet",
  },
];

export const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div>
      <div className="flex justify-between items-center md:flew-row gap-2 shadow-sm border-b-2 py-4 px-4 bg-white">
        {/* <Categories items={categories} /> */}
        <div>
        <h2 className='bg-primary p-2 rounded-full text-xs text-white px-3'>🔥 Write Like a Pro. Every Time.</h2>
      </div>
        <div className="ml-auto">
          <Auth />
        </div>
      </div>

      <div className="p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center text-white items-center ">
      <h2 className='text-3xl font-bold'>Browse All Templates</h2>
      <p>What would you like to create today</p>
      <div className="flex gap-2 items-center p-2 border rounded-md bg-white w-full my-5 md:w-[40%]">
          <Search className='text-primary' />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-black"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
        </div>
    </div>
    
  );
};
