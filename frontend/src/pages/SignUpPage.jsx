import React from 'react'
import { useState } from 'react'
import { ShipWheelIcon } from "lucide-react";

const SignUpPage = () => {
  const [singupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const handleSignup = (e) => {
    e.preventDefault()
  }

  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8" data-theme="forest">
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-xl overflow-hidden">
        {/* signup form - left side*/}

        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO*/}
          <div className="mb-4 flex items-center justify-start gap-2">
            <ShipWheelIcon className="size-9 text-primary" />
            <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider'>
              Chit-Chat
            </span>


          </div>
          <div className='w-full'>
            <form onSubmit={handleSignup}>
              <div className='space-y-4'>
                <div>
                  <h2 className='text-xl font-semibold'>Create an Account</h2>
                  <p className='text-sm opacity-70'>
                    Join Chit-Chat and Connect with you Friends and Family!
                  </p>
                </div>


                <div className='space-y-3'>
                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Full Name</span>
                    </label>
                    <input type="text"
                    placeholder='John Doe'
                    className='input input-bordered w-full'
                    value={singupData.fullName}
                    onChange={(e) => setSignupData({...singupData, fullName: e.target.value})}
                    required
                    />

                  </div>
                </div>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUpPage
