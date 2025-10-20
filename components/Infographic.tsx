import React from 'react';
import type { Prompt } from '../types';
import PromptCard from './PromptCard';

interface InfographicProps {
  subject: string;
  prompts: Prompt[];
}

const Infographic: React.FC<InfographicProps> = ({ subject, prompts }) => {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-10 w-full h-full overflow-y-auto animate-fade-in">
      <header className="mb-8 text-center border-b-2 border-cyan-500 pb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Prompts para</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mt-1">{subject}</h1>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

export default Infographic;