/* eslint-disable style/jsx-one-expression-per-line */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <>
      <div className="w-full relative">
        <Image
          src="/hive vibe (2).png"
          width={1000}
          height={1000}
          alt="Honeycomb"
          className="absolute w-36 top-0 right-0 md:w-44"
          priority
        />
      </div>

      <div className="container max-w-[1000px] mx-auto mt-16 flex flex-col-reverse lg:flex-row items-center justify-between px-4 gap-10">
        <div className="text-center lg:text-left">
          <h1 className="font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] text-[#0D1728] leading-tight">
            Structure your <br /> tasks. Power your <br /> productivity
          </h1>
          <p className="font-normal text-[18px] sm:text-[20px] md:text-[24px] text-[#6B7B94] leading-8 mt-4">
            Bring clarity to your workflow and reach your goals faster.
          </p>
          <Link
            href="#"
            className="font-normal cursor-pointer text-[18px] sm:text-[20px] text-[#022155] bg-[#FACC15] rounded-md px-4 py-2 inline-block mt-8"
          >
            Join Task Hive
          </Link>
        </div>
        <div>
          <Image
            src="/phone and desktop _ phone.png"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
            width={1000}
            height={1000}
            alt="Hero Image"
          />
        </div>
      </div>
      <div className="absolute left-0 top-[750px] md:top-[620px]">
        <Image src="/Group 71.png" alt="Honeycomb" className="w-36 md:w-44" width={1000} height={1000} />
      </div>

    </>
  );
}
