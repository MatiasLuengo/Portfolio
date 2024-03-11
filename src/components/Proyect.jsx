export function Proyect({
  image,
  imgAlt,
  title,
  description,
  url,
  utilities,
  orderImg,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="w-ful mb-14 sm:w-10/12 m-auto  rounded-md grid grid-flow-row auto-rows-max lg:grid-rows-none lg:grid-cols-2 bg-white hover:scale-105 duration-150 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
    >
      <img className={`w-full p-2 ${orderImg}`} src={image} alt={imgAlt} />
      <div className="p-2 flex flex-col justify-between">
        <div className="border-t-2 lg:border-t-0">
          <h3 className="text-start text-xl font-bold pt-4 lg:pt-0">{title}</h3>
          <p
            className="text-start py-2"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        <div className="border-t-2 flex flex-wrap items-center justify-center gap-3 p-2">
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
      </div>
    </a>
  );
}
