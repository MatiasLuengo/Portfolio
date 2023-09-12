import imgProfile from '../assets/imgProfile.png'
import { toTopFunction } from '../scripts/BackToTop'

export const Brand = ({ }) => {
    return (
        <div className="flex cursor-pointer w-fit gap-3 items-center" onClick={toTopFunction}>
            <img className="w-12 rounded-full bg-sky-300" src={imgProfile} alt="Foto perfil Matías Luengo"></img>
            <h1 className="text-xl font-semibold">Matías Luengo</h1>
            <i className='bx bxs-check-circle text-xl text-blue-400'></i>
        </div>
    );
};