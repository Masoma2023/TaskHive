import type { Tslide } from '@/types/home-page-slider/slide';
import Image from 'next/image';

function Slide({ text, image, name, job }: Tslide) {
  return (
    <div className="sm:my-10  lg:translate-x-0">
      <div className="textBox p-4 border border-[#6B7B94] rounded-md bg-transparent w-70 overflow-hidden text-sm text-[#FFFFFF]">
        <p>
          {text}
        </p>
      </div>
      <div className="circleBox bg-[#6B7B94] w-2 h-2 rounded-full my-3 mx-auto"></div>
      <div className="circleBox bg-[#6B7B94] w-5 h-5 rounded-full my-3 mx-auto"></div>

      <div>
        <Image width={100} height={100} src={image} alt="" className="customBorder object-cover w-12 h-12 border-2 border-[#807F7C] rounded-full mx-auto" />
        <div className="my-4">
          <h3 className="text-lg text-[#FFFFFF]">{name}</h3>
          <p className="text-sm text-[#FFFFFF]">{job}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
