import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Loader from '../../Components/PrivateRoute/Loader'

const AdminBlogList = () => {
    const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    axios("https://blog-server-alpha-inky.vercel.app/blogs")
    .then(res => setBlogs(res.data))
  },[])

  const DeleteBlog = id =>{
    axios.delete(`https://blog-server-alpha-inky.vercel.app/blog/${id}`)
    .then(res => {
        const data = res.data
        if(data.deletedCount>0){
            Swal.fire({
                title:"Deleted blog successfully",
                icon:'success'
            })
        }
    })
    const remainingBlogs = blogs.filter(blog => blog._id !== id)
    setBlogs(remainingBlogs)
  }
  return (
    <div>
        <Helmet>
        <title>Blog Lists</title>
        </Helmet>
      <h1 className='text-5xl border-b-2 pb-[20px]'> 
        <span className='text-[#12F7D6] text-xl SpecialFont'>&lt;h1&gt;</span> 
        <br/> 
         Blogs You Published
        <span className='text-[#12F7D6] text-xl SpecialFont'> &lt;/h1&gt;</span> 
        </h1>
        <div className='container mx-auto  flex flex-col gap-3 my-[25px]'>
            {
                blogs.length>0?
                <div>
                    {
                blogs.map(blog => 
                <div key={blog._id} className='p-[20px] border-b-2  border-[#12F7D6] flex flex-col md:flex-row items-center gap-5 md:gap-2 justify-between'>
                    <div className='blogData md:w-[70%]'>
                    <h1 className='text-[#12F7D6] text-3xl mb-[5px]'>{blog.name}</h1>
                    <p className='mb-[10px]'>{blog.blogData.slice(0,200)} ...</p>
                    <div className='flex justify-evenly w-full'>
                        <h1>Published: <span className='text-[gray]'>{blog.data}</span></h1>
                        <h1>Author: <span className='text-[gray]'>{blog.Author}</span></h1>
                    </div>
                    </div>
                    <div className='flex gap-2'>
                        <Link to={blog._id}>
                        <button 
                        className='button SpecialFont bg-[#12F7D6] hover:bg-[#12F7D6] text-black  btn' >
                            Update
                        </button>
                        </Link>
                        <Link>
                        <button onClick={()=>{DeleteBlog(blog._id)}}
                        className='button SpecialFont btn bg-red-600 hover:bg-red-600 text-white' >
                            Delete
                        </button>
                        </Link>
                    </div>
                </div> )
            }
                </div>: <Loader/>
            }
        </div>
    </div>
  )
}

export default AdminBlogList
