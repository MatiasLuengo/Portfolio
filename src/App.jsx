import './App.css'
import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Footer } from './components/Footer'
import { Proyects } from './components/Proyects'
function App() {
  return (
    <>
      <NavBar/>
      <SideBar/>
      <main className='mx-16 text-center h-screen flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-semibold'><i className='bx bx-code-alt'></i> Hola, soy Matías Luengo</h1>
        <h2 className='text-2xl'>Soy Técnico en Programación centrado en el desarrollo Frontend</h2>
      </main>
      <Proyects/>
      <Footer/>
    </>
  )
}

export default App
