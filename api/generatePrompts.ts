import { GoogleGenAI, Type } from "@google/genai";

// Vercel Edge Function signature
export const config = {
  runtime: 'edge',
};

// This function will handle requests to /api/generatePrompts
export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Only POST requests are allowed.' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { subject } = await req.json();

        if (typeof subject !== 'string' || !subject) {
             return new Response(JSON.stringify({ error: 'El campo "subject" es requerido y debe ser un texto.' }), {
                 status: 400,
                 headers: { 'Content-Type': 'application/json' }
            });
        }
        
        if (!process.env.API_KEY) {
            console.error('API_KEY environment variable not set in Vercel.');
            return new Response(JSON.stringify({ error: "La API Key de Google Gemini no está configurada. Por favor, añádela como una variable de entorno llamada 'API_KEY' en la configuración de tu proyecto en Vercel y vuelve a desplegar la aplicación para que el cambio tome efecto." }), {
                 status: 500,
                 headers: { 'Content-Type': 'application/json' }
            });
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const responseSchema = {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                titulo: {
                  type: Type.STRING,
                  description: "Un título corto y atractivo para el prompt."
                },
                prompt: {
                  type: Type.STRING,
                  description: "El texto completo del prompt educativo."
                },
              },
              required: ["titulo", "prompt"],
            },
        };

        const systemInstruction = `Eres un experto en el currículum de educación media chileno, específicamente para los niveles de 3° y 4° medio. Tu tarea es generar prompts creativos y desafiantes basados en los Objetivos de Aprendizaje (OA) y contenidos oficiales. Responde exclusivamente con el array JSON solicitado.`;
        const userPrompt = `Para la asignatura de '${subject}' en los niveles de 3° y 4° medio, y basándote en el currículum nacional chileno (contenidos y Objetivos de Aprendizaje), genera 6 prompts para estudiantes. Los prompts deben fomentar el pensamiento crítico, la investigación, la argumentación y la aplicación de conocimientos relevantes a estos niveles.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userPrompt,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.8,
                topP: 0.9,
            },
        });
        
        const jsonText = response.text.trim();
        
        return new Response(jsonText, {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error("Error in serverless function:", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return new Response(JSON.stringify({ error: 'Error al generar los prompts desde el servidor.', details: errorMessage }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}