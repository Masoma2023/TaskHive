import type { Tslide } from '@/types/home-page-slider/slide';
import Image from 'next/image';

function Slide(Slide: Tslide) {
  return (
    <div className="sm:my-10 lg:translate-x-0 flex flex-col items-center">
      <div className="textBox p-4 border border-[var(--darkSky)] rounded-md bg-transparent md:w-[250px] xl:w-[300px] lg:mx-2 xl:mx-0 h-24 overflow-hidden text-white sm:text-base">
        <p className="text-center">
          {Slide?.text}
        </p>
      </div>

      <div className="my-3 space-y-3 flex flex-col items-center">
        <div className="circleBox bg-[var(--darkSky)] size-2 rounded-full"></div>
        <div className="circleBox bg-[var(--darkSky)] size-5 rounded-full"></div>
      </div>

      <div className="flex flex-col items-center">
        <Image
          width={100}
          height={100}
          src={Slide?.image}
          alt=""
          className="customBorder object-cover size-12 sm:size-12 md:size-14 border-2 border-[var(--darkSky)] rounded-full"
        />

        <div className="my-4 text-center">
          <h3 className="text-lg sm:text-xl md:text-md lg:text-lg text-white">{Slide?.name}</h3>
          <p className="text-sm lg:text-md text-white">{Slide?.job}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
