import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  function message(){

  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");

    ws.
  },[])

  return (
    <div className="container">
      <h1 className="title">Ping Pong Frontend</h1>

      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={message}
        className="inputBox"
      />

      <button className="sendButton">
        Send
      </button>
    </div>
  );
}

export default App;
