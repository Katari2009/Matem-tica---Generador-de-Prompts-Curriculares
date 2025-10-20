import React from 'react';
import PromptCard from './PromptCard';

const prompts = [
  {
    titulo: 'Clase de Funciones Cuadráticas',
    prompt: 'Diseña una clase para 3° medio que aborde el objetivo “Resolver problemas con funciones cuadráticas” incluyendo actividades prácticas y el uso de IA para crear ejercicios.',
  },
  {
    titulo: 'Evaluación de Sistemas de Ecuaciones',
    prompt: 'Genera 3 preguntas de evaluación formativa sobre resolución de sistemas de ecuaciones lineales y su aplicación en situaciones reales.',
  },
  {
    titulo: 'Diferenciación en Geometría',
    prompt: 'Propón actividades diferenciadas para estudiantes con dificultades y avanzados en el tema de semejanza de triángulos.',
  },
  {
    titulo: 'Proyecto de Análisis de Datos',
    prompt: 'Crea un proyecto para aplicar funciones lineales y cuadráticas en el análisis de datos estadísticos extraídos de situaciones cotidianas.',
  },
  {
    titulo: 'Rúbrica para Álgebra',
    prompt: 'Elabora una rúbrica sencilla alineada al currículo nacional para evaluar resolución de problemas algebraicos.',
  },
  {
    titulo: 'Plan Semanal de Geometría',
    prompt: 'Diseña un plan semanal de actividades para reforzar los conceptos de área y perímetro de polígonos.',
  },
  {
    titulo: 'Preguntas Estilo PAES (Funciones)',
    prompt: 'Redacta tres preguntas estilo PAES centradas en la representación gráfica y análisis de funciones cuadráticas.',
  },
  {
    titulo: 'Retroalimentación para Gráficos',
    prompt: 'Sugiere frases de retroalimentación constructiva para los errores frecuentes de los estudiantes al graficar funciones.',
  },
  {
    titulo: 'Modelamiento de Proporcionalidad',
    prompt: 'Propón una situación problema en la que los estudiantes deban modelar relaciones de proporcionalidad directa mediante funciones.',
  },
];


const TerceroMedio: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-10 w-full h-full overflow-y-auto animate-fade-in">
      <header className="mb-8 text-center border-b-2 border-cyan-500 pb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Prompts para</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mt-1">3° Medio</h1>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prompts.map((p, index) => (
          <div
            key={index}
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
          >
            <PromptCard
              title={p.titulo}
              promptText={p.prompt}
              theme="cyan"
            />
          </div>
        ))}
      </main>

      <footer className="mt-10 pt-4 text-center text-xs text-slate-400 border-t border-slate-700">
        <p>Creado por: Christian Núñez V., Asesor Pedagógico, Programa PACE-UDA, 2025</p>
      </footer>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
      `}</style>
    </div>
  );
};

export default TerceroMedio;