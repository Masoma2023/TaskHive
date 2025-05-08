import React from 'react';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide';
import { slideData } from './slider-data/slidesData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function SliderComp() {
  return (
    <>
      <div className="mx-auto w-full my-20 py-32 lg:px-10 bg-[#0D1728] max-w-7xl">
        <div className="my-4">
          <div className="w-32 h-[2px] mx-auto bg-white my-2"></div>
          <h3 className="text-[#FFFFFF] text-2xl text-center">
            What they say about Us
          </h3>
        </div>
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
            },
            576: {
              width: 576,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
          }}
          className="mySwiper lg:translate-x-8"
        >
          {slideData.map(slide => (
            <SwiperSlide className="bg-transparent" key={slide.id}>
              <Slide {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SliderComp;
