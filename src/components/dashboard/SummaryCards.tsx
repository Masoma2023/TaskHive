import React from 'react';
import { BiCollection } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { IoMdTime } from 'react-icons/io';
import { IoCheckmarkSharp } from 'react-icons/io5';

export default function SummaryCards() {
  return (
    <>
      <div className="col-span-1 w-full py-9 pl-6 rounded-[6px] bg-white shadow-md">
        <p className="font-normal -mt-4 text-[#6B7B94] text-[18px] pb-2">Total tasks</p>
        <div className="flex gap-3.5">
          <div className="border w-7 h-7 mt-2 rounded px-1 py-1 flex items-center justify-center border-[#6B7B94]">
            <BiCollection
              className="w-10 h-10 text-[#6B7B94]"
            />
          </div>
          <div>
            <p className="font-medium mt-0.5 text-3xl">21</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 w-full py-9 pl-6 rounded-[6px] bg-white shadow-md">
        <p className="font-normal -mt-4 text-[#6B7B94] text-[18px] pb-2">Done</p>
        <div className="flex gap-3.5">
          <div className="border w-7 h-7 mt-2 rounded px-1 py-1 flex items-center justify-center border-[#6B7B94]">
            <IoCheckmarkSharp className="w-10 h-10 text-[#6B7B94]" />
          </div>
          <div>
            <p className="font-medium mt-0.5 text-3xl">5</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 w-full py-9 pl-6 rounded-[6px] bg-white shadow-md">
        <p className="font-normal -mt-4 text-[#6B7B94] text-[18px] pb-2">In process</p>
        <div className="flex gap-3.5">
          <div className="border w-7 h-7 mt-2 rounded px-1 py-1 flex items-center justify-center border-[#6B7B94]">
            <IoMdTime
              className="w-10 h-10 text-[#6B7B94]"
            />
          </div>
          <div>
            <p className="font-medium mt-0.5 text-3xl">8</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 w-full py-9 pl-6 rounded-[6px] bg-white shadow-md">
        <p className="font-normal -mt-4 text-[#6B7B94] text-[18px] pb-2">Overdue tasks</p>
        <div className="flex gap-3.5">
          <div className="border w-7 h-7 mt-2 rounded px-1 py-1 flex items-center justify-center border-[#6B7B94]">
            <HiOutlineHashtag className="w-10 h-10 text-[#6B7B94]" />

          </div>
          <div>
            <p className="font-medium mt-0.5 text-3xl">16</p>
          </div>
        </div>
      </div>
    </>
  );
}
