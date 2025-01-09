import React from 'react'
import { Link } from 'react-router-dom'

const DevTopic = () => {
    return (
        <div id='root'>
            <section id="features" class='bg py-20'>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 class="text-4xl font-bold text-white-900" >Web Development</h2>
                        <p class="mt-4 text-xl text-gray-600" >Comprehensive resources for every stage of your development journey</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- DSA Track --> */}
                        <div class="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                            <div class="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>

                            </div>
                            <h3 class="text-blue-900 text-[30px] font-bold mb-4">History of Web</h3>
                            <p class="text-gray-600 text mb-4" ></p>
                            <ul class="space-y-2 mb-6 text-[20px]">
                                <li class="flex items-center text-gray-600">
                                    <font>
                                        1. How the Internet Works:
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        2. Client-Server Architecture:
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        3. Internet Protocols:
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        4. Understanding HTTP & HTTPS
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        5. Preparing Your Machine
                                    </font></li>
                            </ul>
                            <Link to='/'> <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                                View Topic
                            </button></Link>
                        </div>



                        <div class="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                            <div class="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>

                            </div>
                            <h3 class="text-blue-900 text-[30px] font-bold mb-4">Frontend Development</h3>
                            <p class="text-gray-600 text mb-4" ></p>
                            <ul class="space-y-2 mb-6 text-[20px]">
                                <li class="flex items-center text-gray-600">
                                    <font>
                                        1.Starting with HTML
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        2. Styling With CSS
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        3. Logic with Javascript
                                        (Basic to Advanced)
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        4. React (Basic to Advanced)
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                    </font></li>
                            </ul>
                            <Link to='/'> <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                                View Topic
                            </button></Link>
                        </div>


                        <div class="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                            <div class="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>

                            </div>
                            <h3 class="text-blue-900 text-[30px] font-bold mb-4">Backend Development</h3>
                            <p class="text-gray-600 text mb-4" ></p>
                            <ul class="space-y-2 mb-6 text-[20px]">
                                <li class="flex items-center text-gray-600">
                                    <font>
                                        1. Starting with Node.js
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        2. Creating Server
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        3. Web Framework - Express.js
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        4. Beginning of Database
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        5. API Development(REST)
                                    </font></li>
                            </ul>
                            <Link to='/'> <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                                View Topic
                            </button></Link>
                        </div>

                        <div class="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                            <div class="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>

                            </div>
                            <h3 class="text-blue-900 text-[30px] font-bold mb-4">DevOps</h3>
                            <p class="text-gray-600 text mb-4" ></p>
                            <ul class="space-y-2 mb-6 text-[20px]">
                                <li class="flex items-center text-gray-600">
                                    <font>
                                        1. CI (Continuous Integration) / CD (Continuous Deployment).                   </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        2. Microservices.
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        3. Containerization.
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        4.  Docker and Kubernetes.
                                    </font></li>
                                <li class="flex items-center text-gray-600">
                                    <font >
                                        5.  Deployment.
                                    </font></li>
                            </ul>
                            <Link to='/'> <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                                View Topic
                            </button></Link>
                        </div>







                    </div>
                </div>
            </section>
        </div>

    )
}

export default DevTopic