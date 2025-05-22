import React from 'react';
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia';

function Task_details() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col justify-center w-full md:h-screen px-4 md:px-0 py-8 md:py-80 lg:py-40 space-y-8">
        <div className="flex justify-between w-52 md:w-96 lg:w-1/2 md:pl-10">
          <LiaLongArrowAltLeftSolid className="size-6 lg:size-8 cursor-pointer active:-translate-y-0.5 transition duration-150" />
          <h3 className="text-2xl font-semibold text-slate-900 text-center">Task Details</h3>
        </div>
        <div className="border bg-white border-gray-300 rounded p-4  lg:mt-0 space-y-4 md:w-1/2 md:mb-28 lg:mb-0 lg:w-1/3 mx-auto">
          <h3 className="text-xl text-slate-900 mb-8 font-semibold">Design homepage</h3>
          <div className="flex justify-between">
            <span className="text-gray-400">status</span>
            <span className="bg-green-400 text-white px-6 py-1 rounded-md text-sm">done</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">priority</span>
            <span className="bg-red-500 text-white px-5 py-1 rounded-md text-sm">High</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Deadline</span>
            <span className="text-sm">Jul 24, 2025</span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-gray-400">Description</span>
            <span className="px-4 py-2 rounded text-xs text-gray-400 border border-gray-400 pb-14">Create the hero section, feature highlights, and CTA areas for the landing page, ensuring responsiveness and visual consistency with brand guidelines.</span>
          </div>
          <div className="flex flex-row space-x-6">
            <button className="bg-amber-400 text-white text-sm px-7 py-1 rounded hover:opacity-85 active:scale-98 cursor-pointer" type="button">Edit</button>
            <button className="bg-sky-900 text-white text-sm px-7 py-1 rounded hover:opacity-85 active:scale-98 cursor-pointer" type="button">delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task_details;
