import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { ServicesInterfaces } from '~/types/interface/Services_Interfaces';
import {slideServices} from '../../utils/mock/slideServiceMock'

import 'swiper/css';
import 'swiper/css/pagination';


export const Services = () => {
  const [dataApi, setDataApi] = useState<ServicesInterfaces[]>([])

  useEffect(() => {
    setDataApi(slideServices)
    console.log(dataApi);
  }, [dataApi]);

  return (
    <div className="pt-20" id='servicios'>
        <h2 className="text-3xl text-[#1D1856] text-center font-bold pb-10">Servicios</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="flex w-11/12 mb-14"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, 
          640: { slidesPerView: 2, spaceBetween: 20 }, 
          1024: { slidesPerView: 3, spaceBetween: 30 }, 
        }}
      >
        {dataApi.map((data)=>(
          <SwiperSlide key={data.id} className='flex flex-col justify-between border border-black rounded-lg'>
              <img className='rounded-lg w-full' src={data.image} alt={data.title} />
              <div className='h-60 w-5/6 ps-5'>
                  <h3 className='py-5 text-2xl font-bold'>{data.title}</h3>
                  <p>{data.description}</p>
              </div>
              <div className='flex justify-center py-10'>
                <a className='py-2 px-6 border rounded-lg border-[#FAA307] text-[#FAA307] hover:bg-yellow-200' href={data.url}>LO QUIERO</a>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
