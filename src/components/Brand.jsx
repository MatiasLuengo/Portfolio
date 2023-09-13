import imgProfile from '../assets/imgProfile.png'

export const Brand = ({ }) => {
    return (
        <a href='#' className="flex cursor-pointer w-fit gap-3 items-center">
            <img className="w-12 rounded-full bg-sky-300" src={imgProfile} alt="Foto perfil Matías Luengo"></img>
            <h1 className="text-xl font-semibold">Matías Luengo</h1>
            <i className='bx bxs-check-circle text-xl text-central-blue'></i>
        </a>
    );
};