import React, { useContext } from 'react'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import { AuthContent } from '../AuthProvider/AuthProvider'

const NavBar = () => {
  const [progress, setProgress] = useState(0)
  const {user,isAdmin, userRole, logout} = useContext(AuthContent)
  console.log(isAdmin);
  const Navlinks = 
  <>
        <li><NavLink onClick={()=>setProgress(100)} to="/">Home</NavLink></li>
        <li><NavLink onClick={()=>setProgress(100)} to="/blogs">Blogs</NavLink></li>
        {
          user?
          <div>
          <div className='hidden md:block dropdown dropdown-end'>
            <label tabIndex={0} className="btn btn-ghost">
            <li><h1>{user.displayName}</h1></li>
           </label>
           {
            userRole=="Admin"?
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><h1>{userRole}</h1></li>
            <li><NavLink to="/Admin">Dashboard</NavLink></li>
            <li><button className=' bg-red-700 text-white text-center font-bold text-[16px] p-[10px]' onClick={logout}>Logout</button></li>
           </ul>
            :
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><h1>{user.displayName}</h1></li>
            <li><NavLink to="/bookmark">Bookmarks</NavLink></li>
            <li><button className=' bg-red-700 text-white text-center font-bold text-[16px] p-[10px]' onClick={logout}>Logout</button></li>
           </ul>
           }
          </div>
          <div className='block md:hidden'>
          {
            userRole=="Admin"?
            <ul tabIndex={0} className="">
            <li><h1>{userRole}</h1></li>
            <li><NavLink to="/Admin">Dashboard</NavLink></li>
            <li><button className=' bg-red-700 text-white text-center font-bold text-[16px] p-[10px]' onClick={logout}>Logout</button></li>
           </ul>
            :
            <ul tabIndex={0} className="">
            <li><h1>{user.displayName}</h1></li>
            <li><NavLink to="/bookmark">Bookmarks</NavLink></li>
            <li><button className=' bg-red-700 text-white text-center font-bold text-[16px] p-[10px]' onClick={logout}>Logout</button></li>
           </ul>
           }
          </div>
          </div>
          :<li><NavLink onClick={()=>setProgress(100)} to="/login">Login</NavLink></li>
        }
  </>
  return (
    <>
    <div className='container mx-auto p-[20px] md:pt-[20px] pb-[20px] SpecialFont flex justify-between items-center'>
      <div className='nameSection'>
        <Link to="/">
          <h1 className='SpecialFont md:text-[32px]'><span className='text-[#12F7D6]'>&lt;C/&gt;</span>JobayerRahman</h1>
        </Link>
      </div>
      <div className='navLinks md:text-[24px] flex md:hidden gap-2'>
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {Navlinks}
      </ul>
    </div>
      </div>
      <ul className='navLinks hidden  md:text-[24px] md:flex gap-2'>
        {Navlinks}
      </ul>
    </div>
    <LoadingBar color='#12F7D6' progress={progress} onLoaderFinished={()=>setProgress(0)}/>
    </>
  )
}

export default NavBar
