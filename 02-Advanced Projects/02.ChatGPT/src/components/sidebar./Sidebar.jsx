import { FaRegMessage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import "./sidebar.css";
import { useContext, useState } from "react";
import { DataContext } from "../../context/Usercontext";
function Sidebar() {
  const [extend, setExtend] = useState(false);
  const { sent, prevPrompt } = useContext(DataContext);

  async function loadPrevPrompt(prompt){
    sent(prompt)
  }
  return (
    <div className="sidebar">
      <GiHamburgerMenu
        id="ham"
        onClick={() => {
          setExtend((prev) => !prev);
        }}
      />
      <div className="newchat">
        <FaPlus />
        {extend ? <p>New Chat</p> : null}
      </div>
      {prevPrompt.map((items, idx) => {
        return (
          <div className="recent" onClick={()=>{
            loadPrevPrompt(items)
          }
          }>
            <FaRegMessage />
            {extend ? <p>{items}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
