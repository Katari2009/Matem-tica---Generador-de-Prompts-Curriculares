import React from 'react';
import PromptCard from './PromptCard';

const prompts = [
  {
    titulo: 'Clase de Funciones y PAES 2026',
    prompt: 'Diseña una clase sobre funciones exponenciales y logarítmicas con actividades alineadas al currículo nacional y PAES 2026.',
  },
  {
    titulo: 'Preguntas PAES de Gráficos',
    prompt: 'Genera 3 preguntas estilo PAES sobre interpretación y análisis de gráficos de funciones, con justificación de respuestas.',
  },
  {
    titulo: 'Evaluación de Probabilidades',
    prompt: 'Redacta 3 preguntas de evaluación formativa centradas en el cálculo de probabilidades y su aplicación a experimentos aleatorios.',
  },
  {
    titulo: 'Diferenciación en Modelamiento',
    prompt: 'Elabora actividades diferenciadas para el desarrollo de habilidades de modelamiento algebraico, considerando distintos niveles de avance.',
  },
  {
    titulo: 'Mini-Proyecto de Funciones y Estadística',
    prompt: 'Diseña un mini-proyecto donde los estudiantes integren funciones polinómicas y conceptos estadísticos para resolver un problema real del entorno.',
  },
  {
    titulo: 'Rúbrica para Sistemas de Ecuaciones',
    prompt: 'Crea una rúbrica adaptada para evaluar la resolución de sistemas de ecuaciones por métodos algebraicos y gráficos.',
  },
  {
    titulo: 'Preguntas PAES de Geometría Analítica',
    prompt: 'Redacta tres preguntas tipo PAES centradas en análisis de rectas y parábolas en la geometría analítica.',
  },
  {
    titulo: 'Retroalimentación de Gráficos Estadísticos',
    prompt: 'Sugiere frases de retroalimentación rápida y positiva sobre los errores frecuentes en interpretación de gráficos estadísticos.',
  },
  {
    titulo: 'Modelamiento y Resolución PAES',
    prompt: 'Propón una situación real donde los estudiantes deban modelar y resolver el problema usando funciones, considerando los criterios de la PAES.',
  },
];


const CuartoMedio: React.FC = () => {
  return (
    <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-100/10 rounded-2xl shadow-2xl p-6 md:p-10 w-full h-full overflow-y-auto animate-fade-in">
      <header className="mb-8 text-center border-b-2 border-cyan-500 pb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Prompts para</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mt-1">4° Medio</h1>
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

export default CuartoMedio;