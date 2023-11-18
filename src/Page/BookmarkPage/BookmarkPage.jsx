import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { AuthContent } from '../../AuthProvider/AuthProvider'
import { useState } from 'react'
import Loader from '../../Components/PrivateRoute/Loader'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Animation from "../../assets/blogFormAnimation.json"
import { Player } from '@lottiefiles/react-lottie-player'

const BookmarkPage = () => {
    const {user} = useContext(AuthContent)
    const [bookmarks, setBookMarks] = useState([])

    useEffect(()=>{
        if (user !== null) {
            axios.get(`https://blog-server-alpha-inky.vercel.app/bookmark?email=${user.email}`, {withCredentials:true})
            .then(res => setBookMarks(res.data))  
        }
    },[user])
    const Removefunction = id =>{
        axios.delete(`https://blog-server-alpha-inky.vercel.app/bookmark/${id}`)
        .then(res=>{
            if (res.data.deletedCount) {
                Swal.fire({
                    title:"Bookmark Blog Deleted",
                    icon:"success"
                })
            }
        })
        const remainingBookmarks = bookmarks.filter(bookmark=> bookmark._id !== id)
        setBookMarks(remainingBookmarks)
    }
  return (
    <div className='container mx-auto p-[10px] '>
      <h1 className=' text-3xl border-b-2 pb-[20px]'> 
            <span className='text-[#12F7D6] text-[14px] SpecialFont'>&lt;h1&gt;</span> 
            <br/>
            Bolgs you saved
            <span className='text-[#12F7D6] text-[14px] SpecialFont'> &lt;h1/&gt;</span> 
            </h1>

            {
                bookmarks.length>0?
                <div className='flex flex-col gap-3 my-[25px]'>
                    {
                        bookmarks.map(bookmark=> 
                        <div key={bookmark._id} className='p-[10px] border-b-2 rounded'>
                            <div>
                                <h1 className='text-[#12F7D6] text-3xl mb-[10px]'>{bookmark.blogName}</h1>
                                <h1>{bookmark.blogData.slice(0,250)} ...</h1>
                            </div>
                            <div className='flex gap-2'>
                                <Link to={`${bookmark._id}`}><button className='bg-green-600 p-[10px] rounded-md mt-[15px]'>Read</button></Link>
                                <button onClick={()=>{Removefunction(bookmark._id)}} className='bg-red-600 p-[10px] rounded-md mt-[15px]'>Remove</button>
                            </div>
                        </div> )
                    }
                </div>:<Player src={Animation} loop autoplay />
            }

    </div>
  )
}

export default BookmarkPage
