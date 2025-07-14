 // const axios = require("axios");
const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({ apiKey: "AIzaSyDIrLNvDcCSCwWtJvfGUrdu0Biv2WyCHVI" });


const askGemini = async (question) => {
  
  const response = await ai.models.generateContentStream({
    model: "gemini-2.0-flash",
    contents: question,
  });
  let answer = []
  for await (const chunk of response) {
    console.log(chunk.text);
    answer.push(chunk.text)
    // return chunk.text
  }
  
  return answer
};

module.exports = askGemini;
