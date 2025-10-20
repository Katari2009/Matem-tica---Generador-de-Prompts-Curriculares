import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface Subject {
  name: string;
  icon: React.ReactNode;
  subSections?: string[];
}

interface SubjectSelectorProps {
  subjects: Subject[];
  activeSubject: string | null;
  onSelect: (subject: string) => void;
  isDisabled: boolean;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ subjects, activeSubject, onSelect, isDisabled }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('Matemática');

  const handleSectionClick = (sectionName: string, hasSubSections: boolean) => {
    if (hasSubSections) {
      setExpandedSection(expandedSection === sectionName ? null : sectionName);
    } else {
      onSelect(sectionName);
    }
  };

  return (
    <aside className="w-full md:w-80 bg-slate-800 md:h-screen p-4 md:p-6 flex-shrink-0">
      <div className="hidden md:block mb-8">
        <h1 className="text-2xl font-bold text-cyan-400">Generador de</h1>
        <h2 className="text-xl font-semibold text-slate-300">Prompts Curriculares</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          {subjects.map((subject) => {
            const isParentOfActive = subject.subSections?.includes(activeSubject || '') ?? false;
            const isDirectlyActive = activeSubject === subject.name;

            return (
              <li key={subject.name}>
                <button
                  onClick={() => handleSectionClick(subject.name, !!subject.subSections)}
                  disabled={isDisabled}
                  className={`w-full flex items-center justify-between space-x-3 p-3 rounded-lg text-left transition-all duration-200 ease-in-out
                    ${isDirectlyActive
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : isParentOfActive
                        ? 'bg-slate-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                    }
                    ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6">{subject.icon}</span>
                    <span className="flex-1 font-medium">{subject.name}</span>
                  </div>
                  {subject.subSections && (
                    <ChevronDownIcon open={expandedSection === subject.name} />
                  )}
                </button>
                {subject.subSections && expandedSection === subject.name && (
                  <ul className="pl-6 pt-2 space-y-2 animate-fade-in-fast">
                    {subject.subSections.map((subSection) => (
                      <li key={subSection}>
                        <button
                          onClick={() => onSelect(subSection)}
                          disabled={isDisabled}
                          className={`w-full text-left p-2 pl-5 rounded-md transition-colors duration-200
                            ${activeSubject === subSection
                              ? 'bg-cyan-500 text-white font-semibold'
                              : 'text-slate-400 hover:bg-slate-600 hover:text-slate-200'
                            }
                          `}
                        >
                          {subSection}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
      <style>{`
        @keyframes fadeInFast {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-fast {
          animation: fadeInFast 0.3s ease-out forwards;
        }
      `}</style>
    </aside>
  );
};

export default SubjectSelector;