import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { carousel } from "~/utils/carouselNovedades";

export const Carousel = () => {
  const [dataImages, setDataImages] = useState<Array<{ image: string }>>([]);

  useEffect(() => {
    setDataImages(carousel);
    console.log(dataImages);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#1D1856] text-center py-10">Novedades</h2>
      <div className="flex justify-center items-center ">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={3}
          pagination={{ clickable: true }}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          className="w-full"
        >
          {dataImages.map((data, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={data.image}
                alt={data.image}
                className="w-[50rem] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
