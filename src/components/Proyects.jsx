import imgBuhoLibros from '../assets/buho_libros.png';
import imgUtnWallet from '../assets/utn_wallet.png';
import imgMatiasLuengo from '../assets/imgMatiasLuengo.png';
import imgEud from '../assets/imgEud.png';
import imgDM from '../assets/imgDM.png';
import imgBlogDeCafe from '../assets/imgBlogDeCafe.png';
import imgTailwind from '../assets/imgTailwind.png';
import { Proyect } from './Proyect';

export const Proyects = ({ }) => {

    const react = { name: 'React', color: 'sky-300', icon: 'bx bxl-react' };
    const javaScript = { name: 'JavaScript', color: 'yellow-200', icon: 'bx bxl-javascript' };
    const firestore = { name: 'Firestore', color: 'yellow-300', icon: 'bx bxl-firebase' };
    const css3 = { name: 'Css3', color: 'blue-600', icon: 'bx bxl-css3' };
    const vue = { name: 'Vue', color: 'emerald-500', icon: 'bx bxl-vuejs' };
    const tailwind = { name: 'TailWind', color: 'cyan-300', icon: 'bx bxl-tailwind-css' };
    const html5 = { name: 'Html5', color: 'amber-500', icon: 'bx bxl-html5' };
    const cSharp = { name: 'C#', color: 'purple-500', icon: 'bx bx-code' };
    const sql = { name: 'SQL Server', color: 'red-700', icon: 'bx bxs-data' };

    return (
        <div id="proyectos" className='bg-sky-200'>
            <section className="text-center py-8 mx-16">
                <h1  className='text-5xl font-semibold'>Mis Proyectos <i class='bx bx-folder-open'></i></h1>
                <h2 className='text-2xl mb-14'>Aquí podrá ver algunos de mis proyectos personales y encargados</h2>

                <Proyect
                img={imgBuhoLibros}
                imgAlt="Web Buho Libros"
                title="Buho Libros"
                description="Fusce vehicula, erat in ultricies faucibus, magna est egestas odio, quis pellentesque turpis nunc a orci. Vivamus sodales nunc eget mi pellentesque, vel mattis mi tempor. Sed vestibulum dolor enim, et ornare justo facilisis quis. Mauris et mauris lectus. Sed non augue lacus. Praesent tincidunt in est eget sodales. Nam auctor sem at dui fringilla, id sagittis arcu volutpat."
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
    );
};