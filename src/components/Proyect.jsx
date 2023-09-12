export const Proyect = ({ img, imgAlt, title, description, url, utilities, orderImg }) => {
    return (
        <a href={url} target='_blank' className="w-ful mb-12 sm:w-10/12 m-auto  rounded-md grid grid-flow-row auto-rows-max lg:grid-rows-none lg:grid-cols-2 bg-gray-100 hover:bg-white">
            <img className={`w-full p-2 ${orderImg}`} src={img} alt={imgAlt} />
            <div className='p-2 flex flex-col justify-between'>
                <div className='border-t-2 lg:border-t-0'>
                    <h3 className='text-start text-xl font-bold'>{title}</h3>
                    <p className='text-start py-2'>{description}</p>
                </div>
                <div className='border-t-2 flex flex-wrap items-center justify-center gap-3 p-2'>
                    {utilities.map((utility, index) => (
                        <p key={index} className={`rounded-2xl bg-${utility.color} text-white py-1 px-2 flex items-center gap-1 shadow-lg`}>
                            <i className={utility.icon}></i>{utility.name}</p>
                    ))}
                </div>
            </div>
        </a>
    );
};