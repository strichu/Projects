

import React, { createContext, useState, useEffect, useRef } from "react";
import main from "../gimini";

export const dataContext = createContext();

function Context({ children }) {
  const [listen, setListen] = useState(false);
  const [prompt, setPrompt] = useState("listening...");
  const [response, setResponse] = useState(false);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognitionRef = useRef(new SpeechRecognition());
  const Recognition = recognitionRef.current; 

  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.pitch = 1;
    text_speak.rate = 1;
    text_speak.lang = "en-GB"; 

    window.speechSynthesis.cancel();
    
    window.speechSynthesis.speak(text_speak);
  }

  async function aiResponse(text) {
    let res = await main(text);
    speak(res);
    setResponse(true);
  }

  
  useEffect(() => {
    Recognition.onresult = (e) => {
      let currentIndex = e.resultIndex;
      let transcript = e.results[currentIndex][0].transcript;
      console.log(transcript);
      setPrompt(transcript);
      aiResponse(transcript);
    };
  
  }, []); 
  let value = {
    Recognition,
    listen,
    setListen,
    prompt,
    setPrompt,
    response,
    setResponse,
  };

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  );
}

export default Context;