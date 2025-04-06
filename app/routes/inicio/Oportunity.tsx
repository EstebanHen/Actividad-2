// Oportunity.tsx

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules"; 
import { Link } from "react-router-dom";  // Importamos Link para redirigir
import { slider } from "../../utils/mock/slideInicioMock";  // Datos de las oportunidades

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Oportunity = () => {
  const [dataApi, setDataApi] = useState<any[]>([]);

  useEffect(() => {
    setDataApi(slider); // Asignamos los datos de las oportunidades
  }, []);

  return (
    <div id="oportunidades">
      <h2 className="text-center text-[#1D1856] text-3xl font-bold pt-14 pb-10">
        ¡Mira estas oportunidades!
      </h2>

      <div className="relative w-full flex justify-center">
        {/* Flechas de navegación */}
        <button className="swiper-button-prev absolute left-0 z-10 bg-white p-2 rounded-full shadow-md">
          ❮
        </button>
        <button className="swiper-button-next absolute right-0 z-10 bg-white p-2 rounded-full shadow-md">
          ❯
        </button>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          modules={[FreeMode, Pagination, Navigation]}
          className="h-full w-11/12"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {dataApi.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="border border-gray-300 rounded-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center">
                <img className="w-[80%] h-48 object-cover rounded-md" src={data.image} alt={data.title} />
                <div className="space-y-4 pb-4 text-center">
                  <h3 className="text-lg font-semibold text-[#1D1856]">{data.title}</h3>
                  <p className="text-gray-600">{data.description}</p>
                  <Link 
                    to={`/opportunity-details?id=${data.id}`} // Redirige al componente con los detalles
                    className="bg-[#FAA307] text-white px-4 py-2 rounded-lg mt-4"
                  >
                    Más Información
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
