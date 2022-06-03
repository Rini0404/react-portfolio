import React from "react";
import resume from "../../WebDev.pdf";
import {DiReact} from 'react-icons/di';
import { Link } from 'react-router-dom'
import { FaHome, FaNewspaper, FaUserCircle, FaChartLine } from 'react-icons/fa'

const Index = () => {
   return(
    

        <div class="px-7 bg-white shadow-lg rounded-2xl mb-5">
          <img></img>
            <div class="flex">
                <div class="flex-1 group">
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                        <span class="block px-1 pt-1 pb-2">
                            <FaHome class="far fa-compass text-2xl pt-1 mb-1 block"/>
                            <span class="block text-xs pb-1">Home</span>
                        </span>
                    </a>
                </div>
                <div class="flex-1 group">
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                        <span class="block px-1 pt-1 pb-2">
                            <FaNewspaper class="far fa-compass text-2xl pt-1 mb-1 block" />
                            <span class="block text-xs pb-1">Resume</span>
                        </span>
                    </a>
                </div>
                <div class="flex-1 group">
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                        <span class="block px-1 pt-1 pb-2">
                        < FaUserCircle class="far  text-2xl pt-1 mb-1 block"/>
                            <span class="block text-xs pb-1">About Me</span>
                        </span>
                    </a>
                </div>
                <div class="flex-1 group">
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                        <span class="block px-1 pt-1 pb-2">
                            < FaChartLine class="far fa-cog text-2xl pt-1 mb-1 block"/>
                            <span class="block text-xs pb-1">Projects</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>

      
    );
};
export default Index;
