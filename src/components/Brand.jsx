import imgProfile from "../assets/imgProfile.webp";
import { FaCheckCircle } from "react-icons/fa";

export const Brand = () => {
  return (
    <a
      href="https://matiasluengo.com/"
      className="flex cursor-pointer w-fit gap-3 items-center"
    >
      <img
        className="w-12 rounded-full bg-sky-300"
        src={imgProfile}
        alt="Foto perfil Matías Luengo"
      ></img>
      <h1 className="text-xl font-semibold">Matías Luengo</h1>
      <FaCheckCircle className="text-xl text-central-blue" />
    </a>
  );
};
