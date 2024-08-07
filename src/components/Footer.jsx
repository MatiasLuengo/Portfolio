import { RiMailSendLine } from "react-icons/ri";
export const Footer = () => {
  return (
    <section className="h-fit bg-black flex flex-col gap-6 items-start">
      <div className="text-white text-sm mt-4 w-10/12 mx-auto">
        Contáctame
        <p className="mt-2 flex items-center gap-2">
          <RiMailSendLine /> dev@matiasluengo.com
        </p>
      </div>
      <span className="border-t-2 text-white w-10/12 m-auto"></span>
      <p className="text-white text-xs text-center mb-6 mx-auto">
        Realizado por{" "}
        <a className="hover:text-central-blue" href="https://matiasluengo.com/">
          Matías Luengo
        </a>
      </p>
    </section>
  );
};
