import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from './Icons';

interface PromptCardProps {
  title: string;
  description?: string;
  promptText: string;
  theme?: 'indigo' | 'cyan';
}

const PromptCard: React.FC<PromptCardProps> = ({ title, description, promptText, theme = 'indigo' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (copied) return;
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const themeClasses = {
    indigo: {
      border: 'border-indigo-400',
      title: 'text-indigo-300',
      button: 'bg-indigo-500 hover:bg-indigo-600',
    },
    cyan: {
      border: 'border-cyan-400',
      title: 'text-cyan-300',
      button: 'bg-cyan-500 hover:bg-cyan-600',
    }
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className={`bg-slate-800/40 backdrop-blur-md rounded-xl p-5 shadow-lg transform hover:scale-105 transition-transform duration-300 border border-slate-100/5 border-l-4 ${currentTheme.border}`}>
      <h4 className={`text-lg font-bold ${currentTheme.title} mb-1`}>{title}</h4>
      {description && <p className="text-slate-400 text-sm mb-4">{description}</p>}
      
      <pre className="bg-slate-900/50 rounded-md p-3 text-sm text-slate-300 whitespace-pre-wrap font-mono mb-4">
        <code>{promptText}</code>
      </pre>

      <button
        onClick={handleCopy}
        className={`w-full flex items-center justify-center space-x-2 p-2 rounded-md text-sm font-semibold transition-all duration-200 ease-in-out
          ${copied
            ? 'bg-green-500 text-white cursor-default'
            : `${currentTheme.button} text-white`
          }
        `}
        disabled={copied}
      >
        {copied ? (
          <>
            <CheckIcon />
            <span>¡Copiado!</span>
          </>
        ) : (
          <>
            <ClipboardIcon />
            <span>Copiar Prompt</span>
          </>
        )}
      </button>
    </div>
  );
};

export default PromptCard;