import type { Tslide } from '@/types/home-page-slider/slide';
import Image from 'next/image';

function Slide({ text, image, name, job }: Tslide) {
  return (
    <div className="sm:my-10 -translate-x-16 lg:translate-x-0">
      <div className="textBox p-4 border border-gray-400 rounded-md bg-transparent w-70 text-sm text-gray-200">
        <p>
          {text}
        </p>
      </div>
      <div className="circleBox bg-gray-300 w-2 h-2 rounded-full my-3 mx-auto"></div>
      <div className="circleBox bg-gray-300 w-5 h-5 rounded-full my-3 mx-auto"></div>

      <div>
        <Image width={100} height={100} src={image} alt="" className="customBorder w-12 h-12 border-2 border-gray-400 rounded-full mx-auto" />
        <div className="my-4">
          <h3 className="text-lg text-gray-100">{name}</h3>
          <p className="text-sm text-gray-100">{job}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
