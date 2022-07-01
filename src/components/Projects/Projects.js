import React from "react";
import rookiesPic from "../../imgs/p2.PNG";
import pcApp from "../../imgs/pcBuild.jpg";
import tgdPic from "../../imgs/sdsd.PNG";

function IndexPage() {
  return (
    <section className=" pattern py-20 bgForPjects">
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl font-semibold text-white">My Projects</h2>
                <div className="flex items-center justify-center mt-10">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center  border-b-8 border-teal-400 rounded-md overflow-hidden min-h-full	border-2">
                                <img  src = {pcApp}/>
                            </div>

                            <div className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">A webb app using MERN to build your next Pc Rigg!</p>
                                    
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="https://github.com/Rini0404/pc-architect" target = "_blank">Github Repo </a></button>
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="" target = "_blank"> Live Link </a></button>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center  min-h-full border-b-8 border-teal-400 rounded-md overflow-hidden border-2">
                                <img src = { tgdPic }/>
                            </div>

                            <div  className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">
Expected behavior Users should be able input there location to find a desired route. Users should be able to select specific characteristics they would like the trail to accommodate With simple and easy instructions we made it possible for anyone to enjoy mother nature. Creating an interacive experice making it fun from start to finish.</p>
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="https://github.com/Rini0404/ThatGoodDirt" target = "_blank">Github Repo </a></button>
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="https://rini0404.github.io/ThatGoodDirt/" target = "_blank"> Live Link </a></button>

                                </div>
                            </div>
                        </div>
                        
                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center  min-h-full border-b-8 border-teal-400 rounded-md overflow-hidden border-2">
                                <img className="bg-cover" src= {rookiesPic}/>
                            </div>

                            <div  className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm "><br/>
                                    <p className="text-gray-300">An application that allows the user to access statistics on every active MLB player from every team and add them to their roster The user has the ability to create multiple rosters for different fantasy leagues This ensures the user can be ready to choose responsibly on draft day even if they’ve had a few too many drafts of their own.</p>
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="https://github.com/Rini0404/rookies" target = "_blank">Github Repo </a></button>
                                    <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs"><a href ="https://dry-brushlands-86766.herokuapp.com/" target = "_blank"> Live Link </a></button>
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <div className="flex items-center justify-center mt-12">
                    <a target = "_blank" className="flex items-center text-white hover:underline hover:text-gray-200" 
                    href="https://github.com/Rini0404">
                        <span>View More On Github</span>

                        <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
  );
}

export default IndexPage;
