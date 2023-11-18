import { Player } from '@lottiefiles/react-lottie-player'
import React, { useContext, useState } from 'react'
import animation from "../../assets/loginAnimation.json"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./Login.css"
import { AuthContent } from '../../AuthProvider/AuthProvider'
import auth from '../../firebase/firebase.config'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'
import axios from 'axios'

const Login = () => {
    const [passType, setPasstype] = useState("password")
    const {signIn} = useContext(AuthContent)
    const navigate = useNavigate()
    const location = useLocation()
    const changePtype =()=>{
        const box = document.getElementById('seePass').checked
        if(box){
            setPasstype("text")
        }
        else{
            setPasstype("password")
        }
        console.log(box);
    }

    const loginForm = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email, password);
        if (email =="" || password =="") {
          Swal.fire({
            title:"give all the data",
            icon: "error"
          })
        }
        else{
          signIn(email, password)
          .then(result => {
          if (location.state) {
            navigate(location.state)
          }
          else{
            navigate("/")
          }
          const user = {email}
          axios.post("https://blog-server-alpha-inky.vercel.app/jwt", user, {withCredentials:true})
          .then(res => console.log(res.data))
          Swal.fire({
            title:"Logged in successfully",
            icon:"success"
          })
        })
        .catch(error => {
          Swal.fire({
            title:(error.message),
            icon:"error"
          })
          console.log(error.message)})
        }
    }
  return (
    <div className='container mx-auto py-[50px] flex flex-col-reverse md:flex-row justify-between items-center'>
      <Helmet>
        <title>Login JobayerBlog </title>
      </Helmet>
      <div className='md:w-1/2 flex justify-center auth'>
        <form onSubmit={loginForm} className=' w-full md:w-[80%] p-[20px] flex flex-col gap-3  border-[#12F7D6] rounded-xl '>
            <h1 className=' text-3xl'> 
            <span className='text-[#12F7D6] text-[14px] SpecialFont'>&lt;h1&gt;</span> 
            <br/>
            Login now
            <br/>
            <span className='text-[#12F7D6] text-[14px] SpecialFont'>&lt;h1/&gt;</span> 
            </h1>
            <input className='SpecialFont p-[10px] text-xl w-full rounded-md outline-none' type='email' 
            placeholder='&lt;p&gt; Email &lt;p/&gt;' name='email'   />
            <input className='SpecialFont p-[10px] text-xl w-full rounded-md outline-none' type={passType} 
            placeholder='&lt;p&gt; Password &lt;p/&gt;' name='password'  />
            <div  onClick={changePtype} className='flex items-center'>
            <input type="checkbox" name="seePass" id="seePass" />
            <label htmlFor='seePass'> &nbsp; Show Password</label>
            </div>
            <input className='btn bg-[green] hover:bg-[green] text-[white]' type="submit" value="Log in" name="submit" />
        <h1>Don't have account? <Link className='text-[#12F7D6]' to="/registration">Register</Link></h1>
        </form>
      </div>
      <div className='md:w-1/2 '>
        <Player src={animation}  loop autoplay/>
      </div>
    </div>
  )
}

export default Login
