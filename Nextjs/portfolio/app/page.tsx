import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* heor */}
      <div className="text-center mb-16">
        <h1 className="text-4l md:text-6xl font-bold text-gray-900 mb-6">Welcome to my Website</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          This is a simple , clean website built with Next.js and Tailwind CSS . Perfect for beginner learning web development
        </p>

        <div className="space-x-4 mb-12">
          <button className="bg-blue-600 text-white px-3 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Get started
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Get started
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">

            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast</h3>
            <div className="italic text-gray-600">Built with Modern Tech for Optimal Performance</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">

            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast</h3>
            <div className="italic text-gray-600">Built with Modern Tech for Optimal Performance</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">

            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast</h3>
            <div className="italic text-gray-600">Built with Modern Tech for Optimal Performance</div>
          </div>
        </div>
      </div>
    </div>
  );
}
