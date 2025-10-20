import type { Prompt } from '../types';

export const generatePromptsForSubject = async (subject: string): Promise<Prompt[]> => {
    const apiResponse = await fetch('/api/generatePrompts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject }),
    });

    if (!apiResponse.ok) {
        const errorBody = await apiResponse.json().catch(() => ({ error: "El servidor devolvió una respuesta inválida o no está disponible." }));
        throw new Error(errorBody.error || "Ocurrió un error desconocido en el servidor.");
    }

    const prompts = await apiResponse.json();
    
    if (!Array.isArray(prompts)) {
         throw new Error("La respuesta del servidor no tiene el formato esperado.");
    }

    return prompts as Prompt[];
};
