import React from 'react'
import PorfilrImg from "../../../imgs/profile.png"
import { useLocation } from 'react-router-dom'
import cv from "../../../assets/JubayerRahman.pdf"

const HeroSection = () => {
    const location = useLocation()
  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center  gap-4 md:h-[100vh]'>
        <div className='border-[4px] flex flex-col justify-center w-[80vw] md:w-[25vw] border-[#628a84] p-[20px] rounded-tl-[40%] rounded-br-[40%]'>
            <img className='mx-auto rounded-full w-[96px] h-[96px]  border-[4px] ' src={PorfilrImg}/>
            <h1 className='SpecialFont text-center text-[32px] font-[500] '>Jobayer</h1>
            <h1 className='SpecialFont  text-center'>MERN stack Developer</h1>
            <div className='PersonalDeta flex flex-col justify-start items-start pt-[10px]'>
                <h1 className='text-[14px]'><i className="fa-regular fa-envelope"></i> Jubayerr398@gmail.com</h1>
                <h1 className='text-[14px]'><i className="fa-solid fa-location-dot"></i> Bangladesh</h1>
                <h1 className='text-[14px]'><i className="fa-solid fa-bag-shopping"></i> Full time / Freelance </h1>
            </div>
            <div className='mx-auto flex items-center gap-1 SpecialFont text-[14px] pt-[10px]'>
                <h1 className='bg-[#12F7D6] p-[5px] cursor-pointer rounded-lg text-black'>HTML</h1>
                <h1 className='bg-[#12F7D6] p-[5px] cursor-pointer rounded-lg text-black'>CSS</h1>
                <h1 className='bg-[#12F7D6] p-[5px] cursor-pointer rounded-lg text-black'>JS</h1>
                <h1 className='bg-[#12F7D6] p-[5px] cursor-pointer rounded-lg text-black'>Ract</h1>
            </div>
            <div className='flex items-center justify-center mb-[20px] pt-[10px]'>
                <a href={cv} download>
                <button className='items-center btn bg-[white] hover:bg-[white] rounded-2xl text-black  md:w-[60%]'>Download CV <i className="fa-solid fa-arrow-down"></i></button>
                </a>
            </div>
        </div>
        <div className='md:flex-1 flex flex-col p-[20px] md:items-start '>
            <div className='Heading'>
            <h1>
            <span className='SpecialFont text-[#12F7D6]'>&lt;h1&gt;</span>
            <br/>
            <span className='text-[50px] md:text-[64px]'>Hey
            <br/>
             I'm <span className='text-[#12F7D6]'>Jobayer,</span>
            <br/>
             MERN stack developer </span>
            <span className='SpecialFont text-[#12F7D6]'>&lt;/h1&gt;</span>
            </h1>
            </div>
            <div>
                <p className='SpecialFont'>
                <span className='SpecialFont text-[#12F7D6]'>&lt;p&gt;</span>
                <br/>
                <span>
                I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,
                </span>
                <br/>
                <span className='SpecialFont text-[#12F7D6]'>&lt;p/&gt;</span>
                </p>
            </div>
            <div>
            <p className='SpecialFont text-[#12F7D6] text-[26px]'>Let's Talk <i className="fa-regular fa-envelope"></i></p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
