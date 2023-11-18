import React, { useEffect, useState } from 'react'
import HeroSection from "./HeroSection/HeroSection.jsx"
import AboutSection from './AboutSection/AboutSection.jsx'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Skills from './Skills/Skills.jsx'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    axios("https://blog-server-alpha-inky.vercel.app/blogs")
    .then(res => setBlogs(res.data))
  },[])
  const HomeBlogs = blogs.slice(0,5)
  return (
    <div>
      <Helmet>
        <title>Home - Jobayer</title>
      </Helmet>
      <HeroSection/>
      <AboutSection/>
      <Skills/>
      <div className='BlogSection container mx-auto pt-[100px] pb-[100px]'>
      <div className='text-center border-b-2 p-[20px]'>
        <h1 className='text-5xl mb-[25px] text-[#12F7D6]'>Blogs</h1>
        <p>Theses are my blogs i try to add my experiences and ideas here.</p>
      </div>
      {
        HomeBlogs.map(blog=> 
        <div key={blog._id} className='border-b-2 p-[20px] flex flex-col gap-3 items-start'>
          <h1 className='text-[#12F7D6] text-3xl' key={blog._id}>{blog.name}</h1>
          <p>{blog.blogData.slice(0,200)} ...</p>
          <Link to={`/blogs/${blog._id}`}><button className='text-[#12F7D6] '>Read More</button></Link>
            <div className='flex justify-evenly w-full'>
              <h1>Published: <span className='text-[gray]'>{blog.data}</span></h1>
              <h1>Author: <span className='text-[gray]'>{blog.Author}</span></h1>
            </div>
        </div>
        )
      }
      <div className='flex flex-col items-center'>
        <Link className='bg-[#12F7D6] p-[10px] mt-[10px] font-bold text-black SpecialFont rounded-lg' to="/blogs"><button>See More</button></Link>
      </div>
      </div>
    </div>
  )
}

export default Home
