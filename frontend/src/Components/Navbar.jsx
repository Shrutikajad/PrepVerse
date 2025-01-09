import React from 'react'
import { BookOpenCheck } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className="navbar flex items-center justify-between h-[100px] px-[100px] bg- shadow-lg overflow-hidden md:px-[50px] sm:px-[20px] xs:px-[10px]">
                {/* Logo Section */}
                <div className="logo">
                    <div className="flex items-center justify-start space-x-2">
                        <BookOpenCheck className="h-8 w-8 text-800" />
                        <span className="text-xl font-bold text-white">PrepVerse</span>
                    </div>
                </div>

                <div className="links flex items-center gap-[30px] ml-[50px] md:ml-[20px] sm:ml-[10px] xs:ml-[5px]">
                    <Link to="/" className="navLink text-lg font-medium text-white hover:text-indigo-400 transition-all">
                        Home
                    </Link>
                    <Link to="/dsa" className="navLink text-lg font-medium text-white hover:text-indigo-400 transition-all">
                        DSA
                    </Link>
                    <Link to="/dev" className="navLink text-lg font-medium text-white hover:text-indigo-400 transition-all">
                        Development
                    </Link>
                    <Link to="/projects" className="navLink text-lg font-medium text-white hover:text-indigo-400 transition-all">
                        Projects
                    </Link>
                    <Link to="/resources" className="navLink text-lg font-medium text-white hover:text-indigo-400 transition-all">
                        Resources
                    </Link>


                    {/* Logout Button */}
                    <button
                        onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("isLoggedIn");
                            window.location.href = "/login";
                        }}
                        className="btnNormal bg-red-500 text-white text-lg font-medium px-6 py-2 rounded-lg transition-all hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;