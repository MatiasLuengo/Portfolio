import './App.css'
import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Footer } from './components/Footer'
import { Proyects } from './components/Proyects'
import { About } from './components/About'
import imgCode from './assets/code.png'
import React, { useEffect, useRef } from 'react';

function App() {

  const saludoRef = useRef(null);
  useEffect(() => {
    const fadeInEffect = (entries, observer) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          element.target.classList.add('opacity-1');
            element.target.classList.add('ease-in-out');
            element.target.classList.add('transition');
            element.target.classList.add('duration-700');
            element.target.classList.add('scale-100');
            element.target.classList.add('animate-fadeIn');
            element.target.classList.remove('opacity-0');
            element.target.classList.remove('scale-75');
        }
      });
    };
  
    const observer = new IntersectionObserver(fadeInEffect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });
  
    if (saludoRef.current) {
      observer.observe(saludoRef.current);
    }
    return () => {
      if (saludoRef.current) {
        observer.unobserve(saludoRef.current);
      }
    };
  }, []);

  return (
    <>
      <NavBar/>
      <SideBar/>
      <main className='mx-16 mt-20 xsm:mt-0 text-center h-screen flex flex-col items-center justify-center'>
        <div ref={saludoRef} id='saludo' className='opacity-0 scale-75 w-full'>
          <div className='flex gap-x-6 items-center justify-center flex-wrap'>
            <img className='w-10 h-10 animate-bounce mt-36 xsm:mt-28 sm:mt-0' src={imgCode} alt="Icono de código" />
            <h1 className='text-5xl font-semibold w-fit'>Hola, soy Matías Luengo</h1>
          </div>
          <h2 className='text-2xl mt-4 sm:mt-0'>Soy Técnico en Programación centrado en el desarrollo Frontend</h2>
        </div>
      </main>
      <Proyects/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
