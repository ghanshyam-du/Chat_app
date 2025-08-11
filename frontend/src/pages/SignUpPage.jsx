import React from 'react'
import { useState } from 'react'

const SignUpPage = () => {
  const [singupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const handleSignup = (e) =>{
    e.preventDefault()
  }

  return (
    <div className = "h-screen flex items-center justify-center p-4 sm:p-6 md:p-8" data-theme="forest">
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-xl overflow-hidden">
         {/* signup form - left side*/}

         <div  >

         </div>
      </div>
    </div>
  )
}

export default SignUpPage
