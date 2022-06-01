import React from "react";
import rookiesPic from "../imgs/p2.PNG";

function IndexPage() {
  return (
    <>
      <div id="blog" className=" px-4 xl:px-0 py-12">
        <div className="mx-auto container">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">
            Projects
          </h1>
          <div className="mt-12 lg:mt-24">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <div>
                <img
                  className="w-full rounded"
                  src={rookiesPic}
                  alt="computer"
                />
                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                  <h1 className="text-4xl text-gray-900 font-semibold tracking-wider">
                    Rookies
                  </h1>
                  <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                    An application that allows the user to access statistics on
                    every active MLB player from every team and add them to
                    their roster The user has the ability to create multiple
                    rosters for different fantasy leagues This ensures the user
                    can be ready to choose responsibly on draft day even if
                    they’ve had a few too many drafts of their own.
                  </p>
                  {/* <div class="btn-group flex justify-center">
          <button class="btn btn-active"><a href = "https://dry-brushlands-86766.herokuapp.com/">Live Link</a></button>
          <button class="btn"><a href = "https://github.com/Rini0404/rookies">GitHub Repo</a></button>
        </div> */}
        <div className="flex py-2">
          <div className="px-4">
                  <button
                    type="button"
                    class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                  >
                    <a href="https://github.com/Rini0404/rookies">
                      GitHub Repo
                    </a>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                  >
                    <a href = "https://dry-brushlands-86766.herokuapp.com/">Live Link</a>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
              </div>
            </div>



                  <div className="h-5 w-2" />
                </div>
              </div>
              <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  <div>
                    <img
                      className="w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                      alt="games"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                        Transactions
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Find the latest events updates or create events,
                        concerts, conferences, workshops...
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png"
                      alt="notes"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                        Transactions
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Find the latest events updates or create events,
                        concerts, conferences, workshops...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  <div>
                    <img
                      className="w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png"
                      alt="laptop"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                        Transactions
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Find the latest events updates or create events,
                        concerts, conferences, workshops...
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png"
                      alt="worker"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                        Transactions
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Find the latest events updates or create events,
                        concerts, conferences, workshops...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
