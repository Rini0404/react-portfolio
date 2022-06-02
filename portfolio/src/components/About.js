import React, { useState } from "react";
import coolBg from '../imgs/coolBg.png'
import mePicture from '../imgs/me.svg.png'
import Typewriter from "typewriter-effect";



function IndexPage() {
    const [show, setShow] = useState(false);

    return (
        <>
      <div className="picDiv"> 
        <img id = "mePicture" src = {mePicture}></img>
        <img id = "coolPic" class="h-full" src={coolBg} alt="Device"></img>
      </div> 
            <div className="lg:px-6 xl:px-0">
                <div className="container mx-auto relative z-20">
                </div>
                <div className="mx-auto container relative z-0 px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
                            <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">Hello, I'm<br></br>Rene Ortega</h1><br></br>
                            <h1 className="dark:text-white text-4xl md:text-5xl xl:text-5xl font-semibold text-gray-900 w-7/12">
                            <Typewriter
      options={{
        strings: [
        "Web Developer",
          "Full-Stack Developer",
          "MERN Developer",
          "Eat",
          "Code",
          "Sleep",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
                            </h1>
                        </div>
                        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                            
                            {/* <img className="md:absolute md:w-1/2 md:-ml-28" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Device - Macbook Pro.png" alt /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
