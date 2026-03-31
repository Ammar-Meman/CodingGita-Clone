import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({text, button}) => {
  const navigate = useNavigate()
  return (
    <div className='bg-black text-white min-h-screen p-4 flex justify-center items-center'>
      <section className='max-w-4xl text-center'>
          <h1 className='text-6xl font-bold'>
            <span className='block'>Coding</span>
            <span className='block text-gray-300'>Gita</span>
          </h1>
          <p className='mt-5'>{text}</p>
          <div className='mt-10'>
            <button className='inline-flex rounded-lg px-5 py-3 text-sm font-semibold bg-white text-black transition-colors hover:bg-neutral-200' onClick={()=> navigate("/Login")}>{button}</button>
          </div>
        <div className='mt-14 grid sm:grid-cols-2 gap-6'>
          <div className='rounded-xl border border-white/10 p-5 bg-white/5 text-left'>
            <h3 className='text-white font-semibold'>Role-based dashboard</h3>
            <p className='mt-2 text-sm'>Admin, Mentor, and Student experiences tailored to their needs.</p>
          </div>
          <div className='rounded-xl border border-white/10 p-5 bg-white/5 text-left'>
            <h3 className='text-white font-semibold'>Fast and secure Access</h3>
            <p className='mt-2 text-sm'>Encrypted sessions and streamlined navigation.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home