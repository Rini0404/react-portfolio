// introduction component with text on the left of the page

import React from "react";

const Intro = () => {
  return (
    // move text to the left of the page
// plug in email

<section className="">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:py-12 lg:col-span-2">
        <p className="max-w-xl text-lg text-white ">
          At the same time, the fact that we are wholly owned and totally independent from manufacturer and other group
          control gives you confidence that we will only recommend what is right for you.
        </p>

        <div className="mt-8">
          <a href="" className="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>

          <address className="mt-2 text-white not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
        </div>
      </div>

      <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3 border border-black ">
        <form action="" className="space-y-4">
          <div className = " border border-black rounded-lg ">
            <label className="sr-only" for="name">Name</label>
            <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Name" type="text" id="name" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
            <div className = "border border-black rounded-lg">
              <label className="sr-only" for="email">Email</label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div className = "border border-black rounded-lg">
              <label className="sr-only" for="phone">Phone</label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          

          <div className = "border border-black rounded-lg">
            <label className="sr-only" for="message">Message</label>
            <textarea
              className="w-full p-3 text-sm border-gray-200 rounded-lg"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4 ">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
            >
              <span className="font-medium"> Send </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  );
};

export default Intro;
