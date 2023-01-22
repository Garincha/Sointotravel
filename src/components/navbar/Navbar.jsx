import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center h-12 bg-[#f2784b]'>
      <nav className="flex items-center justify-between w-full max-w-5xl text-white">
        <span className="logo font-medium ml-5 ">SointoTravel</span>
        <div className="navItems cursor-pointer">
          <button type="button" className=' bg-white hover:bg-slate-100 font-medium font-sans text-[#0071c2] border-none py-1.5 px-2.5'>Register</button>
          <button type='button' className='bg-white hover:bg-slate-100 font-medium font-sans text-[#0071c2] ml-5 border-none py-1.5 px-2.5'>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar