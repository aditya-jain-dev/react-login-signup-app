import React from 'react'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import frameImage from '../assets/frame.png'
import { FcGoogle } from 'react-icons/fc'

function Template({title, desc1, desc2, image, formType, setIsLoggedIn}) {
  return (
    <div className='flex flex-col md:flex-row w-full md:w-11/12 md:max-w-[1160px] py-6 md:py-12 mt-2 md:mt-4 md:mx-auto gap-y-6 md:gap-y-0 gap-x-10 justify-between items-center px-4 md:px-0 mb-10 md:mb-8'>

        <div className='md:w-11/12 md:max-w-[450px] w-full'>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>

            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br />
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formType === 'signup' ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : (<SignInForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading-[1.375]'>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-md font-medium text-richblack-200 border border-richblack-700 px-5 py-2 gap-x-2 mt-6 hover:text-richblack-100 hover:border-richblack-500 transition-all duration-200'>
                <FcGoogle />
                <span>{formType === 'login' ? 'Sign in with google' : 'Sign up with google'}</span>
            </button>
        </div>

        <div className='relative md:w-[11/12] md:max-w-[450px] hidden md:block'>
            <img src={frameImage} alt="frameImage" width={558} height={504} loading='lazy' />
            <img className='absolute -top-4 right-4' src={image} alt="students" width={558} height={504} loading='lazy' />
        </div>
    </div>
  )
}

export default Template