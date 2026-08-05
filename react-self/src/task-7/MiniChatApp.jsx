import React, {useState} from "react";
import "./Cont.css";

function App() {

  const [message, setMessage]=useState("");
  const [messages, setMessages]=useState([]);

  const handleSend=()=>{
    if (message.trim() === "") return;

    setMessages([...messages, message]);
    setMessage("");
  };

  return(
    <div className="container">
      <div className="chat-box">
        <h1>Mini Chat Application</h1>

        <div className="input-section">
          <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e)=>setMessage(e.target.value)}/>

          <button onClick={handleSend}>Send Message</button>
        </div>

        <div className="messages">
          <h2>Messages</h2>

          {messages.length === 0 ? (
            <p className="empty">No messages yet.</p>
          ) : (
            messages.map((msg, index)=>(
              <div className="message" key={index}>
                {msg}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

