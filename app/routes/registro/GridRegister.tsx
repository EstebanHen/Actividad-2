import { useEffect, useState } from "react";
import { GridRegisterInterface } from "~/types/interface/GridRegister_Interface"
import { gridData } from "~/utils/gridInformation";

const check = '/assets/icons/check.svg'

export const GridRegister = () => {
    const [dataUtil, setDataUtil] = useState<GridRegisterInterface[]>([])

    useEffect(() => {
        setDataUtil(gridData)
        console.log(dataUtil);
        
    }, [dataUtil]);
  return (
    <div className="pb-36">
      <h2 className="text-center text-[#1D1856] font-bold font-raleway text-5xl py-12">
        ¡Obtén los siguientes beneficios!
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4 px-10">
        {dataUtil.map((data) => (
          <div key={data.id} className="">
            <h3 className="text-3xl text-[#FAA307] font-bold font-raleway">
              {data.title}
            </h3>
            <p className="text-2xl font-raleway">{data.description}</p>
            <div className="flex justify-end">
              <img className="w-12" src={check} alt="check" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
