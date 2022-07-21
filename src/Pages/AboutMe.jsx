import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import mePic from "../imgs/unnamed.jpg";
import Intro from '../components/Intro/Intro';


export default function MyApp() {
  return (
    <>
    <div className="bgForPjects">
      <div className="flex items-center justify-between h-full w-full absolute z-0">
        <div className="w-1/3 h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={2}
        >
          <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
            Thanks For visiting!
          </h1>
          <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
            Thanks For Visiting!
          </h1>
          <div className="flex">
            <div className="mt-14 md:flex">
              <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                <img
                  src={mePic}
                  alt="image of profile"
                  className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                />
                <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                    alt="commas"
                  />
                </div>
              </div>
              <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                    About Me!
                  </h1>
                  <p className="text-base font-medium leading-6 mt-4 text-gray-600 bg-white p-40.">
                    Hello! My name is Rene Ortega Jr. As of today, I can proudly
                    say, "I found my passion"! Before even considering becoming
                    a Web Developer, I worked as a Construction Foreman/Quality
                    Control specialist. To be honest, I was unhappy. After three
                    hard years of my life, while I was a student studying
                    structural engineering, I stepped my foot down and
                    discontinued that journey. I was born in Orlando, FL. Where
                    I currently live. I want to move out of state and start a
                    new life elsewhere, preferably in Salt Lake City, Utah.
                    Mainly for the snow and cold temperatures and the tech
                    industry in Utah. As a big believer in Family being a part
                    of my life, I spend with my loved ones and my girlfriend
                    Natalie! My interests outside of work are my health passions
                    and taking care/growing my plants and succulents.
                  </p>
                  <br></br>
                </div>
                <div className="md:mt-0 mt-8">
                  <p className="text-base font-medium leading-4 text-gray-800">
                    -Rene Ortega
                  </p>
                  <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                    Jr. Web Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CarouselProvider>
      </div>
    </div>   
    <Intro />
  </>
    );
}
