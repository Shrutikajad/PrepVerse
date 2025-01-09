import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {

    const handleClick=()=>{
        console.log("Button clicked");
    }



    return (

        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate__animated animate__fadeInLeft">
                        <h1 className="text-5xl font-bold leading-tight">
                            Level Up Your <span className="text-blue-500">Development Journey</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Your one-stop destination for DSA, projects, and cutting-edge tech resources. Learn, build, and grow with our comprehensive development platform.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {/* <button onClick={handleClick} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 animate__animated animate__pulse animate__infinite">
                                Get Started
                            </button> */}
                            {/* <button className="border border-blue-500 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                                Browse Resources
                            </button> */}

                            <Link to="/dsa"><button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 animate__animated animate__pulse animate__infinite">Get Started</button></Link>
                        </div>
                    </div>

                    <div className="relative animate__animated animate__fadeInRight">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className="relative bg-neutral-800 p-8 rounded-lg">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-neutral-700 p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-blue-500 mb-2">500+</div>
                                    <div className="text-sm text-gray-300">DSA Problems</div>
                                </div>
                                <div className="bg-neutral-700 p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-purple-500 mb-2">200+</div>
                                    <div className="text-sm text-gray-300">Projects</div>
                                </div>
                                <div className="bg-neutral-700 p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
                                    <div className="text-sm text-gray-300">Technologies</div>
                                </div>
                                <div className="bg-neutral-700 p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-yellow-500 mb-2">1+</div>
                                    <div className="text-sm text-gray-300">Active Users</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* /* <div className="mt-16 flex justify-center animate__animated animate__fadeInUp">
                    <div className="flex gap-8 text-gray-400">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Daily Updates</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Expert Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Community Driven</span>
                        </div>
                    </div>
                </div>*/ }
            </div> 
        </>

    )
}

export default Hero