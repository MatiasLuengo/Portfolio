export function Proyect({ image, imgAlt, title, description, url, utilities }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="w-ful flex flex-col justify-between border-solid border-8 border-white sm:w-96 m-auto h-full rounded-md bg-white group duration-150 overflow-hidden shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
      /*       className="w-ful mb-14 sm:w-10/12 m-auto  rounded-md grid grid-flow-row auto-rows-max lg:grid-rows-none lg:grid-cols-2 bg-white hover:scale-105 duration-150 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
       */
    >
      <div>
        <img
          className={`w-full group-hover:scale-110 duration-150 pb-4 border-solid border-gray-200 border-b-2`}
          src={image}
          alt={imgAlt}
        />
        <h3 className="text-start text-2xl font-bold my-4 ">{title}</h3>
        <p
          className="text-start mb-10"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      <div className="border-t-2 flex flex-wrap items-center justify-center gap-3 py-4">
        {utilities.map((utility, index) => (
          <p
            key={index}
            className={`rounded-3xl ${utility.color} text-white text-lg font-semibold py-1 px-2 flex items-center gap-1 shadow-lg`}
          >
            {utility.icon}
            {utility.name}
          </p>
        ))}
      </div>
    </a>
  );
}
