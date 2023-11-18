import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLoaderData } from 'react-router-dom'
import Animatiom from "../../assets/loading.json"
import Animation2 from "../../assets/searchError.json"
import { Player } from '@lottiefiles/react-lottie-player'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const {count} = useLoaderData()
  const itemsPerPage = 5
  const [currentpage, setCurrentPage] = useState(0)
  const [mainBlog, setmainBlog] = useState("block")
  const [SearchResult, setSearchResult] = useState("hidden")
  const numberOfPages = Math.ceil(count/itemsPerPage)

  const pages =[...Array(numberOfPages).keys()]

  const previousFunc = ()=>{
    if (currentpage>0) {
      setCurrentPage(currentpage-1)
    }    
  }

  const nextPageFunc = () =>{
    if (currentpage< pages.length - 1) {
      setCurrentPage(currentpage + 1 )
    }
  }

  useEffect(()=>{
    axios(`https://blog-server-alpha-inky.vercel.app/blogs?page=${currentpage}&size=${itemsPerPage}`)
    // axios(`http://localhost:5000/blogs?page=${currentpage}&size=${itemsPerPage}`)
    .then(res => setBlogs(res.data))
  },[currentpage])

  const searchFunction = e =>{
    e.preventDefault();
    const search = e.target.search.value
    axios(`https://blog-server-alpha-inky.vercel.app/blogs?search=${search}`)
    // axios(`http://localhost:5000/blogs?search=${search}`)
    .then(res => {
      setmainBlog("hidden")
      setSearchResult("block mb-[25px]")
      setBlogs(res.data)})
  }


  return (
    <div className='container mx-auto'>
      <Helmet>
        <title>Blogs - Jobayer</title>
      </Helmet>
      <div className='text-center border-b-2 p-[20px]'>
        <h1 className='text-5xl mb-[25px] text-[#12F7D6]'>Blogs</h1>
        <p>Theses are my blogs i try to add my experiences and ideas here.</p>
      <form onSubmit={searchFunction}  className='my-[25px] flex items-center justify-center '>
        <input className='SpecialFont md:w-[50%] focus:outline-none p-[10px] border-2 border-[#12F7D6]' type="text" name="search" placeholder='Search here' id="" />
        <input className='btn bg-[#12F7D6] hover:bg-[#12F7D6] text-[#292F36] rounded-none border-2 border-[#12F7D6] hover:border-[#12F7D6]' type="submit" value="Search" name="" id="" />
      </form>
      </div>
      <div className={`min-h-[50vh] ${SearchResult}`}>
      {
        blogs.length>0?
        <div className='my-[25px]'>
          {
        blogs.map(blog=> 
        <div key={blog._id} className='border-b-2 p-[20px] flex flex-col gap-3 items-start'>
          <h1 className='text-[#12F7D6] text-3xl' key={blog._id}>{blog.name}</h1>
          <p>{blog.blogData.slice(0,200)} ...</p>
          <Link to={blog._id}><button className='text-[#12F7D6] '>Read More</button></Link>
            <div className='flex justify-evenly w-full'>
              <h1>Published: <span className='text-[gray]'>{blog.data}</span></h1>
              <h1>Author: <span className='text-[gray]'>{blog.Author}</span></h1>
            </div>
        </div>
        )
      }
        </div>
        :
        <div className='flex flex-col justify-center items-center'>
          <Player className='w-[50vw]' src={Animation2} loop autoplay />
          <h1 className='text-3xl'>No Blog found</h1>
        </div>
      }
      </div>
      {
        blogs.length>0?
        <div className={`my-[25px] ${mainBlog}`}>
          {
        blogs.map(blog=> 
        <div key={blog._id} className='border-b-2 p-[20px] flex flex-col gap-3 items-start'>
          <h1 className='text-[#12F7D6] text-3xl' key={blog._id}>{blog.name}</h1>
          <p>{blog.blogData.slice(0,200)} ...</p>
          <Link to={blog._id}><button className='text-[#12F7D6] '>Read More</button></Link>
            <div className='flex justify-evenly w-full'>
              <h1>Published: <span className='text-[gray]'>{blog.data}</span></h1>
              <h1>Author: <span className='text-[gray]'>{blog.Author}</span></h1>
            </div>
        </div>
        )
      }
        </div>
        :
        <Player className={mainBlog} src={Animatiom} loop autoplay />
      }
      <div className={`flex gap-2 items-center justify-center p-[10px] ${mainBlog}`} >
      <button onClick={previousFunc} className='btn text-[#12F7D6]'>&lt;</button>
        {/* {
          pages.map(page=> 
          <button className={currentpage==page? "paginationActive btn" :'btn text-[#12F7D6] '} onClick={()=>{setCurrentPage(page)}} key={page} >&lt; {page +1} &gt;</button>)
        } */}
        <p className='paginationActive'>{currentpage + 1} </p>
        <p> / {pages.length}</p>

        <button onClick={nextPageFunc} className='btn text-[#12F7D6]'>&gt;</button>
      </div>
    </div>
  )
}

export default Blogs
