import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

function Navbar(props) {

    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;
    const location = useLocation();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='flex justify-between items-center sm:w-11/12 sm:max-w-[1160px] w-full py-4 px-2 sm:px-0 mx-auto relative'>
        <Link to="/">
            <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
        </Link>

        {/* -------------- mobile view -------------- */}

        <FiMenu
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-3xl cursor-pointer sm:hidden text-richblack-25"
        />

        <div className={`fixed h-screen w-screen sm:hidden backdrop-blur-sm top-0 right-0 transition-all duration-700 z-50 ${isMobileMenuOpen ? "-translate-x-0" : "translate-x-full"}`}>

            <div className='text-black bg-white absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex flex-col'>

                <IoCloseOutline
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mt-0 mb-8 text-3xl cursor-pointer"
                />

                {/* navbar */}
                <nav className='flex flex-col items-center justify-center'>
                    <ul className='flex flex-col items-center justify-center text-richblack-100 text-lg space-y-4'>
                        <li className={`hover:text-black transition-all duration-200`}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='hover:text-black transition-all duration-200'>
                            <Link to="/about">About</Link>
                        </li>
                        <li className='hover:text-black transition-all duration-200'>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* login - signup - logout - dashboard buttons for desktop */}
                    <div className='flex flex-col space-y-4 mt-4 justify-center items-center'>
                        { !isLoggedIn && 
                            <Link to="/login">
                                <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200 
                                ${location.pathname === '/login' ? 'bg-richblack-800 text-white' :
                                'hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent'
                                }`}>
                                    Login
                                </button>
                            </Link>
                        }

                        { !isLoggedIn && 
                            <Link to="/signup">
                                <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200 
                                ${location.pathname === '/signup' ? 'bg-richblack-800 text-white' :
                                'hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent'
                                }`}>
                                    Sign Up
                                </button>
                            </Link>
                        }

                        { isLoggedIn && 
                            <Link to="/">
                                <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200
                                hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent}`} 
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    toast.success("Logged Out")
                                }}>
                                    Log Out
                                </button>
                            </Link>
                        }

                        { isLoggedIn && 
                            <Link to="/dashboard">
                                <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200 
                                ${location.pathname === '/dashboard' ? 'bg-richblack-800 text-white' :
                                'hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent'
                                }`}>
                                    Dashboard
                                </button>
                            </Link>
                        }
                    </div>
                </nav>
            </div>

        </div>

        {/* -------------- desktop view -------------- */}
        <nav className='hidden sm:block'>
            <ul className='flex gap-x-6 text-richblack-100 text-lg'>
                <li className='hover:text-white transition-all duration-200'>
                    <Link to="/">Home</Link>
                </li>
                <li className='hover:text-white transition-all duration-200'>
                    <Link to="/about">About</Link>
                </li>
                <li className='hover:text-white transition-all duration-200'>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* login - signup - logout - dashboard */}
        <div className='hidden sm:flex items-center gap-x-4'>
            { !isLoggedIn && 
                <Link to="/login">
                    <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200 
                    ${location.pathname === '/login' ? 'bg-richblack-800 text-white' :
                    'hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent'
                    }`}>
                        Login
                    </button>
                </Link>
            }

            { !isLoggedIn && 
                <Link to="/signup">
                    <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200 
                    ${location.pathname === '/signup' ? 'bg-richblack-800 text-white' :
                    'hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent'
                    }`}>
                        Sign Up
                    </button>
                </Link>
            }

            { isLoggedIn && 
                <Link to="/">
                    <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200
                    hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent}`} 
                    onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }}>
                        Log Out
                    </button>
                </Link>
            }

            { isLoggedIn && 
                <Link to="/dashboard">
                    <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200 
                    ${location.pathname === '/dashboard' ? 'bg-richblack-800 text-white' :
                    'hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent'
                    }`}>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar