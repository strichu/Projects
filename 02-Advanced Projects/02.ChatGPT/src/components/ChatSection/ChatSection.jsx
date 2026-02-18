import Darkmood from "../Darkmode/Darkmood";
import { LuSendHorizontal } from "react-icons/lu";
import "./chatsection.css";
import { useContext } from "react";
import { DataContext } from "../../context/Usercontext";
import user from "../../Assets/user.jpeg";
import ai from "../../Assets/aiagent.avif";
function ChatSection() {
  const {
    sent,
    input,
    setInput,
    showResult,
    resultData,
    recentPrompt,
    loading,
  } = useContext(DataContext);
  return (
    <div className="chatsection">
      <div className="topsection">
        {!showResult ? (
          <div className="headings">
            <span>HELLO STRICHU</span>
            <span>I am your own Assistence</span>
            <span>What can i help you</span>
          </div>
        ) : (
          <div className="result">
            <div className="userbox">
              <img src={user} width={60} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="aibox">
              <img src={ai} width={60} alt="" />
              {loading ? <div className="loader">
                <hr />
                <hr />
                <hr />
              </div> : <p>{resultData}</p>}
            </div>
          </div>
        )}
      </div>
      <div className="bottomsection">
        <input
          type="text"
          placeholder="enter a prompt"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          id="sentbtn"
          onClick={() => {
            sent(input);
          }}
        >
          <LuSendHorizontal />
        </button>
        <Darkmood />
      </div>
    </div>
  );
}

export default ChatSection;
