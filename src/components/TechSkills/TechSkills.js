import React from "react";

import {
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,} from "react-icons/di";



import {
  SiPostman,
  SiVisualstudiocode,
  SiInsomnia,
  SiTailwindcss, 

} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap, FaNpm } from "react-icons/fa";

const skills = () => {
  return (
    <div class="flex justify-center p-8">
    <div class="flex px-10">
      <div class=" rounded-lg p-8 border-2 border-fuchsia-600 opacity-80	">
        <div class="mb-4">
          <h1 class="font-semibold text-gray-50">Professional Skills</h1>
        </div>
        <div class="grid grid-cols-2 gap-4 ">
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg  space-y-4">
            <DiJsBadge id ="icon" />
          </div>
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
            <IoLogoCss3 id = "icon" />
            
          </div>
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
            <DiReact id = "icon"/>

          </div>
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
          <DiNodejs id = "icon"/>

          </div>
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
          <DiHtml5 id = "icon"/>

          </div>
        
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
          <DiMongodb id = "icon"/>
          </div>
        </div>
      </div>
    </div>

    {/* tools */}
    <div class="flex  ">
      <div class="brounded-lg p-8 border-2 border-fuchsia-600">
        <div class="mb-4">
          <h1 class="font-semibold text-gray-50">Professional Tools</h1>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
          <SiPostman id = "icons"/>
          </div>
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
          <SiVisualstudiocode id = "icons"/>
            
          </div>
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
          <SiInsomnia id = "icons"/>

          </div>
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
          <SiTailwindcss id = "icons"/>

          </div>
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
          <FaBootstrap id = "icons"/>

          </div>
        
          <div class="flex items-center bg-black opacity-80 justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
          <FaNpm id = "icons"/>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default skills;
