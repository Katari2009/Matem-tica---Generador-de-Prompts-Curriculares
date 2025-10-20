import React, { useState, useCallback } from 'react';
import SubjectSelector from './components/SubjectSelector';
import Welcome from './components/Welcome';
import TransversalTools from './components/TransversalTools';
import TerceroMedio from './components/TerceroMedio';
import CuartoMedio from './components/CuartoMedio';
import { SECTIONS } from './constants';

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSelectSection = useCallback((section: string) => {
    setSelectedSection(section);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col md:flex-row">
      <header className="md:hidden p-4 bg-slate-800 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-center text-cyan-400">Generador de Prompts</h1>
      </header>
      
      <SubjectSelector
        subjects={SECTIONS}
        activeSubject={selectedSection}
        onSelect={handleSelectSection}
        isDisabled={false}
      />

      <main className="flex-1 p-4 sm:p-6 md:p-8">
        {!selectedSection && <Welcome />}
        {selectedSection === 'Prompts para 3° Medio' && <TerceroMedio />}
        {selectedSection === 'Prompts para 4° Medio' && <CuartoMedio />}
        {selectedSection === 'Herramientas Transversales' && <TransversalTools />}
      </main>
    </div>
  );
};

export default App;