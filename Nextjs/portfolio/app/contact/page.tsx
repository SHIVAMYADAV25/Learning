import React from "react";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600">
          We'd love to hear from you . Send us a message and we'll respond as
          soon as possible
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mx-auto">
        <div className="bg-white rounded-xl border-gray-200 border p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2">Full Name</label>
                <input className="border border-gray-300 w-full px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent" placeholder="Your Full Name"></input>
            </div>

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2">Email</label>
                <input className="border border-gray-300 w-full px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent" placeholder="Your.email@example.com"></input>
            </div>

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2">Subject</label>
                <input className="border border-gray-300 w-full px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent" placeholder="What is this About"></input>
            </div>

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2">Message</label>
                <textarea className="border min-h-[120px] border-gray-300 w-full px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent" placeholder="Tell us more about inquiry"></textarea>
            </div>

            <button className="px-4 py-3 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-400 transition-colors hover:cursor-pointer">
                Submit
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
