import { Brand } from "./Brand";
export const NavBar = () => {
    return (
    <div className="w-full bg-white fixed top-0">
        <nav className="flex justify-center sm:justify-between flex-wrap gap-y-3 gap-x-6 sm:gap-x-0 w-11/12 m-auto py-3 bg-white">
            <Brand/>
            <div className="flex flex-col xsm:flex-row justify-between gap-x-7 gap-y-4 items-center text-xl font-semibold">
                <a className="hover:text-sky-400" href="#proyectos">Proyectos</a>
                <a className="hover:text-sky-400" href="#sobre_mi">Sobre mí</a>
                <a className="hover:text-sky-400" href="#contacto">Contacto</a>
            </div>
        </nav>
    </div>
    );
};