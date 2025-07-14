 // const axios = require("axios");
 const { GoogleGenAI } = require("@google/genai");
 const ai = new GoogleGenAI({ apiKey: "AIzaSyCZHmpe4uI3nbYwNsgcdc4BWfyeW_IE6dY" });
 
 
 const askGemini3 = async (question) => {
   question = "Give only 10 test type questions(mix. mcq, short, long) in bullet points about"+ question
   console.log(question)
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
 
 module.exports = askGemini3;
 