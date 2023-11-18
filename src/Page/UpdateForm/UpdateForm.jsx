import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useLoaderData, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateForm = () => {
    const id = useParams().id
    const Blog = useLoaderData()[0]
    console.log(Blog); 
    
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
    
        axios.put(`https://blog-server-alpha-inky.vercel.app/blog/${id}`, Blog)
        .then(res=> {
            const data =res.data
            if (data.modifiedCount>0) {
                  Swal.fire({
                  title:"Blog Published",
                  icon:"success"
                })
            }
        })
        }
      }
  return (
    <div>
      <Helmet>
        <title>Update blog</title>
      </Helmet>
      <div className='flex-1 mx-auto'>
         <h1 className=' text-3xl'> 
            <span className='text-[#12F7D6] text-[14px] SpecialFont'>&lt;h1&gt;</span> 
            <br/>
            Update your blog here!!
            <span className='text-[#12F7D6] text-[14px] SpecialFont'> &lt;h1/&gt;</span> 
            </h1>
      <form onSubmit={blogSubmit} className='flex flex-col justify-center gap-4 p-[10px]'>
        <input className='p-[10px] border-2 border-[#12F7D6] SpecialFont outline-none rounded-md text-xl' type="text" name="name" placeholder='Blog title' id="" defaultValue={Blog.name} />
        <textarea className='p-[10px]  border-2 border-[#12F7D6] SpecialFont outline-none rounded-md text-base 
        h-[50vh] max-h-[50vh]' placeholder='Blog content' name="blogData" defaultValue={Blog.blogData} />
        <input className='btn bg-[green] hover:bg-[green] text-[white]' type="submit" value="Publish" name="submit" />
      </form>
    </div>
    </div>
  )
}

export default UpdateForm
