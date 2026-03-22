import "./app.css";
import { CiMicrophoneOn } from "react-icons/ci";
import Listen from "../public/speak.gif";
import va from "../public/ai.png";
import { useContext } from "react";
import { dataContext } from "./context/Context";
import aiVoice from "../public/aiVoice.gif";
function App() {
  const {
    Recognition,
    listen,
    setListen,
    prompt,
    setPrompt,
    response,
    setResponse,
  } = useContext(dataContext);

  return (
    <div className="main">
      <img src={va} id="strichu" alt="" />
      <p>I'm STRICHU,Your Advanced Virtual Assistence</p>
      {!listen ? (
        <button
          onClick={()=>{
            Recognition.start()
            setListen(true);
          }}
        >
          click Here <CiMicrophoneOn />
        </button>
      ) : (
        <div className="response">
          {!response ? (
            <img src={Listen} />
          ) : (
            <img id="voice" src={aiVoice} alt="" />
          )}
          <p id="resp">{prompt}</p>
        </div> 
      )}
    </div>
  );
}

export default App;
