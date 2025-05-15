'use client';
import type { memberType } from '@/types/memberType/memberType';
import type { StaticImageData } from 'next/image';
import Container from '@/components/container/Container';
import Card from '@/components/Members-Card/card';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { BiDna } from 'react-icons/bi';
import { HiOutlineChartBar } from 'react-icons/hi2';
import { LuBrain } from 'react-icons/lu';
import backImage2 from '../../../public/about page images/backgorund2.jpg';
import backImage from '../../../public/about page images/background.png';
import taskhiveGroup from '../../../public/about page images/GroupHive.png';
import taskhive3 from '../../../public/about page images/hive-vibe(3).png';
import { memData } from '../../components/Members-Card/members-data/memData';

function About() {
  const [backgroundImage, setBackgroundImage] = useState<StaticImageData>(backImage);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleChangeImage = () => {
    setIsToggled((prev: boolean) => {
      const newToggle = !prev;
      setBackgroundImage(newToggle ? backImage2 : backImage);
      return newToggle;
    });
  };

  return (
    <div>
      <Image src={taskhive3} width={100} height={100} className="absolute right-0 size-36 lg:size-32" alt="task-hive3" />
      <Container>
        <div className="realative">
          <div className="flex flex-col md:flex-row lg:px-8 lg:py-16 justify-between text-center">
            <div className="space-y-1 text-center md:text-left md:px-20 lg:px-0 lg:text-left pt-20 pb-10 lg:py-20">
              <p className="lg:text-lg text-lg text-[var(--secondaryText)]">About Us</p>
              <h2 className="text-xl headerText lg:text-4xl xl:text-6xl font-bold lg:font-semibold md:w-60 lg:w-md xl:w-2xl text-[var(--primaryText)]">Built to help you work smarter — not harder.</h2>
              <p className="md:w-70 lg:w-90 text-[var(--secondaryText)] text-sm lg:text-lg">Task Hive is a modern productivity tool designed for people who value structure, clarity, and smart workflows.</p>
            </div>
            <div>
              <div className="absolute right-0">
                <div className="relative">
                  <div className="bg-[var(--yellow)] rounded-md py-1 absolute -left-10 md:-left-20 top-10 text-sm md:text-normal w-36 md:w-44">
                    + 1 years experience
                  </div>
                  <div>
                    <Image src={backgroundImage} width={1000} height={100} className="w-65 h-40 md:w-75 md:h-48 lg:w-xl lg:h-96 object-cover rounded-l lg:rounded-l-2xl md:mt-20 lg:mt-10" alt="task-hive3" />
                  </div>
                  <button type="button" onClick={handleChangeImage} className="relative bg-gray-300 rounded-full cursor-pointer w-10 lg:w-16 h-5 lg:h-8 left-8 -top-7 lg:-top-12">
                    <input type="checkbox" readOnly checked={isToggled} className="input w-40 h-6 z-40 cursor-pointer absolute -left-10 opacity-0" />
                    <p className="slider rounded-full absolute top-0 bottom-0 left-0 right-0 bg-gray-100 transition duration-500"></p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
          <div className="flex flex-row w-full justify-between md:justify-center items-center md:space-x-8 pt-40 md:py-8 mt-8 md:mt-5">
            <div className="border border-gray-400 p-2 rounded-md">
              <BiDna className="size-4 md:size-6 " />
            </div>
            <div className="border border-gray-400 p-2 rounded-md">
              <AiOutlineSecurityScan className="size-4 md:size-6" />
            </div>
            <div className="border border-gray-400 p-2 rounded-md">
              <HiOutlineChartBar className="size-4 md:size-6" />
            </div>
            <div className="border border-gray-400 p-2 rounded-md">
              <LuBrain className="size-4 md:size-6" />
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <div className="text-center py-6">
            <h3 className="text-lg text-[var(--primaryText)]">Meet our team</h3>
            <h1 className="text-xl md:text-3xl font-semibold text-[var(--primaryText)]">Awesome team members</h1>
          </div>
          <div className="md:grid grid-cols-3 gap-6 lg:px-10 2xl:px-0">
            {
              memData.map((member: memberType) => (
                <Card key={member?.id} {...member} />
              ))
            }
          </div>

          <div className="text-center py-10">
            <h4 className="text-lg text-slate-700 cursor-pointer hover:opacity-80 transition duration-150 active:scale-95">show more</h4>
            <div className="bg-slate-700 dark:bg-slate-500 mx-auto w-24 h-0.5"></div>
          </div>
        </div>
      </Container>
      <Image src={taskhiveGroup} width={500} height={500} className="w-36 h-56 md:w-36 lg:h-96 lg:w-52 absolute left-0 -bottom-24 lg:-bottom-56 xl:-bottom-20" alt="task-hive1" />
    </div>

  );
}

export default About;
