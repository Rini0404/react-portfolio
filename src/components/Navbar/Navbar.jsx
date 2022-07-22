import React from "react";
import resume from "../../WebDev.pdf";
import { FaHome, FaNewspaper, FaUserCircle, FaChartLine } from 'react-icons/fa'
import { Link } from "react-router-dom";
import Projects from "../Projects/Projects";

const Index = () => {
   return(
    

            <div class="border-0 what px-7 shadow-lg opacity-80">
                <div class="flex">
                    <div class="flex-1 group text-white">
                    <Link to="/">
                        <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                            <span class="block px-1 pt-1 pb-2">
                                <FaHome class="far fa-compass text-2xl pt-1 mb-1 block"/>
                                <span class="block text-xs pb-1">Home</span>
                            </span>
                        </a>
                    </Link>
                    </div>
                    <div class="flex-1 group">
                        <a target = " _blank"href={resume}class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                            <span class="block px-1 pt-1 pb-2">
                                <FaNewspaper class="far fa-compass text-2xl pt-1 mb-1 block" />
                                <span class="block text-xs pb-1">Resume</span>
                            </span>
                        </a>
                    </div>

                    <div class="flex-1 group text-white">

                    <Link
                    as = {Link}
                    to= '/AboutMe'
                    >
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                            <span class="block px-1 pt-1 pb-2">
                                <FaUserCircle class="far fa-compass text-2xl pt-1 mb-1 block"/>
                                <span class="block text-xs pb-1">About Me</span>
                            </span>
                        </a>
                    
                    </Link>
                    </div>


                    <div class="flex-1 group">
                        <Link to="/Projects">
                        <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                            <span class="block px-1 pt-1 pb-2">
                                < FaChartLine class="far fa-cog text-2xl pt-1 mb-1 block"/>
                                <span class="block text-xs pb-1">Projects</span>
                            </span>
                        
                        </a>    
                        </Link>
                    </div>
                </div>
            </div>
        

      
    );
};
export default Index;
