
import React from 'react';
import PromptCard from './PromptCard';

const tools = [
  {
    title: 'Diferenciación',
    description: 'Actividades para distintos ritmos de aprendizaje.',
    promptText: 'Tengo estudiantes en [Asignatura/Nivel] trabajando el tema [Tema]. Diseña una Actividad de Refuerzo enfocada en identificar conceptos y una Actividad de Profundización enfocada en evaluar y crear un producto.',
  },
  {
    title: 'Planificación Semanal',
    description: 'Organización coherente del tiempo lectivo.',
    promptText: 'Genera un esquema de planificación semanal para una unidad. Distribuye el tiempo en 3 clases de 90 minutos. Detalla para cada clase: Objetivo Específico, Actividad de Desarrollo (con uso de IA sugerido), y Actividad de Cierre/Evaluación Formativa.',
  },
  {
    title: 'Retroalimentación',
    description: 'Sugerencias específicas para el mejoramiento.',
    promptText: 'Dame 5 ideas de mensajes de retroalimentación formativa breves y constructivos para un estudiante que obtuvo un puntaje inicial en un Ensayo, enfocados en mejorar la estructura y la tesis.',
  },
  {
    title: 'Gamificación',
    description: 'Convierte un tema en una experiencia lúdica.',
    promptText: 'Quiero gamificar la unidad sobre [Tema] para [Nivel]. Diseña una narrativa principal, 3 misiones o desafíos con un sistema de puntos, y una recompensa final (simbólica o académica) para motivar a los estudiantes.',
  },
  {
    title: 'Aprendizaje Basado en Proyectos (ABP)',
    description: 'Estructura un proyecto práctico y significativo.',
    promptText: 'Genera una idea de Proyecto para el tema [Tema] en [Asignatura]. Debe tener una pregunta guía desafiante, una lista de 4-5 hitos o entregables, y sugerencias de cómo integrar tecnología en la presentación final del proyecto.',
  },
    {
    title: 'Creación de Rúbrica',
    description: 'Define criterios de evaluación claros y objetivos.',
    promptText: 'Crea una rúbrica de evaluación para [Tipo de Tarea, ej: un debate, un informe escrito] sobre [Tema]. La rúbrica debe tener 4 criterios de evaluación (ej: "Uso de evidencia", "Claridad de la argumentación") y 4 niveles de desempeño (Sobresaliente, Logrado, En Desarrollo, Inicial).',
  },
];

const TransversalTools: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 w-full h-full overflow-y-auto animate-fade-in">
      <header className="mb-6 text-center border-b-2 border-indigo-500 pb-3">
        <h3 className="text-2xl font-extrabold text-white flex items-center justify-center">
          <span role="img" aria-label="tools icon" className="mr-2">🛠️</span>
          Herramientas Transversales
        </h3>
        <p className="text-slate-400 mt-2 text-sm max-w-md mx-auto">
          Esta sección contiene prompts que son útiles para cualquier asignatura. Úsalos para diferenciar actividades, planificar tus semanas de clases o generar retroalimentación constructiva para tus estudiantes.
        </p>
      </header>
      <div className="space-y-6 mt-6">
        {tools.map((tool) => (
          <PromptCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            promptText={tool.promptText}
          />
        ))}
      </div>
       <footer className="mt-8 pt-4 text-center text-xs text-slate-400 border-t border-slate-700">
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
      `}</style>
    </div>
  );
};

export default TransversalTools;
