export const SideBar = ({ }) => {
    return (
        <section className="fixed left-0 top-1/3 top flex flex-col gap-y-2 items-center w-fit h-auto px-2 py-1 border-2 border-l-0 border-gray-400 rounded-sm bg-white">
            <a className="hover:text-sky-400" href="https://www.linkedin.com/in/matias-luengo-190bbb245/" target="_blank"><i className='bx bxl-linkedin-square text-3xl'></i></a>
            <a className="hover:text-sky-400" href="https://github.com/MatiasLuengo" target="_blank"><i className='bx bxl-github text-3xl'></i></a>
            <a className="hover:text-sky-400" href="mailto:dev@matiasluengo.com"><i className='bx bx-mail-send text-3xl'></i></a>
            <a className="hover:text-sky-400" href="https://telegram.me/Matias_Luengo" target="_blank"><i className='bx bxl-telegram text-3xl'></i></a>
        </section>
    );
};