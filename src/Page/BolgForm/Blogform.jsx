import React from 'react'
import Animation from "../../assets/blogFormAnimation.json"
import { Player } from '@lottiefiles/react-lottie-player'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'

const Blogform = () => {
  const blogSubmit = e =>{
    e.preventDefault()
    const name = e.target.name.value
    const blogData = e.target.blogData.value

    if (name =="" || blogData =="") {
      Swal.fire({
        title:"Add all the data",
        icon:"error"
      })
    }
    else{
      const data = new Date().toLocaleDateString()
      const Author = "Jobyer Rahman"
    const Blog ={name, blogData, data, Author}

    axios.post("https://blog-server-alpha-inky.vercel.app/blogs", Blog)
    .then(res=> console.log(res.data))
    }
    Swal.fire({
      title:"Blog Published",
      icon:"success"
    })
  }
  return (
    <div className='container mx-auto flex justify-between items-center'>
      <Helmet>
        <title>Wite Blog</title>
      </Helmet>
        <div className='hidden md:block md:w-[30%]'>
            <Player src={Animation} loop autoplay />
        </div>
        <div className='flex-1 mx-auto'>
         <h1 className=' text-3xl'> 
            <span className='text-[#12F7D6] text-[14px] SpecialFont'>&lt;h1&gt;</span> 
            <br/>
            Write your blog here!!
            <br/>
            <span className='text-[#12F7D6] text-[14px] SpecialFont'>&lt;h1/&gt;</span> 
            </h1>
      <form onSubmit={blogSubmit} className='flex flex-col justify-center gap-4 p-[10px]'>
        <input className='p-[10px] border-2 border-[#12F7D6] SpecialFont outline-none rounded-md text-xl' type="text" name="name" placeholder='Blog title' id="" />
        <textarea className='p-[10px]  border-2 border-[#12F7D6] SpecialFont outline-none rounded-md text-base 
        h-[50vh] max-h-[50vh]' placeholder='Blog content' name="blogData"/>
        <input className='btn bg-[green] hover:bg-[green] text-[white]' type="submit" value="Publish" name="submit" />
      </form>
    </div>
    </div>
  )
}

export default Blogform
