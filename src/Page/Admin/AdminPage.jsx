import React from 'react'
import "./AdminPage.css"
import { NavLink, Outlet } from 'react-router-dom'

const AdminPage = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row min-h-[100vh] gap-3'>
      <div className='flex flex-row md:flex-col gap-4 p-[10px] text-[14px] md:w-[15%] md:border-r-2 border-[#12F7D6]  AdminNav'>
        <NavLink to="/Admin/profile">Profle</NavLink>
        <NavLink to="/Admin/blogForm" >Write a blog</NavLink>
        <NavLink to="/Admin/bloglist">Blog Lists</NavLink>
        <NavLink to="/Admin/user">Users</NavLink>
      </div>
      <div className=' md:w-[80%] p-[20px]'>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminPage
