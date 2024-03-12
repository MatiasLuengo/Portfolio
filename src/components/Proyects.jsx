import imgBuhoLibros from "../assets/buho_libros.webp";
import imgUtnWallet from "../assets/utn_wallet.webp";
import imgEud from "../assets/imgEud.webp";
import imgDM from "../assets/imgDM.webp";
import imgBibliotech from "../assets/bibliotech.webp";
import imgMsf from "../assets/msf.webp";
import reciclame from "../assets/Reciclame.webp";
import { Proyect } from "./Proyect";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

export const Proyects = () => {
  const next = { name: "Next js", color: "bg-black", icon: <SiNextdotjs /> };
  const react = { name: "React js", color: "bg-sky-400", icon: <FaReact /> };
  const javaScript = {
    name: "JavaScript",
    color: "bg-yellow-400",
    icon: <IoLogoJavascript />,
  };
  const typeScript = {
    name: "TypeScript",
    color: "bg-[#3178c6]",
    icon: <BiLogoTypescript />,
  };
  const firestore = {
    name: "Firestore",
    color: "bg-yellow-400",
    icon: <IoLogoFirebase />,
  };
  const css3 = { name: "Css3", color: "bg-blue-600", icon: <FaCss3Alt /> };
  const vue = { name: "Vue", color: "bg-emerald-500", icon: <IoLogoVue /> };
  const tailwind = {
    name: "TailWind",
    color: "bg-cyan-300",
    icon: <SiTailwindcss />,
  };
  const html5 = { name: "Html5", color: "bg-orange-500", icon: <FaHtml5 /> };
  const cSharp = { name: "C#", color: "bg-purple-500", icon: <SiCsharp /> };
  const sql = {
    name: "SQL Server",
    color: "bg-red-600",
    icon: <BsFiletypeSql />,
  };

  return (
    <>
      <a
        className=" block relative -top-36 xsm:-top-20 invisible"
        id="proyectos"
      ></a>
      <div className="h-20">
        <svg
          viewBox="0 0 500 140"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M-0.00,49.85 C219.75,156.00 342.21,-14.26 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z"
            className="stroke-none fill-central-blue"
          ></path>
        </svg>
      </div>
      <div className="bg-central-blue">
        <section className="text-center py-8 mx-16">
          <h1 className="text-5xl font-semibold text-white">
            Mis Proyectos 📂
          </h1>
          <h2 className="text-2xl mb-14 text-white mt-4 sm:mt-0">
            Aquí podrá ver algunos de mis proyectos personales y encargados
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-10/12 mx-auto">
            <Proyect
              image={imgMsf}
              imgAlt="Web Msf Tech"
              title="MSF Tech"
              description="Web institucional de la empresa MSF Tech.<br/>Trabajo freelancer llevado a cabo para actualizar su web existente y darle presencia conectándola con sus redes sociales."
              url="http://www.msftech.com.ar/"
              utilities={[react, tailwind, html5]}
            />

            <Proyect
              image={reciclame}
              imgAlt="Web Recíclame"
              title="Recíclame"
              description="Segunda simulación laboral bajo el entorno del seleccionado de <b>No Contry</b>.<br/><br/>Recíclame es una red social destinada a la publicación de materiales reciclables, desarrollada con Java, Spring boot, Next Js, Tailwind, SQL."
              url="https://s13-16-t-java-next-frontend.vercel.app/"
              utilities={[next, react, tailwind]}
            />

            <Proyect
              image={imgBibliotech}
              imgAlt="Web Bibliotech"
              title="Bibliotech"
              description="Proyecto generado en la comunidad de <b>No Contry</b>. Se llevó a cabo con un equipo multidisciplinario bajo la simulación de un entorno laboral. Codo a codo con las áreas de diseño, testing, back end y front end.<br/><br/>Bibliotech es una plataforma de gestión bibliotecaria, permitiendo al administrador cargar, editar y eliminar tanto libros como los miembros de la biblioteca y permitiendo asignarles a estos los préstamos."
              url="https://bibliotechapp.website/"
              utilities={[react, tailwind, typeScript, html5]}
            />

            <Proyect
              image={imgBuhoLibros}
              imgAlt="Web Buho Libros"
              title="Buho Libros"
              description="El proyecto Búho Libros está diseñado para cumplir con el objetivo de, en primera medida, ser un boceto para un e-commerce, el cual puede escalar hasta convertirse en uno. La tienda está orientada a la venta de libros.<br/><br/>El proyecto está vinculado con una base de datos de Firestore, la cual nutre con los productos disponibles y a su vez guarda las simulaciones de órdenes de compra."
              url="https://buho-libros.vercel.app/"
              utilities={[react, firestore, css3, html5]}
            />

            <Proyect
              image={imgUtnWallet}
              imgAlt="Web Utn Wallet"
              title="UTN Wallet"
              description="Este proyecto simula un Exchange de cripto monedas. El mismo consume la Api de Cripto Ya, la cual nos permite obtener las cotizaciones en tiempo real, podremos simular compras y ventas, tener un historial y poder manipularlo, además nos brinda una billetera con las conversiones y análisis de inversiones."
              url="https://utnwallet-exchange.vercel.app/"
              utilities={[vue, css3, html5]}
            />

            <Proyect
              image={imgEud}
              imgAlt="Web EUD Youth Department"
              title="EUD Youth Department"
              description="Este proyecto consistió en una prueba de una empresa, el cual debía desarrollar en base a un diseño otorgado. La misma se pasó con éxito."
              url="https://luengomatias-eudyouth-tailwindproject.netlify.app/"
              utilities={[javaScript, tailwind, html5]}
            />

            <Proyect
              image={imgDM}
              imgAlt="Web Distribuidora Médica"
              title="Distribuidora Médica"
              description="De momento no se encuentra en producción. Este proyecto representó mi tesis, el mismo lo lleve a cabo en la empresa Distribuidora Médica y tiene como función ser un catálogo de los productos que ofrece y generar un contacto con el usuario final.<br/>Gracias a Identity de ASP.NET Core, generé acceso para usuarios registrados que son los habilitados para trabajar con el CRUD, vinculado con una base de datos relacional de SQL que es manipulada por Entity Framework."
              url="https://github.com/MatiasLuengo/DistribuidoraMedica-PPS"
              utilities={[cSharp, sql, css3, html5]}
            />
          </div>
        </section>
      </div>
      <div className="h-20">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M-0.00,49.85 C150.00,149.60 271.37,-49.85 500.00,49.85 L500.00,0.00 L-0.00,0.00 Z"
            className="stroke-none fill-central-blue"
          ></path>
        </svg>
      </div>
    </>
  );
};
