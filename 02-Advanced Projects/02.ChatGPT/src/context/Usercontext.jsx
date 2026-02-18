
import { createContext, useState } from "react";

import { main } from '../gimini'; 

export const DataContext = createContext();

function Usercontext({ children }) {

  const [input, setInput] = useState("");
  const [resultData, setResultData] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const[recentPrompt,setRecentPrompt]= useState("")
  const[prevPrompt,setPrevPrompt]= useState([])

  async function sent(prompt) {
    if (!prompt) return;

    setResultData("");    
   setLoading(true);    
   setRecentPrompt(prompt)
   setShowResult(true);
   setInput("")
   setPrevPrompt(prev=>[...prev,prompt])
   try {
      
      const response = await main(prompt); 
      setResultData(response.split("**") && response.split("*"));
    } catch (error) {
      console.error("Error:", error);
      setResultData("Error: Could not connect to Groq.");
    } finally {
      setLoading(false);
       }
  }

  const data = {
    sent,
    input,
    setInput,
    resultData,
    setResultData,
    loading,
    showResult,
    recentPrompt,
    setLoading,
    prevPrompt
    
  };

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export default Usercontext;