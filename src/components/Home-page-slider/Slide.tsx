import type { Tslide } from '@/types/home-page-slider/slide';
import Image from 'next/image';

function Slide({ text, image, name, job }: Tslide) {
  return (
    <div className="sm:my-10 lg:translate-x-0 flex flex-col items-center">
      <div className="textBox p-4 border border-[#6B7B94] rounded-md bg-transparent md:w-[250px] xl:w-[300px] lg:mx-2 xl:mx-0 h-24 overflow-hidden text-xs text-[#FFFFFF] sm:text-base">
        <p className="text-center">
          {text}
        </p>
      </div>
      <div className="my-3 space-y-3 flex flex-col items-center">
        <div className="circleBox bg-[#6B7B94] w-2 h-2 rounded-full"></div>
        <div className="circleBox bg-[#6B7B94] w-5 h-5 rounded-full"></div>
      </div>

      <div className="flex flex-col items-center">
        <Image
          width={100}
          height={100}
          src={image}
          alt=""
          className="customBorder object-cover w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-[#807F7C] rounded-full"
        />
        <div className="my-4 text-center">
          <h3 className="text-lg sm:text-xl md:text-md lg:text-lg text-[#FFFFFF]">{name}</h3>
          <p className="text-sm sm:text-base md:text-sm lg:text-md text-[#FFFFFF]">{job}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
