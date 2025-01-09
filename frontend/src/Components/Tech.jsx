import React from 'react'
import {Link} from 'react-router-dom'

const Tech = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-white" _msttexthash="639834" _msthash="156">Stay Updated with Tech Trends</h2>
                <p className="mt-4 text-xl text-gray-400" _msttexthash="1662869" _msthash="157">Keep pace with the rapidly evolving tech landscape</p>
            </div>

            <div className="mb-16 overflow-hidden">
                <div className="flex flex-nowrap gap-6 tech-slider animate__animated animate__fadeInRight">
                    {/* <!-- Tech Update Card 1 --> */}
                    <div className="min-w-[300px] bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded" _msttexthash="205387" _msthash="158">New Framework</span>
                        <h3 className="text-xl font-bold text-white mt-4" _msttexthash="313326" _msthash="159">Next.js 15 Released</h3>
                        <p className="text-gray-400 mt-2" _msttexthash="2085525" _msthash="160">Explore the latest features and improvements in Next.js 14</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-gray-500" _msttexthash="134589" _msthash="161">2 hours ago</span>
                            <Link to="https://nextjs.org/"><button className="text-blue-400 hover:text-blue-300" _msttexthash="1784120" _msthash="162">Read More →</button></Link>
                            
                        </div>
                    </div>

                    <div className="min-w-[300px] bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded" _msttexthash="39884" _msthash="163">AI/ ML</span>
                        <h3 className="text-xl font-bold text-white mt-4" _msttexthash="409344" _msthash="164">TensorFlow 2.0 Updates</h3>
                        <p className="text-gray-400 mt-2" _msttexthash="1875939" _msthash="165">New machine learning models and improved performance</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-gray-500" _msttexthash="90636" _msthash="166">1 day ago</span>
                            <Link to="https://www.tensorflow.org/"> <button className="text-blue-400 hover:text-blue-300" _msttexthash="1784120" _msthash="167">Read More →</button></Link>
                        </div>
                    </div>

                
                    <div className="min-w-[300px] bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                        <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded" _msttexthash="59826" _msthash="168">Cloud</span>
                        <h3 className="text-xl font-bold text-white mt-4" _msttexthash="248222" _msthash="169">AWS New Services</h3>
                        <p className="text-gray-400 mt-2" _msttexthash="1417702" _msthash="170">Latest cloud computing services and features</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-gray-500" _msttexthash="111215" _msthash="171">2 days ago</span>
                        <Link to="https://aws.amazon.com/free/?trk=16847e0c-46fb-467d-91ee-6e259e339665&sc_channel=ps&s_kwcid=AL!4422!10!72086958325164!72087482393523&ef_id=adbe1e5b6cab12100cc0792624cf0bf5:G:s&msclkid=adbe1e5b6cab12100cc0792624cf0bf5&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"><button className="text-blue-400 hover:text-blue-300" _msttexthash="1784120" _msthash="172">Read More →</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-neutral-800 p-6 rounded-xl animate__animated animate__fadeInUp">
                    <h3 className="text-xl font-bold text-white mb-4" _msttexthash="418132" _msthash="173">Frontend Development</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg><font _mstmutation="1" _msttexthash="237419" _msthash="174">
                            React 18 Updates
                        </font></li>
                        <li className="flex items-center text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg><font _mstmutation="1" _msttexthash="397657" _msthash="175"> View 3 API Composition </font></li>
                        <li className="flex items-center text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg><font _mstmutation="1" _msttexthash="198692" _msthash="176">
                            Tailwind CSS 3.0
                        </font></li>
                    </ul>
                </div>

                <div className="bg-neutral-800 p-6 rounded-xl animate__animated animate__fadeInUp animate__delay-1s">
                    <h3 className="text-xl font-bold text-white mb-4" _msttexthash="378560" _msthash="177">Backend Development</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg><font _mstmutation="1" _msttexthash="317525" _msthash="178">
                            Node.js 20 Features
                        </font></li>
                        <li className="flex items-center text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg><font _mstmutation="1" _msttexthash="394563" _msthash="179">
                            Django REST Framework
                        </font></li>
                        <li className="flex items-center text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg><font _mstmutation="1" _msttexthash="361140" _msthash="180">
                            FastAPI Performance
                        </font></li>
                    </ul>
                </div>

                <div className="bg-neutral-800 p-6 rounded-xl animate__animated animate__fadeInUp animate__delay-2s">
                    <h3 className="text-xl font-bold text-white mb-4" _msttexthash="186745" _msthash="181">DevOps &amp; Cloud</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg><font _mstmutation="1" _msttexthash="348699" _msthash="182">
                            Kubernetes Updates
                        </font></li>
                        <li className="flex items-center text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg><font _mstmutation="1" _msttexthash="405782" _msthash="183">
                            Docker Best Practices
                        </font></li>
                        <li className="flex items-center text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg><font _mstmutation="1" _msttexthash="369057" _msthash="184">
                            AWS Lambda Functions
                        </font></li>
                    </ul>
                </div>
            </div>

            <div className="text-center animate__animated animate__fadeIn">
                <h3 className="text-2xl font-bold text-white mb-4" _msttexthash="231075" _msthash="185">Stay in the Loop</h3>
                <p className="text-gray-400 mb-6" _msttexthash="2139566" _msthash="186">Get weekly updates on the latest tech trends and tutorials</p>
                <form className="max-w-md mx-auto">
                    <div className="flex gap-4">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-blue-500" _mstplaceholder="263692" _msthash="187"/>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300" _msttexthash="133354" _msthash="188">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Tech