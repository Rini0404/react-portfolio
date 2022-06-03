import React from "react";
import rookiesPic from "../../imgs/p2.PNG";
import pcApp from "../../imgs/pcBuild.jpg";
import tgdPic from "../../imgs/sdsd.PNG";
import pwaPic from "../../imgs/textE.PNG";

// class="object-cover h-8"

function IndexPage() {
  return (
    <section class="bg-gray-800 pattern py-20 bgForPjects">
            <div class="max-w-5xl px-6 mx-auto text-center">
                <h2 class="text-2xl font-semibold text-white">My Projects</h2>
                <div class="flex items-center justify-center mt-10">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="max-w-xs w-full">
                            <div class="flex items-center justify-center  border-b-8 border-teal-400 rounded-md overflow-hidden min-h-full	border-2">
                                {/* <rookiesPic class="object-cover h-8"/> */}
                                <img  src = {pcApp}/>
                            </div>

                            <div class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="" target = "_blank">Github Repo </a></button>
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="" target = "_blank"> Live Link </a></button>
                                </div>
                            </div>
                        </div>

                        <div class="max-w-xs w-full">
                            <div class="flex items-center justify-center  min-h-full border-b-8 border-teal-400 rounded-md overflow-hidden border-2">
                                <img src = { tgdPic }/>
                            </div>

                            <div  class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="" target = "_blank">Github Repo </a></button>
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="" target = "_blank"> Live Link </a></button>

                                </div>
                            </div>
                        </div>
                        
                        <div class="max-w-xs w-full">
                            <div class="flex items-center justify-center  min-h-full border-b-8 border-teal-400 rounded-md overflow-hidden border-2">
                                <img class="bg-cover" src= {rookiesPic}/>
                            </div>

                            <div  class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="" target = "_blank">Github Repo </a></button>
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="https://github.com/" target = "_blank"> Live Link </a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <div class="flex items-center justify-center mt-12">
                    <a target = "_blank" class="flex items-center text-white hover:underline hover:text-gray-200" 
                    href="https://github.com/Rini0404">
                        <span>View More On Github</span>

                        <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
  );
}

export default IndexPage;
