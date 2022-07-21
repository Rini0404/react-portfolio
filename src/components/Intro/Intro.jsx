// introduction component with text on the left of the page

import React from "react";

const Intro = () => {
  return (
    // move text to the left of the page
    // plug in email

    <section className="bgForPjects">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2 p-8 bg-gray-700 rounded-lg shadow-lg  border border-black">
            <p class="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
              Hello again! If you have any questions or concerns please don't
              hesitate to send me a message! You can call, text, or email me!
            </p>

            <div className="mt-8">
              <div class="flex pb-4 items-center">
                <div aria-label="phone icon" role="img">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg1.svg"
                    alt="phone"
                  />
                </div>
                <p class="pl-4 text-white text-base">+1 (407)-607-2468 </p>
              </div>

              <div class="flex items-center">
                <div aria-label="email icon" role="img">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg2.svg"
                    alt="email"
                  />
                </div>
                <p class="pl-4 text-white text-base">
                  ReneOrtega2468[at]gmail.com
                </p>
              </div>

              <p class="text-lg text-white pt-10 tracking-wide">
                <br />
                Orlando, FL
              </p>
            </div>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3 border border-black ">
            <form id="contact" 
            action="https://formsubmit.co/reneortega2468@gmail.com" method="POST" className="space-y-4">
              <div className=" border border-black rounded-lg ">
                <label className="sr-only" for="name">
                  Name
                </label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Name"
                  type="name"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div className="border border-black rounded-lg">
                  <label className="sr-only" for="email">
                    Email
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="border border-black rounded-lg">
                  <label className="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Phone Number"
                    type="telephone"
                    name="phone"
                    id="phone"
                  />
                </div>
              </div>

              <div className="border border-black rounded-lg">
                <label className="sr-only" for="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Message"
                  rows="8"
                  name="message"
                  type="message"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4 ">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-cyan-400 bg-black rounded-lg sm:w-auto"
                >
                  <span className="font-medium"> Send </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
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
