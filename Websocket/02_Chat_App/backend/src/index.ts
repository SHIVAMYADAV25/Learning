import WebSocketServer from "ws";

const wss = new WebSocketServer({port:8080});

// when ever some one connected the callback runs
wss.on("connection",(socket)=>{

})

// this similar to 
// app.get("/signup",(req,res)=>{

// })