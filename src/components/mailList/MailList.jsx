import React from 'react'

function MailList() {
    return (
        <div className='mail w-full bg-[#ba4920] justify-between mt-12 py-12 text-white flex flex-col items-center gap-5'>
            <h2 className='mTitle text-2xl text-sans text-bold'>Save time, save money!</h2>
            <span className="mDesc">Sign up and we'll send the best deals to you</span>
            <div className="mInputContainer">
                <input className='w-80 h-12 p-2.5 border-none mr-2.5 rounded text-black text-sans' type="text" name="mail" placeholder='Your Email' id="" />
                <button className='bg-[#ffa978] text-white text-sans text-medium py-0 px-5 h-12 rounded hover:bg-[#f2784b]'>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList