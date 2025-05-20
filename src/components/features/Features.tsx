import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

export default function Features() {
  return (
    <>
      <div className="w-full relative pb-10">
        <Image
          src="/hive_vibe(2).png"
          width={1000}
          height={1000}
          alt="Honeycomb"
          className="absolute w-36 top-0 right-0 md:w-44 lg:w-56"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto md:pt-14 pt-16 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <p className="text-[20px] sm:text-[26px] md:text-[28px] text-[#6B7B94] font-normal text-center">
          Features
        </p>

        <div className="relative">
          <Image
            src="/Group81.png"
            width={1000}
            height={1000}
            alt="Honeycomb"
            className="w-[90%] lg:ml-16"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
            <h2 className="text-center text-[#0D1728] text-[20px] sm:text-[30px] md:text-[38px] lg:text-[48px] font-medium leading-tight lg:max-w-2xl md:max-w-[550px] max-w-[450px]">
              Powerful features designed to keep your tasks on track.
            </h2>
          </div>
        </div>
      </div>
      <div className="absolute left-0 lg:top-[450px] md:top-[500px] top-[320px]">
        <Image src="/Group71.png" alt="Honeycomb" className="w-36 md:w-44 lg:w-56" width={1000} height={1000} />
      </div>
      <div className="h-auto pb-7 lg:pt-70 md:pt-40 pt-64 flex items-center justify-center flex-col text-center px-4">
        <h3 className="text-[#6B7B94] font-normal text-[22px] sm:text-[26px] md:text-[28px] ">Features</h3>
        <h2 className="text-[#022155] text-[28px] sm:text-[32px] md:text-[38px] font-semibold ">What TaskHive offers</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-12">
        <div className="lg:max-w-[500px] md:max-w-[380px] max-w-[280px]">
          <Image
            src="/Rectangle16.png"
            width={1000}
            height={1000}
            alt="Task Dashboard"
            className="w-full"
          />
          <div className="flex mt-4 gap-3">
            <Image src="/Frame.png" width={1000} height={1000} alt="icon" className="w-8 h-8 " />
            <div>
              <h3 className="font-medium text-[20px] text-[#0D1728]">Task Management</h3>
              <p className="font-normal text-[16px] text-[#6B7B94] mt-2">
                Create, edit, and organize tasks with ease. Set priorities, deadlines, and keep your workflow structured across statuses like To Do, In Progress, and Done.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[460px] md:max-w-[380px] max-w-[280px]">
          <Image
            src="/Rectangle16(1).png"
            width={1000}
            height={1000}
            alt="Dashboard Overview"
            className="w-full"
          />
          <div className="flex mt-4 gap-3">
            <Image src="/Frame(1).png" width={1000} height={1000} alt="icon" className="w-8 h-8 " />
            <div>
              <h3 className="font-medium text-[20px] text-[#0D1728]">Interactive Dashboard</h3>
              <p className="font-normal text-[16px] text-[#6B7B94] mt-2">
                Get a clear overview of your tasks and team activity. Visual charts and summary cards provide insights into task progress and productivity — all in one place.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-12 pt-10">
        <div className="lg:max-w-[460px] md:max-w-[380px] max-w-[280px]">
          <Image
            src="/Rectangle160.png"
            width={1000}
            height={1000}
            alt="Task Dashboard"
            className="w-full"
          />
          <div className="flex mt-4 gap-3">
            <Image src="/Frame12(100).png" width={1000} height={1000} alt="icon" className="w-8 h-8 " />
            <div>
              <h3 className="font-medium text-[20px] text-[#0D1728]">Smart Filters & Search</h3>
              <p className="font-normal text-[16px] text-[#6B7B94] mt-2">
                Quickly find what you need. Filter tasks by priority, status, and date. Use keyword search to zero in on the most relevant tasks.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[460px] md:max-w-[380px] max-w-[280px]">
          <Image
            src="/Rectangle1600.png"
            width={1000}
            height={1000}
            alt="Dashboard Overview"
            className="w-full"
          />
          <div className="flex mt-4 gap-3">
            <Image src="/Frame33(1).png" width={1000} height={1000} alt="icon" className="w-8 h-8 " />
            <div>
              <h3 className="font-medium text-[20px] text-[#0D1728]">Secure Authentication</h3>
              <p className="font-normal text-[16px] text-[#6B7B94] mt-2">
                Sign in or sign up using secure, token-based JWT authentication. Protected routes keep your private data safe while maintaining a smooth user experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-15">
        <Link
          href="#"
          className="text-[16px] text-[#022155] font-normal border-b-2 border-transparent hover:border-[#022155] transition-all duration-300 mb-20 cursor-pointer transform hover:scale-125"
        >
          Show more
        </Link>
      </div>

    </>

  );
}
