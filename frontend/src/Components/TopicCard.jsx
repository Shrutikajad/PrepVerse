import React from 'react'

import {Link} from 'react-router-dom'

const TopicCard = () => {

    return (


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-white-900" > DSA Topics</h2>
                <p className="mt-4 text-xl text-white-600">Mastering Data Structures and Algorithms: From Basics to Advanced Techniques</p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded" 
                            >Basic Programming</span>
                            <span className="text-gray-500" >Basic</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Foundations of Programming: Building Blocks for Beginners</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >"hello world"</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Variables and Data Types</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >conditional Statements</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"  >Loops</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"  >Functions</span>
                        </div>
                       
                        <Link to='/basic'> <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button></Link>
                    </div>
                </div>



                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded" >Arrays</span>
                            <span className="text-gray-500" >Basic</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Introduction to Arrays</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Operations</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"  >Advanced Array Concepts</span>
                        </div>
                        <Link to='/array'> <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button></Link>
                    </div>
                </div>

                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded">Object-Orientend Programming</span>
                            {/* <span className="text-gray-500" >Basic</span> */}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Classes and Objects</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Encapsulation</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"  >Inheritance</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"  >Polymorphism</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Abstraction</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button>
                    </div>
                </div>

                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded">Time & Space Complexity</span>
                            {/* <span className="text-gray-500" >Basic</span> */}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >O(log n)</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >O(n)</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"  >O(n log n)</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"  >O(n^2)</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"  >O(2^n)</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button>
                    </div>
                </div>
                

                
                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded">Sorting Algorithm</span>
                            {/* <span className="text-gray-500" >Basic</span> */}
                            <span className="text-gray-500" >Intermediate</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Bubble Sort</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Selection Sort</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Insertion Sort</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Merge Sort</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Quick Sort</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button>
                    </div>
                </div>
                

                
                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded">Binary Search</span>
                            <span className="text-gray-500" >Intermediate</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Initial Setup</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Middle Element</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"  >Comparison</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"  >how does it woks</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button>
                    </div>
                </div>
               

                 
                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded">Linked List</span>
                            {/* <span className="text-gray-500" >Basic</span> */}
                            <span className="text-gray-500" >Intermediate</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Singly Linked List.</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Doubly Linked List.</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Circular Linked List.</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button>
                    </div>
                </div>


             
                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded">Queue</span>
                            {/* <span className="text-gray-500" >Basic</span> */}
                            <span className="text-gray-500" >Intermediate</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Basic Queue </span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Circular Queue</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Enqueue</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Dequeue</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button>
                    </div>
                </div>
                  
                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded">Stack</span>
                            {/* <span className="text-gray-500" >Basic</span> */}
                            <span className="text-gray-500" >Intermediate</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Push</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Pop</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Peek</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >IsEmpty</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Implementation of Stack by Linked List and Array</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button>
                    </div>
                </div>
                  
                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded">Binary Search Tree</span>
                            <span className="text-gray-500" >Advanced</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Push</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Pop</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Peek</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >IsEmpty</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Implementation of Stack by Linked List and Array</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button>
                    </div>
                </div>

                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded">Heap</span>
                            <span className="text-gray-500" >Advanced</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Push</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Pop</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Peek</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >IsEmpty</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Implementation of Stack by Linked List and Array</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button>
                    </div>
                </div>
                  
                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded">Graph</span>
                            <span className="text-gray-500" >Advanced</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Push</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Pop</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Peek</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >IsEmpty</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Implementation of Stack by Linked List and Array</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button>
                    </div>
                </div>

                <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xl font-medium px-2 py-2 rounded">Dynamic Programming</span>
                            <span className="text-gray-500" >Advanced</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" ></h3>
                        <p className="text-gray-600 mb-4">Master fundamental data structures and string manipulation techniques</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Push</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Pop</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Peek</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >IsEmpty</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded" >Implementation of Stack by Linked List and Array</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300" >
                            View Topic
                        </button>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default TopicCard