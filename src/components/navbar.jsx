import React, { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-black tracking-tight">
              <a href="/">
              IEDC
              </a>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <a
              href="/"
              className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/#about"
              className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/#events"
              className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            >
              EVENTS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/#blog"
              className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            >
              UPDATES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/execom"
              className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            >
              EXECOM
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSelHbI4I12mE-mQBLU-LRn6bG5EHLBuvQA1k_V7DyAVeFKP2Q/viewform"
              target="_blank"
            >
              <button className="bg-black text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-105 cursor-pointer">
                JOIN US
              </button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            HOME
          </a>
          <a
            href="/#about"
            className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            ABOUT
          </a>
          <a
            href="/#events"
            className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            EVENTS
          </a>
          <a
            href="/#blog"
            className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            UPDATES
          </a>
          <a
            href="/execom"
            className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            EXECOM
          </a>
          <div className="px-3 py-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSelHbI4I12mE-mQBLU-LRn6bG5EHLBuvQA1k_V7DyAVeFKP2Q/viewform"
              target="_blank"
            >
              <button className="w-full bg-black text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                JOIN US
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
