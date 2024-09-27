import React from "react";
import { Link } from "react-router-dom";
import video from "../Assets/vid.mp4";

const Hero = () => {
  return (
    <div className="relative flex mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        <div className="mb-16 lg:mb-0 lg:max-w-lg">
          <div className="mb-6 max-w-xl">
            <div>
              <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-purple-900">
                INTRODUCING
              </p>
            </div>
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-5xl sm:leading-snug">
              Start your startup <br />
              with <span className="inline-block text-purple-800">CompleteIQ</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Complete IQ is an advanced predictive analysis platform designed to help startups identify future market trends and make informed decisions. 
            </p>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-bold rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2"
            >
              Get Started
            </Link>
            <Link
              to="/"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-bold rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="flex h-full bg-black justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:w-2/3 lg:items-end lg:justify-start xl:w-1/2">
        
      </div> */}
      <video
        autoPlay
        loop
        src={video}
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 max-sm:hidden opacity-100"
      />
    </div>
  );
};

export default Hero;
