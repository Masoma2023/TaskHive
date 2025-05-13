// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
// import  from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide';
import { slideData } from './slider-data/slidesData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function SliderComp() {
  return (
    <div className="mx-auto w-full my-20 py-16 px-4 sm:px-6 lg:px-10 bg-[var(--sliderBg)] max-w-7xl">
      <div className="my-4">
        <div className="w-16 h-0.5 mx-auto bg-white my-2 sm:w-32"></div>
        <h3 className="text-white text-xl text-center sm:text-2xl lg:text-3xl">
          What they say about Us
        </h3>
      </div>

      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {slideData?.map(slide => (
          <SwiperSlide className="bg-transparent" key={slide?.id}>
            <Slide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderComp;
