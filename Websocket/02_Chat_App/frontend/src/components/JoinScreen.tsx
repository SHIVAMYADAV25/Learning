
type JoinProps = {
  roomId: string;
  setRoomId: (v: string) => void;
  username: string;
  setUsername: (v: string) => void;
  onJoin: () => void;
};

export function JoinScreen({
  roomId,
  setRoomId,
  username,
  setUsername,
  onJoin,
}: JoinProps) {
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onJoin();
  };

  return (
    <div className="flex-1 flex items-center justify-center px-5">
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-white border border-slate-200 rounded-2xl px-6 py-7 shadow-[0_18px_40px_rgba(148,163,184,0.25)]"
      >
        <h2 className="text-lg font-semibold text-slate-900">
          Join a chat room
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Use the same room code on two different browsers to simulate
          chatting with a friend.
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <label className="text-xs font-medium text-slate-700">
              Your name
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2E8C82]/70 focus:border-transparent"
              placeholder="e.g. Aman"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-700">
              Room code
            </label>
            <div className="mt-1 flex gap-2">
              <input
                value={roomId}
                onChange={(e) =>
                  setRoomId(e.target.value.toUpperCase().slice(0, 8))
                }
                className="flex-1 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-sm text-slate-900 tracking-[0.18em] uppercase placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2E8C82]/70 focus:border-transparent"
                placeholder="RED123"
              />
              <button
                type="button"
                onClick={() =>
                  setRoomId(
                    Math.random().toString(36).substring(2, 7).toUpperCase()
                  )
                }
                className="text-[11px] px-3 py-2 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                Random
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#2E8C82] hover:bg-[#27766E] text-white text-sm font-semibold py-2.5 transition-colors"
        >
          Join room
        </button>
      </form>
    </div>
  );
}