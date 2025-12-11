// import the webSocket server from the "ws" library 
import { WebSocketServer } from "ws";

// Create a new Websocket server Instance on part 8080
const ws = new WebSocketServer({port:8080});

// Add an event listener for new client connections
ws.on("connection",function(socket){
<<<<<<< HEAD
    console.log("user connected");
=======
>>>>>>> c9eda0e6672efcd4673509d05a9a3465e0014de5
    //add an event lsitener for message received from the connected client
    socket.on("message",(e)=>{
        // Check if the message received in "ping"
        if(e.toString() === "ping"){
            // response with "pong" tp the client
            socket.send("pong")
        }
    })
})

