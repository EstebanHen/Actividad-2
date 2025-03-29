const houseImg = "/assets/images/houseimg.svg";

const Inicio = () => {
  return (
    <div className="xl:flex  pt-16">
      <div className="xl:w-3/6 flex justify-center">
        <div className="w-10/12 ">
          <div>
            <h1 className="text-[70px] text-[#1D1856] font-bold">
              ¡Tu futuro inicia aquí!
            </h1>
          </div>
          <div>
            <p className="text-xl text-justify">
              En la Fundación Antivirus para la Deserción creemos que cada
              persona merece acceso a las mejores oportunidades. Por eso,
              ofrecemos una plataforma personalizada donde puedes explorar
              becas, cursos y programas adaptados a tus intereses y necesidades.
            </p>
          </div>
          <div className="flex py-10 gap-4">
            <button className=" bg-[#FAA307] w-3/6 xl:py-1 rounded-lg">Contactános</button>
            <p className="text-xl content-center">o</p>
            <a href="*" className="underline">
              conoce sobre <hr /> nosotros
            </a>
          </div>
        </div>
      </div>
      <div className="xl:w-3/6 flex justify-center ">
        <img className="w-4/6" src={houseImg} alt="house" />
      </div>
    </div>
  );
};

export default Inicio;
