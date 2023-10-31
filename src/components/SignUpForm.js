import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import toast from'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignUpForm({setIsLoggedIn}) {

    // account type is missing
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType, setAccountType] = useState('student');

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
        if (formData.password !== formData.confirmPassword) {
            toast.error('Password do not match');
            return;
        }
        setIsLoggedIn(true);
        toast.success('Accound Created')
        // console.log(formData)
        navigate('/dashboard');

        // accumulate account type with form data
        // eslint-disable-next-line
        const finalData = {
            ...formData,
            accountType
        }
        
        // console.log('signup form final data')
        // console.log(finalData);
    }

    const handleButtonClick = (buttonType) => {
        setAccountType(buttonType);
      };

  return (
    <div>
        {/* student - instructor tab */}
        <div className='flex bg-richblack-800 rounded-full max-w-max border-b border-richblack-200 p-1 my-6 gap-x-1'>
            <button className={`flex justify-center items-center py-2 px-5 rounded-full transition-all duration-200 ${accountType === 'student' ? 'bg-richblack-900 text-richblack-5' : 'bg-transparent text-richblack-200'}`} onClick={() => handleButtonClick('student')}>Student</button>
            <button className={`flex justify-center items-center py-2 px-5 rounded-full transition-all duration-200 ${accountType === 'instructor' ? 'bg-richblack-900 text-richblack-5' : 'bg-transparent text-richblack-200'}`} onClick={() => handleButtonClick('instructor')}>Instructor</button>
        </div>

        <form action="#" onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-4'>
            {/* first and last name */}
            <div className='flex w-full gap-x-4'>
                <div className='w-full'>
                <label htmlFor="firstName">
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name
                        <sup className='text-pink-200'>*</sup>
                    </p>
                </label>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-200 placeholder:text-sm' required type="text" name="firstName" id="firstName" onChange={changeHandler} value={formData.firstName} placeholder='Enter First Name'/>
                </div>

                <div className='w-full'>  
                    <label htmlFor="lastName">
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name
                            <sup className='text-pink-200'>*</sup>
                        </p>
                    </label>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-200 placeholder:text-sm' required type="text" name="lastName" id="lastName" onChange={changeHandler} value={formData.lastName} placeholder='Enter Last Name'/>
                </div>
            </div>
            
            {/* email */}
            <div className='w-full'>
                <label htmlFor="email">
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address
                        <sup className='text-pink-200'>*</sup>
                    </p>
                </label>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-200 placeholder:text-sm' required type="email" name="email" id="email" onChange={changeHandler} value={formData.email} placeholder='Enter Email Address'/>
            </div>

            {/* password and confirm password */}
            <div className='flex w-full gap-x-4'>
                <div className='w-full relative'>
                    <label htmlFor="password">
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Create Password<sup className='text-pink-200'>*</sup>
                        </p>
                    </label>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-200 placeholder:text-sm' required type={showPassword ? ('text') : ('password')} name="password" id="password" onChange={changeHandler} value={formData.password} placeholder='Enter Password'/>

                    <span className='right-3 absolute top-[2.5rem] cursor-pointer' onClick={() => setShowPassword(prev => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>)}
                    </span>
                </div>

                <div className='w-full relative'>
                    <label htmlFor="confirmPassword">
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm Password<sup className='text-pink-200'>*</sup>
                        </p>
                    </label>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-200 placeholder:text-sm' required type={showConfirmPassword ? ('text') : ('password')} name="confirmPassword" id="confirmPassword" onChange={changeHandler} value={formData.confirmPassword} placeholder='Confirm Password'/>

                    <span className='right-3 absolute top-[2.5rem] cursor-pointer' onClick={() => setShowConfirmPassword(prev => !prev)}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>)}
                    </span>
                </div>
            </div>

            <button className='text-richblack-900 w-full bg-yellow-50 rounded-md font-medium px-4 py-2 my-4 hover:bg-yellow-400 hover:font-bold transition-all duration-200'>Create Account</button>
            
        </form>
    </div>
  )
}

export default SignUpForm