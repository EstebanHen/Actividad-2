import { useEffect, useState } from "react";
import { oportunityNewsMock } from "~/utils/mock/oportunityNewsMock";
import { OportunityNewsInterface } from "~/types/interface/OportunityNews_Interface";

export const OportunityNews = () => {
  const [dataApi, setDataApi] = useState<OportunityNewsInterface[]>([]);

  useEffect(() => {
    setDataApi(oportunityNewsMock);
    console.log(dataApi);
  }, []);
  return (
    <div className="pb-40">
      <h2 className="text-3xl font-bold text-center text-[#1D1856] pb-10">
        ¡Oportunidades para estudiar!
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-8 w-11/12">
          {dataApi.map((data) => (
            <div className="bg-white shadow-lg rounded-lg" key={data.id}>
              <img className="w-full" src={data.image} alt={data.title} />
              <div className="p-3">
                <div className="flex justify-between items-center py-6">
                  <h3>{data.title}</h3>
                  <div>
                    <button className="border-[#1D1854] border text-[#1D1856] px-3 py-2 rounded-full">guardar</button>
                  </div>
                </div>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
