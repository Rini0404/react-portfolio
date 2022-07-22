import React from 'react';
import Me1 from '../../imgs/me.svg.png';
import Badge from '../../imgs/University of Central Florida Continuing Education - UCF Coding Boot Camp (Full-Stack Web Development)[Full-Time] - 2022-06-10.png';
import Js from '../../imgs/icons8-javascript-64.png';
import Rjs from '../../imgs/icons8-react.gif';

function Me() {
    return (
        <section className="bgForPjects">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div className="backdrop-blur rounded-xl">
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Let me intorduce <span className="font-bold text-fuchsia-500">Myself</span></h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Rene Ortega, <span className="font-bold text-fuchsia-500">Full-Stack Developer</span></p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="backdrop-blur  p-8 rounded-xl">
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Passionate <span className="font-bold text-fuchsia-500">Developer</span> </h3>
                        <p className="mt-3 text-lg dark:text-gray-400">Throughout my one year of learning code, I am still <span className="font-bold text-blue-600">eager to learn more and more</span>. I take coding personally. <span className="font-bold text-blue-600">Coding has helped me finally find my passion in life</span>. I enjoy working on complex problems. Nothing is more greater than the adrenaline rush you get from solving an issue in programming. </p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <img
                                        src={Badge}
                                        className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    </img>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Educational <span className="font-bold text-fuchsia-500">Experience</span></h4>
                                    <p className="mt-2 dark:text-gray-400">I attended the <span className="font-bold text-blue-600">University of Central Florida</span>. I also attended their <span className="font-bold text-blue-600">Full-Stack Web Developement</span> Course and graduated. With experience in <span className="font-bold text-blue-600">working as a team on Github</span>. From managing pull requests to pushing requests.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <img
                                        src={Js}
                                        className="bg-white flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">

                                    </img>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50"> <span className="font-bold text-fuchsia-500">Fluency</span> in...</h4>
                                    <p className="mt-2 dark:text-gray-400"><span className="font-bold text-blue-600">JavaScript</span>, <span className="font-bold text-blue-600">HTML</span>, <span className="font-bold text-blue-600">CSS</span>!</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <img
                                        src={Rjs}
                                        className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">

                                    </img>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">What I <span className="font-bold text-fuchsia-500">Work</span> on...</h4>
                                    <p className="mt-2 dark:text-gray-400"> As of today, I love to work on modern <span className="font-bold text-blue-600">JavaScript Frameworks and Libraries</span>, such as <span className="font-bold text-blue-600">React.Js</span>!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src={Me1} alt="" className="mx-auto rounded-lg shadow-lg " />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </section>
    );
}
export default Me;