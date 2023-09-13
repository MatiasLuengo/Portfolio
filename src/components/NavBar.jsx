import { Brand } from "./Brand";
export const NavBar = () => {
    return (
    <div className="w-full bg-white fixed top-0 z-50">
        <nav className="flex justify-center sm:justify-between flex-wrap gap-y-3 gap-x-6 sm:gap-x-0 w-11/12 m-auto py-3 bg-white">
            <Brand/>
            <div className="flex flex-col xsm:flex-row justify-between gap-x-7 gap-y-4 items-center text-xl font-semibold">
                <a href="#proyectos" className="relative px-5 py-2 font-medium text-black group">
                    <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-out group-hover:w-full transform translate-x-0 -skew-x-12 bg-white group-hover:bg-central-blue "></span>
                    <span className="relative transition-all duration-300 ease-out group-hover:text-white">Proyectos</span>
                </a>
                <a href="#sobre_mi" className="relative px-5 py-2 font-medium text-black group">
                    <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-out group-hover:w-full transform translate-x-0 -skew-x-12 bg-white group-hover:bg-central-blue "></span>
                    <span className="relative transition-all duration-300 ease-out group-hover:text-white">Sobre mí</span>
                </a>
            </div>
        </nav>
    </div>
    );
};