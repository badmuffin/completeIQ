import React from 'react';



const Hero = () => {
  return (
    <div className="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        <div className="mb-16 lg:mb-0 lg:max-w-lg">
          <div className="mb-6 max-w-xl">
            <div>
              <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-cyan-900">INTRODUCING</p>
            </div>
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
              An inspiring new future <br />
              for <span className="inline-block text-cyan-500">Web 3.0</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequuntur quaerat! Optio.</p>
          </div>
          <div className="flex items-center">
            <a href="/" className="mr-6 inline-flex h-12 items-center justify-center rounded bg-cyan-500 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-cyan-400 focus:ring"> Get started </a>
            <a href="/" aria-label="" className="inline-flex items-center font-semibold text-cyan-600 transition-colors duration-200 hover:text-cyan-400">Learn more</a>
          </div>
        </div>
      </div>
      <div className="flex h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:w-2/3 lg:items-end lg:justify-start xl:w-1/2">
        <img src="/images/SoOmmtD2P6rjV76JvJTc6.png" className="-mb-16 h-64 w-full max-w-xl rounded-2xl object-cover object-top shadow-2xl shadow-cyan-200 lg:ml-64 lg:-mb-24 lg:h-auto lg:max-w-screen-md xl:ml-8 xl:-mb-28" alt="" />
      </div>
    </div>
  );
};

export default Hero;
