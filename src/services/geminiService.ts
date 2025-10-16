
import { GoogleGenAI } from "@google/genai";

// FIX: Aligned with @google/genai coding guidelines.
// The API key is now sourced directly from process.env.API_KEY
// during initialization, and unnecessary checks have been removed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateSummary(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate summary from Gemini API.");
  }
}