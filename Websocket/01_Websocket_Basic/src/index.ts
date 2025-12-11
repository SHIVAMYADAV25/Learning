// import the websoket module to create a websocket server
import {WebSocketServer} from "ws"

// an instance of the websocket server that listens on port 8080
const ws = new WebSocketServer({ port : 8080});

// this is an event handler for managing websocket connection
// similar to how HTTP servers have app.get or app.post , here we handle connection is established
ws.on("connection",function(socket){ // tabhi chalaega jab connection establieshed ho jayaga
    console.log("user connected"); // display this message when the connection is done kinda callback(in ternimal of postman or postWoman)

    // Setting up a function to send data to the client at regular interval
    setInterval(()=>{
        socket.send("Courrent price of solana is "+Math.random());
    },1000)
    // send a random value (mock rice ) every second to the connected client  such as postman

    // Event handler for receiving message from the client 
    // client ke taraf se message kaise lete hai ?
    socket.on("message",function(message){
        // agar client kuch bhi send karta hai postman mai vo log ho jayaga
        console.log(message.toString()); // convert into the string because the message is in buffer(kinda random number)
    })
})



// Notes:
// 1. Open Postman.
// 2. Choose the WebSocket option in Postman.
// 3. Use the WebSocket URL format: ws://localhost:8000 (replace "8000" with the port you configured).
// 4. Establish a connection from Postman to the WebSocket server.
// 5. Once connected, the server will start sending random prices to Postman, and any message sent from Postman will be logged on the server.