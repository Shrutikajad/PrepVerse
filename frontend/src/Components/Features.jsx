import React from 'react'

const Features = () => {
    return (


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-white-900">Featured Projects</h2>
                <p className="mt-4 text-xl text-white-600" >Explore real-world projects and start building</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded" >Web Development</span>
                            <span className="text-gray-500" >Intermediate</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" >E-Commerce Platform</h3>
                        <p className="text-gray-600 mb-4" >Build a full-stack e-commerce platform with React and Node.js</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >React</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Node.js</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >MongoDB</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
                            View Project
                        </button>
                    </div>
                </div>


                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Web Development</span>
                            <span className="text-gray-500" >Intermediate</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Chat-App</h3>
                        <p className="text-gray-600 mb-4">Build a full-stack chat-app platform with React and Node.js</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >React</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Node.js</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >MongoDB</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
                            View Project
                        </button>
                    </div>
                </div>


                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded" >Web Development</span>
                            <span className="text-gray-500">Intermediate</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" >Blogging Platform</h3>
                        <p className="text-gray-600 mb-4" >Build a blogging site where users can create, edit, and delete posts, comment on posts, and follow their favorite bloggers.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >React</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Node.js</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >MongoDB</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Project
                        </button>
                    </div>
                </div>


                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded" >Web Development</span>
                            <span className="text-gray-500" >Intermediate</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" >Expense Tracker</h3>
                        <p className="text-gray-600 mb-4">Develop an application where users can track their expenses, categorize them, and view reports and statistics.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >React</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Node.js</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >MongoDB</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Project
                        </button>
                    </div>
                </div>


                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded" >Web Development</span>
                            <span className="text-gray-500" >Intermediate</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" >Recipe Finder</h3>
                        <p className="text-gray-600 mb-4" >Create an application where users can search for recipes based on ingredients they have. Include features like user ratings, comments, and recipe sharing.

</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">React</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Node.js</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">MongoDB</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Project
                        </button>
                    </div>
                </div>

                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded" >Mobile Development</span>
                            <span className="text-gray-500" >Advanced</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" >Social Media App</h3>
                        <p className="text-gray-600 mb-4" >Create a social networking app with Flutter and Firebase</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Flutter</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Firebase</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Dart</span>
                        </div>
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-300" >
                            View Project
                        </button>
                    </div>
                </div>


                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">AI/ ML</span>
                            <span className="text-gray-500" >Advanced</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" >Image Recognition API</h3>
                        <p className="text-gray-600 mb-4" >Build an image recognition API using Python and TensorFlow</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Python</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >TensorFlow</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Flask</span>
                        </div>
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition duration-300">
                            View Project
                        </button>
                    </div>
                </div>


                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded" >AI/ ML</span>
                            <span className="text-gray-500" >Advanced</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" >Chat-Bot</h3>
                        <p className="text-gray-600 mb-4" >Develop a chatbot that can answer questions, provide recommendations, or assist with customer service.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Python</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >TensorFlow</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Flask</span>
                        </div>
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition duration-300" >
                            View Project
                        </button>
                    </div>
                </div>

                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded" >AI/ ML</span>
                            <span className="text-gray-500" >Advanced</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Recommendation System</h3>
                        <p className="text-gray-600 mb-4" >Develop a system that can recommend products, movies, or music based on user preferences.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Python</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >TensorFlow</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Flask</span>
                        </div>
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition duration-300" >
                        </button>
                    </div>
                </div>
            

            

            </div>



            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition duration-300">
                    <div className="text-blue-600 font-semibold" _msttexthash="258297" _msthash="146">Web Development</div>
                    <div className="text-sm text-gray-600" _msttexthash="164008" _msthash="147">50+ Projects</div>
                </button>
                <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition duration-300">
                    <div className="text-green-600 font-semibold" _msttexthash="151996" _msthash="148">Mobile Apps</div>
                    <div className="text-sm text-gray-600" _msttexthash="163826" _msthash="149">30+ Projects</div>
                </button>
                <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition duration-300">
                    <div className="text-purple-600 font-semibold" _msttexthash="39884" _msthash="150">AI/ ML</div>
                    <div className="text-sm text-gray-600" _msttexthash="163735" _msthash="151">20+ Projects</div>
                </button>
                <button className="p-4 bg-red-50 hover:bg-red-100 rounded-lg transition duration-300">
                    <div className="text-red-600 font-semibold" _msttexthash="74724" _msthash="152">DevOps</div>
                    <div className="text-sm text-gray-600" _msttexthash="164164" _msthash="153">15+ Projects</div>
                </button>
            </div>

            <div className="mt-16 text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 animate__animated animate__pulse animate__infinite" _msttexthash="345059" _msthash="154">
                    Browse All Projects
                </button>
                <p className="mt-4 text-gray-600" _msttexthash="532454" _msthash="155">New projects added weekly</p>
            </div>
        </div>

    )
}

export default Features