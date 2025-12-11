import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState();
  const inputRef = useRef();

  // this get call when button is clicked
  function message(){
    if(!text){
      return
    }

    // get value from input field
    const message = inputRef.current.value;

    // send data to backend
    //@ts-ignore
    text.send(message);
  }

  // when ever the app mount runs the code inside useeffect run
  useEffect(()=>{
     // Create new WebSocket connection to local server
     // connect to the socket server
    const newSocket = new WebSocket('ws://localhost:8080');

    // giving newsocket power to the text 
    setText(newSocket);
    
    // when ever the comes on the server log that message
    // e will be having data which is send by the backend using the socket.send
    newSocket.onmessage= (e)=>{
      console.log(e.data)
    }
  },[])

  return (
    <div className="container">
      <h1 className="title">Ping Pong Frontend</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type your message..."
        // value={text}
        className="inputBox"
      />

      <button className="sendButton" onClick={message}>
        Send
      </button>
    </div>
  );
}

export default App;
