import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDIrLNvDcCSCwWtJvfGUrdu0Biv2WyCHVI" });

async function main() {
  const response = await ai.models.generateContentStream({
    model: "gemini-2.0-flash",
    contents: "Geography",
  });

  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

await main();