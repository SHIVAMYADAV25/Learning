import { useEffect, useRef, useState } from "react";
import { ChatScreen } from "./components/ChatScreen";
import { JoinScreen } from "./components/JoinScreen";

type ChatMessage = {
  id: string;
  text: string;
  roomId: string;
  self: boolean;
};

const WS_URL = "ws://localhost:8000";

export default function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  //  runs when we hit the join button

  const connectAndJoin = () => {

    //  -> connect to socket
    //  -> onopen  => setSocket and setIsJoined as true
    //  -> also send the data to socket (which is type and payload inside that and roomId)
    if (!roomId.trim() || !username.trim()) return;

    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      setSocket(ws);
      setIsJoined(true);

      ws.send(
        JSON.stringify({
          type: "join",
          payload: { roomId },
        })
      );
    };

    // client reserve data form the server
    // --> parse the data 
    // --> check the data.type 
    // --> get the text send by the user and the roomId
    // --> setMessages(prev data and also the new data like text , roomId, self)

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "chat") {
          const text = data.payload?.message ?? "";
          const room = data.payload?.roomId ?? "";
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              text,
              roomId: room,
              self: false,
            },
          ]);
           console.log("from try handle:",messages);
        }
      } catch {
        // receiver mai catch chal raha hai
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            text: String(event.data),
            roomId,
            self: false,
          },
        ]);

         console.log("from catch handle:",messages);
      }
    };

    // closing the ws server connection
    ws.onclose = () => {
      setIsJoined(false);
      setSocket(null);
    };


    // closing the ws connection server
    ws.onerror = () => {
      setIsJoined(false);
      setSocket(null);
    };
  };

  const handleSend = () => {
    // send karte vakt chalta hai
    if (!socket || socket.readyState !== WebSocket.OPEN) return;
    if (!input.trim()) return;

    const msg = input.trim();

    socket.send(
      JSON.stringify({
        type: "chat",
        payload: { message: msg },
      })
    );

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: msg,
        roomId,
        self: true,
      },
    ]);

    console.log("from Send handle:",messages);

    setInput("");
  };

  const handleLeave = () => {
    socket?.close();
    setIsJoined(false);
    setMessages([]);
    setRoomId("");
  };

  return (
    <div className="min-h-screen bg-[#F5F1EB] text-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl h-[82vh] md:h-[86vh] rounded-3xl bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] border border-slate-200 overflow-hidden flex">
        {/* Left brand column */}
        <aside className="hidden md:flex w-[36%] flex-col justify-between border-r border-slate-200 bg-gradient-to-b from-[#FFE6D9] via-[#FDF7F0] to-[#E5F5F3] px-6 py-6 relative">
          <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full bg-[#2E8C82]/10 blur-3xl" />
          <div className="absolute bottom-4 -left-10 h-32 w-32 rounded-full bg-[#F26C5E]/10 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] text-slate-600 border border-slate-200 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2E8C82] animate-pulse" />
              <span>Realtime rooms · WebSocket</span>
            </div>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
              RoomCode Chat
            </h1>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Join any room with a code and see messages appear across all
              connected devices instantly.
            </p>
          </div>

          <div className="relative z-10 space-y-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2E8C82]" />
              <span>Focus on WebSocket logic, not UI boilerplate.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F26C5E]" />
              <span>Designed for practice projects and demos.</span>
            </div>
          </div>
        </aside>

        {/* Right main area */}
        <div className="flex-1 flex flex-col bg-[#FAF7F2]">
          {!isJoined ? (
            <JoinScreen
              roomId={roomId}
              setRoomId={setRoomId}
              username={username}
              setUsername={setUsername}
              onJoin={connectAndJoin}
            />
          ) : (
            <ChatScreen
              roomId={roomId}
              username={username}
              messages={messages}
              input={input}
              setInput={setInput}
              onSend={handleSend}
              onLeave={handleLeave}
              bottomRef={bottomRef}
            />
          )}
        </div>
      </div>
    </div>
  );
}

