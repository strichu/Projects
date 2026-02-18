// const api = "AIzaSyB-md3ZFqOr5LYoVeqPlznMJsHiw35sNQs"
// import { GoogleGenAI } from "@google/genai";

// // The client gets the API key from the environment variable `GEMINI_API_KEY`.
// const ai = new GoogleGenAI({apiKey:api});

// async function main(contents) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash-latest",
//     contents:contents,
//   });
//   console.log(response.text);
// }

// export default main

import Groq from "groq-sdk"; // Import سب سے اوپر

let api = "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";

// dangerouslyAllowBrowser کو true کرنا ضروری ہے اگر آپ React استعمال کر رہے ہیں
const groq = new Groq({ 
  apiKey: api, 
  dangerouslyAllowBrowser: true 
});

export async function main(userPrompt) {
  // یہاں prompt پاس کرنا ضروری ہے
  const chatCompletion = await getGroqChatCompletion(userPrompt);
  
  const response = chatCompletion.choices[0]?.message?.content || "";
  console.log(response);
  return response;
}

export async function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    // درست ماڈل کا نام استعمال کریں
    model: "llama-3.3-70b-versatile", 
  });
}