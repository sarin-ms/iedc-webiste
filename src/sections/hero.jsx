import React from "react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
        
    <section className="bg-black pt-16 flex items-center min-h-screen lg:min-h-[calc(100vh-4rem)]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="relative lg:flex lg:items-center lg:justify-between w-full">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
              A Hub for Innovators, Creators & Thinkers
            </p>
            <h1 className="mt-4 text-4xl font-normal text-white sm:mt-6 sm:text-5xl lg:text-6xl xl:text-8xl">
              <span className="text-transparent font-bold bg-clip-text bg-white">
                IEDC CEC
              </span>
            </h1>
            <p className="max-w-xl lg:max-w-lg mx-auto lg:mx-0 mt-3 text-xl font-normal text-gray-400 sm:mt-6">
              Innovation And Entrepreneurship Development Cell Bootcamp CEC
            </p>
            <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-white group-hover:shadow-lg group-hover:shadow-gray-500/50"></div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSelHbI4I12mE-mQBLU-LRn6bG5EHLBuvQA1k_V7DyAVeFKP2Q/viewform"
                className="relative inline-flex items-center justify-center px-6 py-2 text-sm sm:px-8 sm:py-3 font-semibold text-white bg-black border border-transparent rounded-full"
                role="button"
              >
                Join Our Community!
              </a>
            </div>

            <div>
              <div className="pt-6 mt-8 border-t border-gray-800 sm:pt-8 sm:mt-10">
                <div className="max-w-xl mx-auto lg:mx-0">
                  <p className="text-base font-normal text-white text-center lg:text-left">
                    I think it's possible for ordinary people to choose to be
                    extraordinary.
                  </p>
                  <p className="text-base font-normal text-white mt-3 text-center lg:text-left">
                    - Elon Musk
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block mt-12 lg:mt-0 w-full lg:w-1/2 h-80 md:h-96 lg:h-[calc(100vh-4rem)] overflow-hidden relative">
            <Spline
              scene="https://prod.spline.design/y7dgYkG0aviY0XEL/scene.splinecode"
              style={{ width: "100%", height: "100%", touchAction: "pan-y" }}
            />
            <div
              aria-hidden="true"
              className="absolute bottom-4 right-4 w-36 h-10 bg-black rounded-md pointer-events-none z-20"
              style={{ opacity: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
