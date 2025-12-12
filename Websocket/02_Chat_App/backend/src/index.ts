import {WebSocketServer ,WebSocket} from "ws";

// js has its own native websocket who can connect to other websoclet server but cannot have its own
// like in node the http can create is own server without express but the native websocket cannot create its own server but can get connect to other sockets
// we using external library to create and socket server called ws

const wss = new WebSocketServer({ port : 8000 });

// chech or count how many user are connected
let userCount:number = 0;


let allSockets:WebSocket[] = [] // the websocket type we are giving is comming from external library not from navtive js ones 

// when ever some one connected the callback runs and(for each a new socket variable is created)
wss.on("connection",(socket)=>{
    // every user socket will get pushed in allsocket array
    allSockets.push(socket) //looks like [socket1 (this is of postman), socket2 (this is of postwomen)]
    userCount = userCount + 1 // when ever this callback called a new user is created and the count of usercount get plus one
    console.log("user Connected #"+ userCount); // will get print when an connection is done b/w client and server for each user

    // when ever user sent a message the callback runs (for each user there will be new Event variable)
    socket.on("message",(event) => { // this is like the req given us by user on http
        // the event will be in buffer convert that in string
        console.log("message Received: " + event.toString() );


        // so using this loop and pushing the socket in the allSocket we have created an simple broadcasting channel
        // all the socket power of each user is in allsocket we loop throught each and then get the access of each user socket and send the message .in here who is typing will also receive its own message (because its own socket is alos in allSocket)
        allSockets.forEach( s => {
            s.send(event.toString() + "sended by the server");
        })
    })


    // if a user is diconnected we need to delete that socket value from the allSocket array
    socket.on("disconnect",() => { // thsi diconnect works when the user get disconnect it works individually for each user
        // agar vo socket nhi hai to use filter kar ke nikal dya
        allSockets = allSockets.filter(x =>  x != socket);
    })

    

})

// this similar to 
// app.get("/signup",(req,res)=>{ same here when ever u hits the route each time there is new req and res is created

// })