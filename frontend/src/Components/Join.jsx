import React from 'react'

const Join = () => {
  return (
    
    <div id="root">
    <section id="community" className="bg-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-white">Join Our Developer Community</h2>
                <p className="mt-4 text-xl text-gray-400">Connect, collaborate, and grow with fellow developers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               
                <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:border-blue-500 transition-all duration-300 animate__animated animate__fadeInUp">
                    <div className="flex items-center mb-4">
                        <div className="bg-blue-500 rounded-lg p-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white ml-4">Discussion Forums</h3>
                    </div>
                    <p className="text-gray-400 mb-4">Engage in technical discussions, share knowledge, and solve problems together</p>
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>Active Users: 10+</span>
                        <span>Daily Topics: 50+</span>
                    </div>
                </div>

                
                <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:border-green-500 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="flex items-center mb-4">
                        <div className="bg-green-500 rounded-lg p-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white ml-4">Code Reviews</h3>
                    </div>
                    <p className="text-gray-400 mb-4">Get feedback on your code from experienced developers</p>
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>Reviews Done: 5+</span>
                        <span>Expert Reviewers: 1+</span>
                    </div>
                </div>

               
                <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:border-purple-500 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="flex items-center mb-4">
                        <div className="bg-purple-500 rounded-lg p-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white ml-4">Live Events</h3>
                    </div>
                    <p className="text-gray-400 mb-4">Join live coding sessions, workshops, and tech talks</p>
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>Monthly Events: 20+</span>
                        <span>Past Recordings: 200+</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center animate__animated animate__fadeIn">
                    <div className="text-4xl font-bold text-blue-500 mb-2">50K+</div>
                    <div className="text-gray-400">Community Members</div>
                </div>
                <div className="text-center animate__animated animate__fadeIn animate__delay-1s">
                    <div className="text-4xl font-bold text-green-500 mb-2">1000+</div>
                    <div className="text-gray-400">Daily Active Users</div>
                </div>
                <div className="text-center animate__animated animate__fadeIn animate__delay-2s">
                    <div className="text-4xl font-bold text-purple-500 mb-2">500+</div>
                    <div className="text-gray-400">Expert Mentors</div>
                </div>
                <div className="text-center animate__animated animate__fadeIn animate__delay-3s">
                    <div className="text-4xl font-bold text-red-500 mb-2">100+</div>
                    <div className="text-gray-400">Countries</div>
                </div>
            </div>

            <div className="text-center animate__animated animate__fadeIn">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 animate__animated animate__pulse animate__infinite">
                    Join Our Community
                </button>
                <p className="mt-4 text-gray-400">Already a member? Sign in to participate</p>
            </div>
        </div>
    </section>
</div>
  )
}

export default Join