import {WebSocketServer ,WebSocket} from "ws";

// js has its own native websocket who can connect to other websoclet server but cannot have its own
// like in node the http can create is own server without express but the native websocket cannot create its own server but can get connect to other sockets
// we using external library to create and socket server called ws

type allSocketSchema = {
    socket : WebSocket,
    roomId : string 
}

let allSocket:allSocketSchema[] = [] 

// this will looks like
// [
//     [socket:postman wala , roomId : red],
//     [socket:postwoman wala , roomId : green],
//     [socket:new postman wala , roomId : red],
// ]
// now the similar room people can have the data exchange

const wss = new WebSocketServer({ port : 8000 });

// the websocket type we are giving is comming from external library not from navtive js ones 

// when ever some one connected the callback runs and(for each a new socket variable is created)
wss.on("connection",(socket)=>{
    
    socket.on("message",(message) => {
        // parsing data because websocket allways receive data in string so we will get the data like this
        // "{
        //     "type" : "chat" || "join",
        //     "payload" : "{
        //         "roomId" :"red" or "message" : "hello" if u are already in joined in a room
        //     }"
        // }"
        // step 1) get the data

            // @ts-ignore
            let parsedMessage: any;
            try {
            // @ts-ignore
            parsedMessage = JSON.parse(message);
            } catch (err) {
            console.error("Invalid JSON from client:", message);
            return;
            }




        // step 2) check what operation does the user want to perfrom getting into and room or want to send message in room (type)

        // step1 : check the types
        // step2 : push all the data given by the user in allSocket
        // if(parsedMessage.type === "join"){ // In payload it will be having roomId
        //     // pushing the user data in payload
        //     allSocket.push([
        //         socket : socket,
        //         roomId : parsedMessage.payload.roomId
        //     ])
        // }

        if (parsedMessage.type === "join" && parsedMessage.payload?.roomId) {
      // push an OBJECT, not an array
      allSocket.push({ socket, roomId: String(parsedMessage.payload.roomId) });
      console.log("Joined room:", parsedMessage.payload.roomId, " total sockets:", allSocket.length);
      return;
    }


        // step1: so here check what type is it
        // step2 : get the current user roomID from allsocket
        // step3  : check people present in the same room and send the message send by the current user 
        if(parsedMessage.type === "chat"){ // In payload it will be having the message
            // const currentUserRoom = allSocket.find(x => x.socket == socket)?.roomId  simpler way to write this code will be

            let currentUserRoom = null; // each user will he having its own currenUserRoom

            // ismai hum log current user ka room id store ka raha hai 
            for(let i = 0 ; i < allSocket.length ; i++){ // iterate each user scoket present in allSocket
                if(allSocket[i]?.socket === socket){ // checking or finding the current user presence in allsocket ( ki matalab jo user send kiya hai message uska socket present hai kya all socket mai)
                    currentUserRoom = allSocket[i]?.roomId // store the roomId in currentUserRoom
                }
            }

            for( let i = 0; i  < allSocket.length ; i++){
                if(allSocket[i]?.roomId == currentUserRoom){ // check that all the user present in allsocket does there roomid matched the roomId of currentUser  if yes then send the message of current user to all the user present in the same room
                    allSocket[i]?.socket.send(parsedMessage.payload.message); // send message to the people present in same room
                }
            }
        }
    })
})

// this similar to 
// app.get("/signup",(req,res)=>{ same here when ever u hits the route each time there is new req and res is created

// })