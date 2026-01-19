import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href={"/"} className="text-xl font-bold text-gray-800">
                MyWebsite
              </Link>
            </div>

            {/* NavigateLink */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href={"/"}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors"
                >
                  Home
                </Link>

                <Link
                  href={"/"}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors"
                >
                  About
                </Link>

                <Link
                  href={"/"}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors"
                >
                  Contect
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              
            </div>

            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
