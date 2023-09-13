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
                        <h2 className='text-2xl mb-14 text-white mt-4 sm:mt-0'>Aquí podrá ver algunos de mis proyectos personales y encargados</h2>

                        <Proyect
                        img={imgBuhoLibros}
                        imgAlt="Web Buho Libros"
                        title="Buho Libros"
                        description="El proyecto Búho Libros está diseñado para cumplir con el objetivo de, en primera medida, ser un boceto para un e-commerce, el cual puede escalar hasta convertirse en uno. La tienda está orientada a la venta de libros. El proyecto está vinculado con una base de datos de Firestore, la cual nutre con los productos disponibles y a su vez guarda las simulaciones de órdenes de compra."
                        url="https://buho-libros.vercel.app/"
                        utilities={[react, firestore, css3, html5]}
                        orderImg="lg:order-first"/>

                        <Proyect
                        img={imgUtnWallet}
                        imgAlt="Web Utn Wallet"
                        title="UTN Wallet"
                        description="Este proyecto simula un Exchange de cripto monedas. El mismo consume la Api de Cripto Ya, la cual nos permite obtenerlas cotizaciones en tiempo real, podremos simular compras y ventas, tener un historial y poder manipularlo, además nos brinda una billetera con las conversiones y análisis de inversiones."
                        url="https://utnwallet-exchange.vercel.app/"
                        utilities={[vue, css3, html5]}
                        orderImg="lg:order-last"/>

                        <Proyect
                        img={imgMatiasLuengo}
                        imgAlt="Web Matías Luengo"
                        title="Esta Web :)"
                        description="Donde le permite conocerme un poco más, ver mis estudios y en que he trabajado."
                        url="#"
                        utilities={[react, tailwind, html5]}
                        orderImg="lg:order-first"/>

                        <Proyect
                        img={imgEud}
                        imgAlt="Web EUD Youth Department"
                        title="EUD Youth Department"
                        description="Este proyecto consistió en una prueba de una empresa, el cual debía desarrollar en base a un diseño otorgado. La misma se pasó con éxito."
                        url="https://luengomatias-eudyouth-tailwindproject.netlify.app/"
                        utilities={[javaScript, tailwind, html5]}
                        orderImg="lg:order-last"/>

                        <Proyect
                        img={imgDM}
                        imgAlt="Web Distribuidora Médica"
                        title="Distribuidora Médica"
                        description="De momento no se encuentra en producción. Este proyecto representó mi tesis, el mismo lo lleve a cabo en la empresa Distribuidora Médica y tiene como función ser un catálogo de los productos que ofrece y generar un contacto con el usuario final. Gracias a Identity de ASP.NET Core, generé acceso para usuarios registrados que son los habilitados para trabajar con el CRUD, vinculado con una base de datos relacional de SQL que es manipulada por Entity Framework."
                        url="https://github.com/MatiasLuengo/DistribuidoraMedica-PPS"
                        utilities={[cSharp, sql, css3, html5]}
                        orderImg="lg:order-first"/>

                        <Proyect
                        img={imgTailwind}
                        imgAlt="Web Tailwind Practice"
                        title="Práctica de Tailwind"
                        description="Este proyecto representa un curso realizado para montar mis bases sobre Tailwind."
                        url="https://tailwindcss-web.netlify.app/"
                        utilities={[tailwind, html5]}
                        orderImg="lg:order-last"/>

                        <Proyect
                        img={imgBlogDeCafe}
                        imgAlt="Web Blog de Café"
                        title="Blog de Café (Práctica)"
                        description="Mis inicios en la programación."
                        url="https://matiasluengo-blogdecafe.netlify.app/"
                        utilities={[css3, html5]}
                        orderImg="lg:order-first"/>
                    </section>
        </div>
        <div className='h-20' ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className='w-full h-full'><path d="M-0.00,49.85 C150.00,149.60 271.37,-49.85 500.00,49.85 L500.00,0.00 L-0.00,0.00 Z" className='stroke-none fill-central-blue'></path></svg></div>
        </>
    );
};