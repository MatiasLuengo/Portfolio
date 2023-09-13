import imgBuhoLibros from '../assets/buho_libros.png';
import imgUtnWallet from '../assets/utn_wallet.png';
import imgMatiasLuengo from '../assets/imgMatiasLuengo.png';
import imgEud from '../assets/imgEud.png';
import imgDM from '../assets/imgDM.png';
import imgBlogDeCafe from '../assets/imgBlogDeCafe.png';
import imgTailwind from '../assets/imgTailwind.png';
import { Proyect } from './Proyect';

export const Proyects = ({ }) => {

    const react = { name: 'React', color: 'bg-sky-400', icon: 'bx bxl-react' };
    const javaScript = { name: 'JavaScript', color: 'bg-yellow-300', icon: 'bx bxl-javascript' };
    const firestore = { name: 'Firestore', color: 'bg-yellow-400', icon: 'bx bxl-firebase' };
    const css3 = { name: 'Css3', color: 'bg-blue-600', icon: 'bx bxl-css3' };
    const vue = { name: 'Vue', color: 'bg-emerald-500', icon: 'bx bxl-vuejs' };
    const tailwind = { name: 'TailWind', color: 'bg-cyan-300', icon: 'bx bxl-tailwind-css' };
    const html5 = { name: 'Html5', color: 'bg-orange-500', icon: 'bx bxl-html5' };
    const cSharp = { name: 'C#', color: 'bg-purple-500', icon: 'bx bx-code' };
    const sql = { name: 'SQL Server', color: 'bg-red-600', icon: 'bx bxs-data' };

    return (<>
        <a className=" block relative -top-36 xsm:-top-20 invisible" id="proyectos"></a>
        <div className='h-20' ><svg viewBox="0 0 500 140" preserveAspectRatio="none" className='w-full h-full'><path d="M-0.00,49.85 C219.75,156.00 342.21,-14.26 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z" className='stroke-none fill-central-blue'></path></svg></div>
        <div className='bg-central-blue'>
                    <section className="text-center py-8 mx-16">
                        <h1  className='text-5xl font-semibold text-white'>Mis Proyectos 📂</h1>
                        <h2 className='text-2xl mb-14 text-white'>Aquí podrá ver algunos de mis proyectos personales y encargados</h2>

                        <Proyect
                        img={imgBuhoLibros}
                        imgAlt="Web Buho Libros"
                        title="Buho Libros"
                        description={`El proyecto Buho Libros está diseñado para cumplir con el objetivo de, en primera medida, ser un boceto para un e-commerce, proyecto que puede escalar hasta convertirse en uno. La tienda esta orientada a la venta de libros.\nEl proyecto está vinculado con una base de datos de Firestore, la cual nutre con los productos disponibles y a su ves guarda las simulaciones de ordenes de compra`}
                        url="https://buho-libros.vercel.app/"
                        utilities={[react, firestore, css3, html5]}
                        orderImg="lg:order-first"/>

                        <Proyect
                        img={imgUtnWallet}
                        imgAlt="Web Utn Wallet"
                        title="UTN Wallet"
                        description="Fusce vehicula, erat in ultricies faucibus, magna est egestas odio, quis pellentesque turpis nunc a orci. Vivamus sodales nunc eget mi pellentesque, vel mattis mi tempor. Sed vestibulum dolor enim, et ornare justo facilisis quis. Mauris et mauris lectus. Sed non augue lacus. Praesent tincidunt in est eget sodales. Nam auctor sem at dui fringilla, id sagittis arcu volutpat."
                        url="https://utnwallet-exchange.vercel.app/"
                        utilities={[vue, css3, html5]}
                        orderImg="lg:order-last"/>

                        <Proyect
                        img={imgMatiasLuengo}
                        imgAlt="Web Matías Luengo"
                        title="Esta Web :)"
                        description="Fusce vehicula, erat in ultricies faucibus, magna est egestas odio, quis pellentesque turpis nunc a orci. Vivamus sodales nunc eget mi pellentesque, vel mattis mi tempor. Sed vestibulum dolor enim, et ornare justo facilisis quis. Mauris et mauris lectus. Sed non augue lacus. Praesent tincidunt in est eget sodales. Nam auctor sem at dui fringilla, id sagittis arcu volutpat."
                        url="#"
                        utilities={[react, tailwind, html5]}
                        orderImg="lg:order-first"/>

                        <Proyect
                        img={imgEud}
                        imgAlt="Web EUD Youth Department"
                        title="EUD Youth Department"
                        description="Fusce vehicula, erat in ultricies faucibus, magna est egestas odio, quis pellentesque turpis nunc a orci. Vivamus sodales nunc eget mi pellentesque, vel mattis mi tempor. Sed vestibulum dolor enim, et ornare justo facilisis quis. Mauris et mauris lectus. Sed non augue lacus. Praesent tincidunt in est eget sodales. Nam auctor sem at dui fringilla, id sagittis arcu volutpat."
                        url="https://luengomatias-eudyouth-tailwindproject.netlify.app/"
                        utilities={[javaScript, tailwind, html5]}
                        orderImg="lg:order-last"/>

                        <Proyect
                        img={imgDM}
                        imgAlt="Web Distribuidora Médica"
                        title="Distribuidora Médica"
                        description="Fusce vehicula, erat in ultricies faucibus, magna est egestas odio, quis pellentesque turpis nunc a orci. Vivamus sodales nunc eget mi pellentesque, vel mattis mi tempor. Sed vestibulum dolor enim, et ornare justo facilisis quis. Mauris et mauris lectus. Sed non augue lacus. Praesent tincidunt in est eget sodales. Nam auctor sem at dui fringilla, id sagittis arcu volutpat."
                        url="https://github.com/MatiasLuengo/DistribuidoraMedica-PPS"
                        utilities={[cSharp, sql, css3, html5]}
                        orderImg="lg:order-first"/>

                        <Proyect
                        img={imgTailwind}
                        imgAlt="Web Tailwind Practice"
                        title="Práctica de Tailwind"
                        description="Fusce vehicula, erat in ultricies faucibus, magna est egestas odio, quis pellentesque turpis nunc a orci. Vivamus sodales nunc eget mi pellentesque, vel mattis mi tempor. Sed vestibulum dolor enim, et ornare justo facilisis quis. Mauris et mauris lectus. Sed non augue lacus. Praesent tincidunt in est eget sodales. Nam auctor sem at dui fringilla, id sagittis arcu volutpat."
                        url="https://tailwindcss-web.netlify.app/"
                        utilities={[tailwind, html5]}
                        orderImg="lg:order-last"/>

                        <Proyect
                        img={imgBlogDeCafe}
                        imgAlt="Web Blog de Café"
                        title="Blog de Café (Práctica)"
                        description="Fusce vehicula, erat in ultricies faucibus, magna est egestas odio, quis pellentesque turpis nunc a orci. Vivamus sodales nunc eget mi pellentesque, vel mattis mi tempor. Sed vestibulum dolor enim, et ornare justo facilisis quis. Mauris et mauris lectus. Sed non augue lacus. Praesent tincidunt in est eget sodales. Nam auctor sem at dui fringilla, id sagittis arcu volutpat."
                        url="https://matiasluengo-blogdecafe.netlify.app/"
                        utilities={[css3, html5]}
                        orderImg="lg:order-first"/>
                    </section>
        </div>
        <div className='h-20' ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className='w-full h-full'><path d="M-0.00,49.85 C150.00,149.60 271.37,-49.85 500.00,49.85 L500.00,0.00 L-0.00,0.00 Z" className='stroke-none fill-central-blue'></path></svg></div>
        </>
    );
};