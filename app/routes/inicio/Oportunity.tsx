import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { slider } from "../../utils/mock/slideInicioMock";
import { OportunityInterface } from "~/types/interface/Oportunity_Interface";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const Oportunity = () => {
  const [dataApi, setDataApi] = useState<OportunityInterface[]>([]);

  useEffect(() => {
    setDataApi(slider);
    console.log(dataApi);
  }, [dataApi]);

  return (
    <div id="oportunidades">
      <h2 className="text-center text-[#1D1856] text-3xl font-bold pt-14 pb-10">
        ¡Mira estás oportunidades!{" "}
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="h-full w-11/12"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, 
          640: { slidesPerView: 2, spaceBetween: 20 }, 
          1024: { slidesPerView: 3, spaceBetween: 30 }, 
        }}
      >
        {dataApi.map((data) => (
          <SwiperSlide key={data.id}>
            <div>
              <img
                className="pb-10 w-[25rem]"
                src={data.image}
                alt={data.title}
              />
              <div className="space-y-4 pb-14">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
