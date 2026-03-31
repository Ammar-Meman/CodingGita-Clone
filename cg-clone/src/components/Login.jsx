import React from 'react'
import { useState } from 'react'

function Login() {
  const [role,setRole] = useState('student')
  return (
    <div>
      <div className='bg-black text-white min-h-screen p-4 flex justify-center items-center'>
        <div className='w-full max-w-md rounded-2xl border border-white/10 '>

          {/* Heading Centered  */}
          <div className='text-center p-6'>
            <h1 className='text-3xl font-semibold'>Welcome Back</h1>
            <p className='text-sm text-gray-400'>Sign in to your accout</p>
          </div>

          {/* Form (left aligned properly) */}
          <div className='px-6 pb-6'>
            <form className=''>
              <div className='text-left'>
                <label className='text-sm font-medium  text-gray-200'>Role</label>
                <div className='flex gap-2'>
                  {['student','mentor','admin'].map((item)=>(
                    <button
                    type='submit'
                    key={item}
                    onClick={()=>setRole(item)}
                    className={`px-3 py-2 rounded-md text-sm transition
                      ${role === item
                        ? 'bg-white text-black'
                        : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      {console.log(item)} 
                    </button>
                  ))

                  }
                </div>
                <div className='py-2.5 mt-2'>
                  <div className='mt-1'>
                    <label for='UniversityUID' className='text-sm text-gray-200 font-medium'>
                      {role === `student` ? 'University ID' : 'Email'}
                    </label>
                    <input type='text' className='flex h-10 w-full border rounded-md border-white/10 bg-black/60 text-sm px-3 py-2 text-white placeholder:text-gray-400 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-white/30' placeholder={
                      role == 'student'
                        ? 'Enter Your University ID'
                        : 'Enter Your Email'
                    } vlaue name='UniversityUID' required />
                  </div>
                  <div className='mt-3'>
                    <label for="password" className='text-sm text-gray-200 font-medium'>Password</label>
                    <input type="text" className='flex h-10 w-full rounded-md border-white/10 bg-black/60 text-sm border px-3 py-2 text-white placeholder:text-gray-400 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-white/30' placeholder='Enter Your Password' name='password' required />
                  </div>
                  <button className='mt-5 font-medium transition-colors border rounded-lg text-black font-semibold bg-white w-full px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap hover:bg-gray-200 h-10' type='submit'>
                    Sign in
                  </button>
                  <p className='text-xs text-center mt-4 text-gray-400'>Use your role-based credentials. Contact admin if you need help.</p>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login