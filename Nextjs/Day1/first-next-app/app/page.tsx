export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <h1 className="text-5xl font-extralight text-blue-800 mb-6 shadow-md p-3 rounded-2xl border-blue-400 border-1">
        First Next.tsx App
      </h1>

      <p className="text-lg font-medium p-4 rounded-lg shadow-lg text-black">
        Welcome to the Todo Display App! <br/>
        Navigate to {" "}
        <code className="text-blue-800"> localhost:3000/todos</code> to view the todos.
      </p>
    </div>
  );
}
