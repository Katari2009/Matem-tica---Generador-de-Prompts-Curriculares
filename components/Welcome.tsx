import React from 'react';
import { ChevronLeftIcon } from './Icons';

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-slate-900/30 backdrop-blur-xl p-10 rounded-2xl border border-slate-100/10 shadow-2xl">
      <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">Bienvenido al Generador de Prompts de Matemática</h2>
      <p className="text-slate-400 max-w-lg">
        Selecciona una sección del panel de la izquierda para obtener prompts curriculares para Matemática 3° y 4° medio, o herramientas transversales útiles para cualquier asignatura.
      </p>
      <div className="mt-6 flex items-center text-cyan-400 font-semibold md:hidden">
          <span>Selecciona una sección arriba para empezar</span>
      </div>
       <div className="mt-6 hidden md:flex items-center text-cyan-400 font-semibold">
          <ChevronLeftIcon />
          <span>Selecciona una sección para empezar</span>
      </div>
    </div>
  );
};

export default Welcome;