import React from 'react'
import { IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss, SiExpress, SiAdobephotoshop, SiCanva, SiMicrosoftword   } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaWordpress, FaElementor } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='text-center my-[50px]'>
      <h1 className='text-5xl mb-[25px] text-[#12F7D6]'>Skills:</h1>
        <p>These are the latest skills I achieved till I made this project.</p>
        <div className='my-[20px] text-xl flex flex-wrap container mx-auto justify-center text-[#12F7D6] items-center gap-5'>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer w-[100px]
            hover:bg-white hover:text-[#292F36] hover:border-white duration-[0.2s] ease-in'>
                 <i className="fa-brands fa-html5 text-5xl"></i>
                <h1>Html</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in'>
                 <i className="fa-brands fa-css3-alt text-5xl"></i>
                <h1>css</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in flex flex-col justify-center items-center'>
                    <SiTailwindcss className='text-5xl'/>
                <h1>Tailwind</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in'>
                 <i className="fa-brands fa-js text-5xl"></i>
                <h1>Javascript</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in'>
                 <i className="fa-brands fa-react text-5xl"></i>
                <h1> React.js</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in flex flex-col items-center'>
                 <IoLogoFirebase className='text-5xl'/>
                <h1> Firebase</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in'>
                 <i className="fa-brands fa-node text-5xl"></i>
                <h1> Node.js</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in flex flex-col items-center'>
                 <SiExpress className='text-5xl'/>
                <h1> express.js</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in flex flex-col items-center'>
                 <DiMongodb className='text-5xl'/>
                <h1> MongoDB</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in flex flex-col items-center'>
                 <SiAdobephotoshop className='text-5xl'/>
                <h1> Photoshop</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in flex flex-col items-center'>
                 <SiCanva className='text-5xl'/>
                <h1> Canva</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in flex flex-col items-center'>
                 <FaWordpress className='text-5xl'/>
                <h1> Wordpress</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in flex flex-col items-center'>
                 <FaElementor className='text-5xl'/>
                <h1> Elementor</h1>
            </div>
            <div className='border-2 border-[#12F7D6] rounded-lg p-[10px] cursor-pointer min-w-[100px]
            hover:bg-white hover:text-[#292F36] duration-[0.2s] ease-in flex flex-col items-center'>
                 <SiMicrosoftword className='text-5xl'/>
                <h1> Office Word</h1>
            </div>
        </div>
    </div>
  )
}

export default Skills
