import React from "react";
import Projectos from "../components/Projects/Projects";

function Projects() {
  return (
    <div className="bgForPjects">
      <section class="text-white ">
        <div class="max-w-screen-xl px-4 py-32 mx-auto lg:items-center lg:flex">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              These are some of my projects!
              <span class="sm:block">Increase Conversion.</span>
            </h1>

            <p class="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl ">
              If you want to see more of my work, please navigate to my github
              with the button below!
            </p>

            <div class="flex flex-wrap justify-center gap-4 mt-8">
              <a
                class="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                href="https://github.com/Rini0404"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </section>
      <Projectos />
    </div>
  );
}

export default Projects;
