import React, { useState, useCallback, useEffect } from 'react';
import SubjectSelector from './components/SubjectSelector';
import Welcome from './components/Welcome';
import TransversalTools from './components/TransversalTools';
import TerceroMedio from './components/TerceroMedio';
import CuartoMedio from './components/CuartoMedio';
import { SECTIONS } from './constants';

const backgrounds = [
  'https://images.unsplash.com/photo-1519734013749-1d52c103534d?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531297484001-80022131c5a9?q=80&w=2020&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1634017835447-353d6b0a1a02?q=80&w=2070&auto=format&fit=crop',
];

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [background, setBackground] = useState<string>('');

  useEffect(() => {
    // Select a random background on component mount
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackground(randomBackground);
  }, []);

  const handleSelectSection = useCallback((section: string) => {
    setSelectedSection(section);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-slate-900">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${background})`,
          filter: 'brightness(0.5) blur(4px)', // Darken and blur the background for depth and readability
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 h-full text-white font-sans flex flex-col md:flex-row">
        <header className="md:hidden p-4 bg-slate-900/50 backdrop-blur-sm border-b border-slate-100/10">
          <h1 className="text-2xl font-bold text-center text-cyan-400">Generador de Prompts</h1>
        </header>
        
        <SubjectSelector
          subjects={SECTIONS}
          activeSubject={selectedSection}
          onSelect={handleSelectSection}
          isDisabled={false}
        />

        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          {!selectedSection && <Welcome />}
          {selectedSection === 'Prompts para 3° Medio' && <TerceroMedio />}
          {selectedSection === 'Prompts para 4° Medio' && <CuartoMedio />}
          {selectedSection === 'Herramientas Transversales' && <TransversalTools />}
        </main>
      </div>
    </div>
  );
};

export default App;