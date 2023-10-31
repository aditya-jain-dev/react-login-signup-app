import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import toast from 'react-hot-toast';

function SignInForm({setIsLoggedIn}) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(events) {

        const {name, value} = events.target;

        setFormData(prevFormData => {
            return {
              ...prevFormData,
                [name]: value
            }
        })
    }

    function submitHandler(events) {
        events.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard')

        // console.log('print login data');
        // console.log(formData);
    }

  return (
    <form action="#" onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <div className='w-full'>
            <label htmlFor="email">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address
                    <sup className='text-pink-200'>*</sup>
                </p>
            </label>
            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-200 placeholder:text-sm' required type="email" name='email' id='email' onChange={changeHandler} value={formData.email} placeholder='Enter Email Address' />
        </div>

        <div className='w-full relative'>
            <label htmlFor="password">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password
                    <sup className='text-pink-200'>*</sup>
                </p>
            </label>

            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-200 placeholder:text-sm' required type={showPassword ? ('text') : ('password')} name='password' id='password' onChange={changeHandler} value={formData.password} placeholder='Enter Password Here' />

            <span className='right-3 absolute top-[2.4rem] cursor-pointer' onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-blue-100 text-xs mt-1 max-w-max ml-auto'>Forgot Password?</p>
            </Link>
        </div>

        <button className='text-richblack-900 w-full bg-yellow-50 rounded-md font-medium px-4 py-2 my-4 hover:bg-yellow-400 hover:font-bold transition-all duration-200'>Sign In</button>
    </form>   
  )
}

export default SignInForm