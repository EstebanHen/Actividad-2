export const SearchAdvanced = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-white my-20 w-11/12 shadow-lg py-5 px-3 space-y-3">
        <div className="flex w-full">
          <div className="flex w-5/6 border-gray-200 border rounded-full">
            <img className="w-9 ps-2" src="/assets/icons/search.svg" alt="search" />
            <input
              className="w-5/6 ps-3 placeholder:text-[#1D1856] placeholder:font-bold bg-[#FBFBFB]"
              type="text"
              placeholder="Busca tu proxima oportunidad"
            />
          </div>
          <button>
            <img src="/assets/icons/filter.svg" alt="filter" />
          </button>
        </div>

        <div className="flex gap-3 border border-gray-200 w-fit shadow-md">
          <label
            className="bg-[#F0F2F5] text-[#31536F] py-2 px-3 font-bold "
            htmlFor="fechas"
          >
            ¡Filtra tu búsqueda!
          </label>
          <input
            className="text-[#FAA307] placeholder:text-[#FAA307]"
            type="date"
            name="date-start"
            id="date-start"
          />
          <input
            className="text-[#FAA307] placeholder:text-[#FAA307]"
            type="date"
            name="date-end"
            id="date-end"
          />
        </div>
        <div className="flex gap-2">
          <div className="flex w-3/12 border border-gray-200">
            <select className="w-1/2 border border-gray-200">
              <option value="">Ubicaciones</option>
              <option value="opcion1">Medellin</option>
              <option value="opcion2">Bogota</option>
              <option value="opcion3">Cali</option>
            </select>
            <input className="w-1/2" type="text" />
          </div>
          <div className="flex w-4/12 border border-gray-200">
            <select className="w-1/2 border border-gray-200">
              <option value="">Tipo de oportunidad</option>
              <option value="opcion1">Educativa</option>
              <option value="opcion2">Socioeconomica</option>
            </select>
            <input className="w-1/2" type="text" />
          </div>
          <div className="flex w-3/12 border border-gray-200">
            <select className="w-1/2 border border-gray-200">
              <option value="">Sector</option>
              <option value="opcion1">Tecnologia</option>
              <option value="opcion2">Administracion</option>
              <option value="opcion3">logistica</option>
            </select>
            <input className="w-1/2" type="text" />
          </div>
          <div className="flex w-2/12 gap-2">
            <button className="text-white font-bold px-2 py-1 bg-[#FAA307] w-full">Busqueda</button>
            <button className="border border-gray-200 px-2 py-1 w-full">limpiar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
