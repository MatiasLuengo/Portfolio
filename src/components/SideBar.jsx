import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";

export const SideBar = () => {
  return (
    <section className="fixed left-0 top-1/3 top flex flex-col gap-y-2 items-center w-fit h-auto px-2 py-1 border-2 border-l-0 border-gray-400 rounded-sm bg-white">
      <a
        className="hover:text-sky-400"
        href="https://www.linkedin.com/in/matias-luengo-190bbb245/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="text-3xl" />
      </a>
      <a
        className="hover:text-sky-400"
        href="https://github.com/MatiasLuengo"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="text-3xl" />
      </a>
      <a className="hover:text-sky-400" href="mailto:dev@matiasluengo.com">
        <RiMailSendLine className="text-3xl" />
      </a>
      <a
        className="hover:text-sky-400"
        href="https://telegram.me/Matias_Luengo"
        target="_blank"
        rel="noreferrer"
      >
        <FaTelegramPlane className="text-3xl" />
      </a>
    </section>
  );
};
