export const Footer = ({ }) => {
    return (
        <section className="h-fit bg-black flex flex-col gap-6 items-start">
            <div className="text-white text-sm mt-4 w-10/12 mx-auto">Contáctame
                <p className="mt-2"><i className='bx bx-mail-send'></i> matiasluengoo95@gmail.com</p>
            </div>
            <span className="border-t-2 text-white w-10/12 m-auto"></span>
            <p className="text-white text-xs text-center mb-6 mx-auto">© Copyright 2023. Realizado por <a className="hover:text-central-blue" href="#">Matías Luengo</a></p>
        </section>
    );
};