import React from 'react'
import signUpImg from '../assets/signup.png'
import Template from '../components/Template'

function Signup({setIsLoggedIn}) {
  return (
    <Template 
        title="Join the millions learning to code with Studynotion for free"
        desc1="Build skills for today, tomorrow, and beyond"
        desc2="Education to future-proof your career"
        image={signUpImg}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup