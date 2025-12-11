// Import the WebSocket server from the "ws" library
import { WebSocketServer } from "ws";

// Create a new WebSocket server instance on port 8080
const ws = new WebSocketServer({ port: 8080 });

// Add an event listener for new client connections
ws.on("connection", (socket) => {
    console.log("user connected");

    // Add an event listener for messages received from the client
    socket.on("message", (msg) => {
        const message = msg.toString();

        // Check if the received message is "ping"
        if (message === "ping") {
            // Respond with "pong" to the client
            socket.send("pong");
        }
    });

    // setInterval(()=>socket.send("hrllo"),1000)
});
