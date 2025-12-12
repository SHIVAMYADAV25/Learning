import {WebSocketServer ,WebSocket} from "ws";

const wss = new WebSocketServer({ port : 8000 });

// chech or count how many user are connected
let userCount:number = 0;

let allSockets:WebSocket[] = []

// when ever some one connected the callback runs and(for each a new socket variable is created)
wss.on("connection",(socket)=>{
    // every user socket 
    allSockets.push(socket)
    userCount = userCount + 1 // when ever this callback called a new user is created
    console.log("user Connected #"+ userCount); // will get print when an connection is done b/w client and server

    // when ever user sent a message the callback runs (for each user there will be new Event variable)
    socket.on("message",(event) => { // this is like the req given us by user on http
        // the event will be in buffer convert that in string
        console.log("message Received: " + event.toString() );


    // so using this loop and pushing the socket in the allSocket we have created an simple broadcasting channel
    // all the socket power of each user is in allsocket we loop throught each and then get the acces of each user socket and send the message in here who is typing will also receive its own message (because its own socket is alos in allSocket)
    for (let i = 0; i < allSockets.length; i++) {
      const s:any = allSockets[i];
        s.send(event.toString() + "sended by the server");
    }

    })

    

})

// this similar to 
// app.get("/signup",(req,res)=>{ same here when ever u hits the route each time there is new req and res is created

// })