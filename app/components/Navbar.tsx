import { Link } from "@remix-run/react";

const logo = "/assets/images/logo.svg";
const btnLogin = "/assets/images/btnLogin.svg";
const btnRegister = "/assets/images/btnRegister.svg";

export default function Navbar() {
  return (
    <div>
      <nav className="relative flex">
        <div className="absolute top-4 bg-[linear-gradient(90deg,#00266B_19.38%,#4E6291_37.55%,#5F77AB_82.93%,#708BC6_96.28%)] h-16 w-full z-0"></div>
        
        {/* Menú de navegación */}
        <ul className="flex font-raleway font-bold text-white w-5/12 justify-evenly items-center z-10">
          <li>
            <Link
              to="/inicio"
              className="transition duration-300 hover:text-gray-300 hover:underline hover:scale-105"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/inicio/#oportunidades"
              className="transition duration-300 hover:text-gray-300 hover:underline hover:scale-105"
            >
              Oportunidades
            </Link>
          </li>
          <li>
            <Link
              to="/inicio/#servicios"
              className="transition duration-300 hover:text-gray-300 hover:underline hover:scale-105"
            >
              Servicio
            </Link>
          </li>
          <li>
            <Link
              to="/novedades"
              className="transition duration-300 hover:text-gray-300 hover:underline hover:scale-105"
            >
              Novedades
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="w-2/12 flex justify-center z-10">
          <img className="w-28" src={logo} alt="logo" />
        </div>

        {/* Botones de Ingreso y Registro */}
        <ul className="flex text-[#1D1854] w-5/12 justify-evenly items-center z-10">
          <li>
            <Link to="/ingreso">
              <img className="w-36 hover:scale-105 transition duration-250" src={btnLogin} alt="btn" />
            </Link>
          </li>
          <li>
            <Link to="/registro">
              <img className="w-40 hover:scale-105 transition duration-250" src={btnRegister} alt="btn" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}