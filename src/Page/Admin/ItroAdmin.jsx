import React from 'react'
import { Link } from 'react-router-dom'

const ItroAdmin = () => {
  return (
    <div className='text-center flex justify-center items-center mt-[20vh]'>
      <div>
      <h1 className='text-[#12F7D6] text-3xl md:text-5xl'>Hello, welcome to the admin paner</h1>
      <p className='SpecialFont mt-[20px] text-left'>
        <span className='text-[#12F7D6] text-xl'>&lt;p&gt; </span>
         check out your website's activities, feel free to upload new blogs, edit or update old ones, or if you want you can delete them too. So, what's in your mind?
         <span className='text-[#12F7D6] text-xl'> &lt;/p&gt; </span>
         </p>
         <Link to='/Admin/profile'>
         <button className='SpecialFont btn  bg-[green] hover:bg-green-600 text-xl text-white mt-[10px]'>
            <span className='text-[#12F7D6] text-xl'> &lt;p&gt; </span> 
            Get Started
            <span className='text-[#12F7D6] text-xl'> &lt;/p&gt; </span>
        </button>
         </Link>
      </div>
    </div>
  )
}

export default ItroAdmin
