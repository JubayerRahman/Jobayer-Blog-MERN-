import { Player } from '@lottiefiles/react-lottie-player';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router-dom'
import animation from "../../assets/blogFormAnimation.json"
import { Helmet } from 'react-helmet';
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'
import { AuthContent } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const BlogSingleBlog = () => {
    const [blog, setBlog] = useState()
    const id = useParams().id
    const location = useLocation()
    console.log(location);
    const {user} = useContext(AuthContent)
    useEffect(()=>{
      axios(`https://blog-server-alpha-inky.vercel.app/bookmark/${id}`)
      .then(res => setBlog(res.data[0]))
    },[])

    const SaveBlog =()=>{
      const email = user.email
      const blogName = blog.name
      const blogData = blog.blogData
      const DateToBookMark = {email, blogName, blogData}
      axios.post("https://blog-server-alpha-inky.vercel.app/bookmark", DateToBookMark )
      .then(result =>{
        Swal.fire({
          titile:"Blog saved",
          icon:"success"
        })
      })
    }

  return (
    <div className='container mx-auto'>
      
      {
        blog?
        <div className='p-[20px]'>
          <Helmet>
            <title>{blog.blogName}</title>
          </Helmet>
            <h1 className='text-5xl text-[#12F7D6] mb-[20px]'>{blog.blogName}</h1>
            <div className='flex justify-between flex-col md:flex-row border-t-2 items-center border-b-2 p-[10px] border-[#12F7D6] mb-[25px] gap-4'>
                <div className='flex justify-between gap-3'>
                  <h1>Published: {blog.blogDate}</h1>
                  <h1>Author: {blog.blogAuthor}</h1>
                </div>
                <div className='flex justify-evenly gap-3 items-center'>
                {/* <button onClick={SaveBlog} className='border-2 bg-black border-[#12F7D6] rounded-full py-[5px] px-[10px]'><i className="fa-regular fa-bookmark text-[#12F7D6]"></i></button> */}
                <FacebookShareButton
                  url={`https://jobayer-blogs.web.app${location}`}
                  quote={"checkout this blog"}
                  hashtag={"#jobayerBlogs"}
                  >
                  <FacebookIcon size={30} round={true} />
                </FacebookShareButton>
                <WhatsappShareButton
                url={`https://jobayer-blogs.web.app${location}`}
                quote={"checkout this blog"}
                hashtag={"#jobayerBlogs"}
                >
                  <WhatsappIcon size={30} round={true} />
                </WhatsappShareButton>
                </div>
            </div>
            <p className='blogP'>{blog.blogData}</p>
        </div>
        : <div className='p-[50px]'><Player src={animation} loop autoplay/></div>
      }
    </div>
  )
}

export default BlogSingleBlog
