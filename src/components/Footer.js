import React from 'react'
import { FaLinkedin, FaGithub } from'react-icons/fa';
import { BsGlobe } from'react-icons/bs';
import { Link } from'react-router-dom'  

function Footer() {
  return (
    <footer className='py-2 bg-richblack-700 flex flex-row justify-between items-center px-4 absolute bottom-0 right-0 left-0'>
        <p className='text-richblack-5 text-xs sm:text-sm'>Made by Aditya Jain</p>

        <div className='flex text-richblack-5 gap-x-2'>
          <Link to pathname="https://adityaportfolio.live/" target="_blank">
            <BsGlobe />
          </Link>
          <Link to pathname="https://www.linkedin.com/in/aditya-jain-6497a0240/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link to pathname="https://github.com/aditya-jain-dev" target="_blank">
            <FaGithub />
          </Link>
        </div>
    </footer>
  )
}

export default Footer