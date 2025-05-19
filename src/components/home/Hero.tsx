/* eslint-disable style/jsx-one-expression-per-line */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <>
      <div className="w-full relative pb-10 dark:bg-black ">
        <Image
          src="/hive_vibe(2).png"
          width={1000}
          height={1000}
          alt="Honeycomb"
          className="absolute w-36 top-0 right-0 md:w-44 block lg:w-56 dark:hidden"
          priority
        />
        <Image
          src="/hive vibe2025.png"
          width={1000}
          height={1000}
          alt="Honeycomb"
          className="absolute w-36 top-0 right-0 md:w-44 hidden lg:w-56 dark:block"
          priority
        />
      </div>
      <div className="dark:bg-black">
        <div className=" lg:px-20 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12  md:p-0 ">
          <div className=" text-center sm:pt-6 pt-10 lg:text-left order-2  lg:pb-16 lg:order-none dark:bg-black">
            <h1 className="font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] text-[#0D1728] leading-tight dark:text-white">
              Structure your <br /> tasks. Power your <br /> productivity
            </h1>
            <p className="font-normal text-[18px] sm:text-[20px] md:text-[24px] text-[#6B7B94] leading-8 mt-4 dark:text-[#6B7B94]">
              Bring clarity to your workflow and reach your goals faster.
            </p>
            <Link
              href="#"
              className="font-normal cursor-pointer text-[18px] sm:text-[20px] text-[#022155] bg-[#FACC15] rounded-md px-4 py-2 inline-block mt-8 hover:bg-[#022155] hover:text-white transition transform hover:scale-110
            dark:text-[#0D1728] dark:hover:bg-white dark:hover:text-[#022155]"
            >
              Join Task Hive
            </Link>
          </div>
          <div className="order-1 lg:order-none lg:pt-10 lg:pb-0">
            <Image
              src="/phone_and_desktop_phone.png"
              className="w-[300px] sm:w-[250px] md:w-[350px] lg:w-[600px] block dark:hidden"
              width={1000}
              height={1000}
              alt="Hero Image"
            />
            <Image
              src="/Group707.png"
              className="w-[300px] sm:w-[250px] md:w-[350px] lg:w-[580px] hidden dark:block"
              width={1000}
              height={1000}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[750px] md:top-[620px]">
        <Image src="/Group71.png" alt="Honeycomb" className="w-36 md:w-44 lg:w-56  block dark:hidden" width={1000} height={1000} />
        <Image src="/Group711.png" alt="Honeycomb" className="w-36 md:w-44 lg:w-56 hidden dark:block" width={1000} height={1000} />
      </div>

    </>
  );
}
