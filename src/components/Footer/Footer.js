import React from "react";
import resUme from '../../WebDev.pdf';
import {FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer4 = () => {
    return (
        <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 px-4 py-12 bg-black-300 ">
            <div className="flex flex-col items-center justify-center">
                <div>
                  <h1 className = "text-2xl font-semibold xl:leading-loose text-white">Rene Ortega</h1>
                </div>
                <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white">Home</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white">
                        <a target="_blank" href={ resUme } ></a>Resume</p>
                    
                </div>
                <div className="flex items-center gap-x-8 mt-6">
                    <div className="cursor-pointer">
                    <a target="_blank" href = "https://github.com/Rini0404">
                    <FaGithub class = " footer-icons "/>
                    </a>
                    </div>

                    <div className="cursor-pointer">
                        <a target="_blank" href = "https://www.linkedin.com/in/rene-ortega-a29564196/">
                        <FaLinkedin class = "footer-icons"/>
                        </a>
                    </div>
                    
                    <div className="cursor-pointer">
                        <a target="_blank" href = "https://twitter.com/ReneOrt81345106">
                    <FaTwitter class = "footer-icons"/>
                    </a>
                    </div>
                </div>
                <div className="flex items-center mt-6">
                    <p className="text-base leading-4 text-white">
                        2021 <span className="font-semibold">Rene Ortega</span>
                    </p>
                    <div className="border-l border-gray-800 pl-2 ml-2">
                        <p className="text-base leading-4 text-white">Inc. All righys reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer4;
