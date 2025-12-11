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


// first make the connection in useEffect using this line const newSocket = new WebSocket('ws://localhost:8080');
// then set the newSocket avaliabe to everyone sepecailly message function
// using the onmessage we get the from the backend to the frontent e will e object data is the value we want
// then get the refrence of the input using useRef so that we can store the value inside a variable which can be passed tp the backend
// using the text.send() === newSocket.send()


// advantage using websocket 
// once the connection is done the server can send any kind of data same with client
// if we use the http we would be having Setinterval to make the connection again and again
// so call the server agian and again but
// there the connection is once made then there is no worry of connecting again 

// the data will be persitance and the duplex form 