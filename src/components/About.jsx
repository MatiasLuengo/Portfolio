export const About = ({}) => {
    return (<>
        <a className=" block relative -top-36 xsm:-top-20 invisible" id="sobre_mi"></a>
        <section className="text-center py-8 mx-16">
            <h1  className='text-5xl font-semibold'>Sobre mí</h1>
            <h2 className='text-2xl mb-20 lg:w-3/4 lg:mx-auto'>Aquí puedes conocer un poco más de mí, mis estudios y las herramientas con las que estoy familiarizado</h2>
            <div className="flex flex-col lg:flex-row gap-20">
                <article className="lg:w-1/2">
                    <p className="text-2xl font-bold mb-6">Presentación 👋</p>
                    <p className="text-start mb-10 w-10/12 mx-auto">Mi nombre es Matías Luengo, tengo 28 años, soy técnico universitario en programación 🎓 recibido en la Universidad Tecnológica Nacional.
                        <br/><br/>Mis estudios me han permitido desarrollar y poner a prueba mis habilidades y herramientas como programador 💻.
                        <br/><br/>Estoy abierto a oportunidades de trabajo donde pueda contribuir a la empresa y potenciar mis conocimientos.
                        <br/><br/>Soy una persona dinámica y confiable 🤗.
                    </p>
                    <a className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href="../src/assets/Matias_Francisco_Luengo.pdf" download="Matias_Francisco_Luengo.pdf">Descargar CV</a>
                </article>
                <article className="lg:w-1/2">
                    <p className="text-2xl font-bold mb-6">Herramientas 📎</p>
                    <div className="flex justify-center flex-wrap gap-4 w-10/12 mx-auto">
                        <p className="skill">React</p>
                        <p className="skill">JavaScript</p>
                        <p className="skill">TailWind</p>
                        <p className="skill">Vue</p>
                        <p className="skill">CSS</p>
                        <p className="skill">HTML</p>
                        <p className="skill">Git</p>
                        <p className="skill">GitHub</p>
                        <p className="skill">Responsive Design</p>
                        <p className="skill">C# Basics</p>
                        <p className="skill">SQL Basics</p>
                        <p className="skill">WordPress Basics</p>
                        <p className="skill">POO</p>
                        <p className="skill">Patrones MVC</p>
                        <p className="skill">Consumo de API'S</p>
                    </div>
                </article>
            </div>
        </section>
        </>
    );
};