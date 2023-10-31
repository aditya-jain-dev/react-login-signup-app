import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';

function Navbar(props) {

    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;
    const location = useLocation();


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <NavLink to="/">
            <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
        </NavLink>

        <nav>
            <ul className='flex gap-x-6 text-richblack-100 text-lg'>
                <li className='hover:text-white transition-all duration-200'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='hover:text-white transition-all duration-200'>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className='hover:text-white transition-all duration-200'>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>

        {/* login - signup - logout - dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn && 
                <NavLink to="/login">
                    <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200 
                    ${location.pathname === '/login' ? 'bg-richblack-800 text-white' :
                    'hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent'
                    }`}>
                        Login
                    </button>
                </NavLink>
            }

            { !isLoggedIn && 
                <NavLink to="/signup">
                    <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200 
                    ${location.pathname === '/signup' ? 'bg-richblack-800 text-white' :
                    'hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent'
                    }`}>
                        Sign Up
                    </button>
                </NavLink>
            }

            { isLoggedIn && 
                <NavLink to="/">
                    <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200
                    hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent}`} 
                    onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }}>
                        Log Out
                    </button>
                </NavLink>
            }

            { isLoggedIn && 
                <NavLink to="/dashboard">
                    <button className={`py-2 px-4 rounded-md border border-richblack-700 transition-all duration-200 
                    ${location.pathname === '/dashboard' ? 'bg-richblack-800 text-white' :
                    'hover:bg-richblack-800 text-richblack-100 hover:text-white bg-transparent'
                    }`}>
                        Dashboard
                    </button>
                </NavLink>
            }
        </div>
    </div>
  )
}

export default Navbar