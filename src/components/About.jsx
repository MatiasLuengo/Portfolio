export const About = ({}) => {
    return (
        <section id="sobre_mi" className="text-center py-8 mx-16">
            <h1  className='text-5xl font-semibold'>Sobre mí</h1>
            <h2 className='text-2xl mb-14 lg:w-3/4 lg:mx-auto'>Aquí puedes conocer un poco más de mí, mis estudios y las herramientas con las que estoy familiarizado</h2>
            <div className="flex flex-col lg:flex-row gap-20">
                <article className="lg:w-1/2">
                    <p className="text-2xl font-bold mb-4">Presentación 👋</p>
                    <p className="text-start mb-8">Mi nombre es Matías Luengo, tengo 28 años, soy técnico universitario en programación 🎓 recibido en la Universidad Tecnológica Nacional.
                        <br/><br/>Mis estudios me han permitido desarrollar y poner a prueba mis habilidades y herramientas como programador 💻.
                        <br/><br/>Estoy abierto a oportunidades de trabajo donde pueda contribuir a la empresa y potenciar mis conocimientos.
                        <br/><br/>Soy una persona dinámica y confiable 🤗.
                    </p>
                    <a className="bg-indigo-600 py-1 px-4 rounded-md text-white hover:bg-indigo-500" href="https://www.canva.com/design/DAFTSu2mIxg/spRiJgg2Za2AsFewA9eOxg/edit?utm_content=DAFTSu2mIxg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Ver CV</a>
                </article>
                <article className="lg:w-1/2">
                    <p className="text-2xl font-bold mb-4">Herramientas 📎</p>
                    <div className="flex justify-center flex-wrap gap-4">
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
    );
};