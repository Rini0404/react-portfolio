import React from "react";
import jsLogo from '../imgs/javascript-39395.png'
import cssLogo from '../imgs/480px-CSS3_logo.svg.png'
import htmlLogo from '../imgs/html.png'
import nodeLogo from '../imgs/icons8-node-js-144.png'
import reactLogo from '../imgs/physics.png'


const skills = () => {
  return (
    <div class="flex justify-center p-8">
    <div class="flex px-10">
      <div class="bg-white rounded-lg p-8 border-2 border-fuchsia-600 opacity-80	">
        <div class="mb-4">
          <h1 class="font-semibold text-gray-50">Mutual Followers</h1>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
            <img class = "h-24" src={cssLogo} alt="user image" />
          </div>
          <div class="flex items-center justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
            <img
              class="h-24 rounded-full border-gray-10"
              src={jsLogo}
              alt="user image"
            />
            
          </div>
          <div class="flex items-center justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
            <img
              class=" border-gray-100 shadow-sm  h-24"
              src={htmlLogo}
              alt="user image"
            />

          </div>
          <div class="flex items-center justify-center flex-col border-2 p-4 rounded-lg w-48 space-y-4">
            <img
              class="rounded-full  shadow-sm w-24 h-24"
              src={reactLogo}
              alt="user image"
            />

          </div>
          <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
            <img
              class="rounded-full border-gray-100 shadow-sm w-24 h-24"
              src={nodeLogo}
              alt="user image"
            />

          </div>
        
          <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
            <img
              class="rounded-full border-gray-100 shadow-sm w-24 h-24"
              src="https://randomuser.me/api/portraits/women/13.jpg"
              alt="user image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex  ">
      <div class="bg-white rounded-lg p-8 border-2 border-fuchsia-600 opacity-80	">
        <div class="mb-4">
          <h1 class="font-semibold text-gray-50">Mutual Followers</h1>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
            <img src='' alt="user image" />
          </div>
          <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
            <img
              class="rounded-full border-gray-100 shadow-sm w-24 h-24"
              src="https://randomuser.me/api/portraits/men/81.jpg"
              alt="user image"
            />
            
          </div>
          <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
            <img
              class="rounded-full border-gray-100 shadow-sm w-24 h-24"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="user image"
            />

          </div>
          <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
            <img
              class="rounded-full border-gray-100 shadow-sm w-24 h-24"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="user image"
            />

          </div>
          <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
            <img
              class="rounded-full border-gray-100 shadow-sm w-24 h-24"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="user image"
            />

          </div>
        
          <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
            <img
              class="rounded-full border-gray-100 shadow-sm w-24 h-24"
              src="https://randomuser.me/api/portraits/women/13.jpg"
              alt="user image"
            />
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default skills;
