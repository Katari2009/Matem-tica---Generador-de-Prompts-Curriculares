import React from 'react';
import { CalculatorIcon, ToolsIcon } from './components/Icons';

export const SECTIONS = [
    { 
        name: 'Matemática', 
        icon: <CalculatorIcon />,
        subSections: [
            'Prompts para 3° Medio',
            'Prompts para 4° Medio',
        ]
    },
    { name: 'Herramientas Transversales', icon: <ToolsIcon /> },
];