
type ChatProps = {
  roomId: string;
  username: string;
  messages: ChatMessage[];
  input: string;
  setInput: (v: string) => void;
  onSend: () => void;
  onLeave: () => void;
  bottomRef: React.RefObject<HTMLDivElement>;
};

export function ChatScreen({
  roomId,
  username,
  messages,
  input,
  setInput,
  onSend,
  onLeave,
  bottomRef,
}: ChatProps) {
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend();
    console.log(messages)
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-4 border-b border-slate-200 bg-[#FAF7F2]">
        <div>
          <div className="text-[11px] text-slate-500 uppercase tracking-[0.18em]">
            Room
          </div>
          <div className="text-sm font-semibold tracking-wide text-slate-900">
            {roomId}
          </div>
          <div className="text-[11px] text-slate-500">
            You as <span className="font-medium">{username}</span>
          </div>
        </div>
        <button
          onClick={onLeave}
          className="text-xs px-3 py-1.5 rounded-full border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
        >
          Leave
        </button>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-4 py-4 bg-gradient-to-b from-[#FAF7F2] to-[#F0E7DB]">
        {messages.length === 0 && (
          <p className="mt-8 text-center text-sm text-slate-500">
            Start the conversation. Any device joined to{" "}
            <span className="font-semibold">{roomId}</span> will see your
            messages instantly.
          </p>
        )}

        <div className="space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.self ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                  m.self 
                    ? "bg-[#2E8C82] text-white rounded-br-sm"
                    : "bg-white text-slate-900 rounded-bl-sm border border-slate-200"
                }`}
              >
                <div>{m.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div ref={bottomRef} />
      </main>

      {/* Input */}
      <form
        onSubmit={submit}
        className="h-16 flex items-center gap-3 px-4 border-t border-slate-200 bg-[#FAF7F2]"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          className="flex-1 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2E8C82]/70 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-[#F26C5E] hover:bg-[#E05548] text-white text-sm font-semibold transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}


// id :  "ce499cb7-c0b1-4ae4-96c0-ea3caedf1f3a"
// roomId :  "1"
// self : true
// text : "hekko"