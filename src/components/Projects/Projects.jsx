import React from "react";
import rookiesPic from "../../imgs/173086506-cf0b12cc-7f25-4899-837f-686bfc07ebf2.png";
import pcApp from "../../imgs/Pc-a1.png";
import tgdPic from "../../imgs/sdsd.PNG";

function IndexPage() {
  return (
    <div className="bgForPjects">
      <div class="flex flex-wrap justify-center gap-12 container mx-auto p-10 ">
        <div class="w-[360px] h-[480px] py-8 px-1">
          <div class="relative flex flex-col justify-center items-center w-[300px] h-[400px] mx-auto p-2 bg-slate-50 border-slate-900 text-slate-50 shadow-lg rounded-3xl hover:shadow-xl">
            <div class=" flex grid-cols-1 gap-4">
            <button
                type="button"
                className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
                target = "_blank"
              ><a href ="https://github.com/Rini0404/pc-architect" target = "_blank">Github  </a>
              </button>

              <button
                type="button"
                className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
              ><a href ="https://pc-architect.herokuapp.com/" target = "_blank"> Live Link </a>
              </button>
            </div>
            <h3 class="absolute -top-5 -left-5 w-32 p-2 bg-slate-800 rounded-3xl text-2xl font-merriweather text-center">
              Pc Architect
            </h3>

            <div
              href="https://eazyip.github.io/"
              target="__blank"
              class="block w-full mx-auto p-2 md:mx-auto hover:rotate-2 transition ease-in-out delay-75 duration-150"
            >
              <img
                src={pcApp}
                alt="Eazy IP Web app showcase mockup"
                class="object-fill"
              />
            </div>

            <p class="absolute -bottom-12 left-6 w-[300px] p-4 bg-inherit border-slate-900 text-slate-900 border shadow-lg rounded-3xl hover:text-black hover:shadow-xl">
              Web App to build your next PC! You can view hundreds of parts and
              save them Using MERN Stack, JWTs, React-Redux Toolkit, and more!
            </p>
          </div>
        </div>

        <div class="w-[360px] h-[480px] py-8 px-1">
          <div class="relative flex flex-col justify-center items-center w-[300px] h-[400px] mx-auto p-2 bg-slate-50 border-slate-900 border-2 rounded-3xl">
            {/* div to go nect to eachother */}
            <div class=" flex grid-cols-1 gap-4">
              <button
                type="button"
                className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
                href =  "https://github.com/Rini0404/ThatGoodDirt"
                target = "_blank"
              ><a href ="https://github.com/Rini0404/ThatGoodDirt" target = "_blank">Github  </a>
              </button>

              <button
                type="button"
                className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
              ><a href ="https://rini0404.github.io/ThatGoodDirt/" target = "_blank"> Live Link </a>
              </button>
            </div>
            <h3 class="absolute -top-5 -left-5 w-32 p-2 bg-inherit border-slate-900 text-slate-900 border-2 rounded-3xl text-2xl font-merriweather text-center">
              That Good Dirt
            </h3>

            <div
              href="https://eazyip.github.io/"
              target="__blank"
              class="block w-full mx-auto p-2 md:mx-auto hover:rotate-2 transition ease-in-out delay-75 duration-150"
            >
              <img
                src={tgdPic}
                alt="Eazy IP Web app showcase mockup"
                class="object-fill"
              />
            </div>

            <p class="absolute -bottom-12 left-6 w-[300px] p-4 bg-slate-800 text-slate-50 rounded-3xl hover:text-white">
              Using google Geo location API, you can find the nearest hiking
              trail near you! Made with HTML, JavaScript, CSS, jQuery, and
              Tailwinds CSS.
            </p>
          </div>
        </div>

        <div class="w-[360px] h-[480px] py-8 px-1">
          <div class="relative flex flex-col justify-center items-center w-[300px] h-[400px] mx-auto p-2 bg-slate-50 border-slate-900 border-2 rounded-3xl">
            <div class=" flex grid-cols-1 gap-4">
            <div class=" flex grid-cols-1 gap-4">
              <button
                type="button"
                className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
                href =  "https://github.com/Rini0404/ThatGoodDirt"
                target = "_blank"
              ><a href ="https://github.com/Rini0404/LeCookBook" target = "_blank">Github  </a>
              </button>

              <button
                type="button"
                className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
              ><a href ="https://rini0404.github.io/ThatGoodDirt/" target = "_blank"> Live Link </a>
              </button>
            </div>
            </div>
            <h3 class="absolute -top-5 -left-5 w-32 p-2 bg-inherit border-slate-900 text-slate-900 border-2 rounded-3xl text-2xl font-merriweather text-center">
              Le Cook Book
            </h3>

            <div
              href="https://eazyip.github.io/"
              target="__blank"
              class="block w-full mx-auto p-2 md:mx-auto hover:rotate-2 transition ease-in-out delay-75 duration-150"
            >
              <img
                src={rookiesPic}
                alt="Eazy IP Web app showcase mockup"
                class="object-fill"
              />
            </div>

            <p class="absolute -bottom-12 left-6 w-[300px] p-4 bg-slate-800 text-slate-50 rounded-3xl hover:text-white">
              Polished Web App that does random searches, specific searches, and
              top picks! Made With MERN stack, JWTs, GraphQl, and more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
// Polished Web App that does random searches, specific searches, and
// top picks! Made With MERN stack, JWTs, GraphQl, and more!