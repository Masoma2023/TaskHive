import Image from 'next/image';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import logo from '../../../public/Logo.png';
import groupImage from '../../../public/welcome page images/Group69(2).png';
import groupImage2 from '../../../public/welcome page images/Group69.png';
import backImage from '../../../public/welcome page images/Group78.png';
import check from '../../../public/welcome page images/Outline1.png';
import Container from '../container/Container';

function WelcomePage() {
  return (
    <Container>
      <div className="h-screen">
        <div className="flex justify-between py-10 md:px-10 lg:px-20">
          <div className="flex flex-col text-left">
            <div>
              <Image src={logo} alt="logo" width={100} height={100} className="w-28" />
            </div>
            <div className="text-gray-600 px-2 text-xs md:text-base dark:text-white">Your productivity partner</div>
          </div>
          <div>
            <div className="border rounded border-gray-600 p-1.5 md:p-2 cursor-pointer active:scale-98 shadow shadow-gray-300 dark:bg-gray-500 active:shadow-none">
              <IoClose className="dark:text-white md:text-xl" />
            </div>
          </div>

        </div>
        <div className="mx-auto py-2 space-y-14">
          <Image src={groupImage} alt="groupImage" width={1000} height={1000} className="hidden dark:block w-40 md:w-1/4 mx-auto" />
          <Image src={groupImage2} alt="groupImage" width={1000} height={1000} className="w-40 md:w-1/4 mx-auto dark:hidden" />
          <h3 className="text-xl md:text-2xl capitalize text-center mx-auto w-60 md:w-80 md:font-semibold dark:text-white">Welcome to task hive, sediqa hosseini!</h3>
        </div>
        <div>
          <Image src={backImage} width={1000} height={1000} alt="background image" className="hidden md:block md:w-36  md:h-80 lg:w-44 lg:h-96 absolute right-0 top-60" />
        </div>
        <div className="flex justify-center items-center bg-green-100 dark:bg-[#33DC711A] rounded-md my-10 mx-auto w-60 md:w-90 px-2 md:px-5 py-2 space-x-2 lg:space-x-5 mt-20 xl:mt-32">
          <Image src={check} alt="check" width={1000} height={1000} className="w-6 md:w-10" />
          <h4 className="text-slate-800 text-xs md:text-base dark:text-white">your work space has been created</h4>
        </div>
      </div>
    </Container>
  );
}

export default WelcomePage;
