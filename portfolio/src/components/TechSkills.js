import React from "react";
import reactLogo from '../imgs/1174949_js_react js_logo_react_react native_icon.png'
import jsLogo from '../imgs/javascript (1).png'
import cssLogo from '../imgs/css (1).png'
import htmlLogo from '../imgs/html.png'
import nodeLogo from '../imgs/nodejs.png'
import mysqlLogo from '../imgs/mysql.png'


const skills = () => {
    return (
        <div class="flex items-center justify-center h-screen ">
        <div class="bg-gray-800 rounded-lg shadow-xl p-8">
          <div class="mb-4">
            <h1 class="font-semibold text-gray-50">Mutual Followers</h1>
          </div>
          <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
              <img src = {reactLogo} alt="user image" />
             <h1 class="text-gray-50 font-semibold">Vivian Davie</h1>
             <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
          </div>
          <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
              <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/men/81.jpg" alt="user image" />
             <h1 class="text-gray-50 font-semibold">Derry Harris</h1>
             <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
          </div>
           <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
              <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user image" />
             <h1 class="text-gray-50 font-semibold">Aliesha Hanson</h1>
             <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">Follow</button>
          </div>
          <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
              <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/13.jpg" alt="user image" />
             <h1 class="text-gray-50 font-semibold">Cristina Frederick</h1>
             <button class="px-6 py-1 border-2 border-indigo-600 rounded-full text-gray-50 font-semibold">Following</button>
          </div>
          </div>
        </div>
      </div>
    );
};

export default skills;