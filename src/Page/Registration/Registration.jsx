import { Player } from '@lottiefiles/react-lottie-player'
import { useContext, useEffect, useState } from 'react'
import animation from "../../assets/registerAnimation.json"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContent } from '../../AuthProvider/AuthProvider'
import { updateProfile } from "firebase/auth";
import auth from '../../firebase/firebase.config'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'

const Registration = () => {

    const [passType, setPasstype] = useState("password")
    const {Register} = useContext(AuthContent)
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
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        if (name == "" || email =="" || password == "") {
          Swal.fire({
            title:"Fill all the data",
            icon:"error"
          })
        }

        else{
          Register(email,password)
        .then(result=>{
          const userLog = {email}
          axios.post("https://blog-server-alpha-inky.vercel.app/jwt", userLog, {withCredentials:true})
          .then(res => console.log(res.data))
          Swal.fire({
            title:"Registered successfully",
            icon:"success"
          })
          if (location.state) {
            navigate(location.state)
            setTimeout(() => {
              window.location.reload()
            }, 2000);
          }
          else{
            navigate("/")
            setTimeout(() => {
              window.location.reload()
            }, 2000);
          }
          updateProfile(auth.currentUser,{
            displayName:`${name}`
          })
          .then()
          .catch(error => console.log(error.message))
          console.log(result.user);
          const user = {name, email, role:"reader"} 

          axios.post("https://blog-server-alpha-inky.vercel.app/user", user)
          .then(res=> console.log(res.data))
        })
        .catch(error=> {
          Swal.fire({
            title:(error.message),
            icon:"error"
          })
          console.log(error.message)})
        }


        // console.log(name, email, password);
    }
  return (
    <div className='container mx-auto py-[50px] flex flex-col-reverse md:flex-row justify-between items-center'>
    <Helmet>
        <title>Register to JobayerBlogs</title>
    </Helmet>
      <div className='md:w-1/2 flex justify-center auth'>
        <form onSubmit={loginForm} className=' w-full md:w-[80%] p-[20px] flex flex-col gap-3  border-[#12F7D6] rounded-xl '>
            <h1 className=' text-3xl'> 
            <span className='text-[#12F7D6] text-[14px] SpecialFont'>&lt;h1&gt;</span> 
            <br/>
            Register now
            <br/>
            <span className='text-[#12F7D6] text-[14px] SpecialFont'>&lt;h1/&gt;</span> 
            </h1>
            <input className='SpecialFont p-[10px] text-xl w-full rounded-md outline-none' type='text' 
            placeholder='&lt;p&gt; Name &lt;p/&gt;' name='name'   />
            <input className='SpecialFont p-[10px] text-xl w-full rounded-md outline-none' type='email' 
            placeholder='&lt;p&gt; Email &lt;p/&gt;' name='email'   />
            <input className='SpecialFont p-[10px] text-xl w-full rounded-md outline-none' type={passType} 
            placeholder='&lt;p&gt; Password &lt;p/&gt;' name='password'  />
            <div  onClick={changePtype} className='flex items-center'>
            <input type="checkbox" name="seePass" id="seePass" />
            <label htmlFor='seePass'> &nbsp; Show Password</label>
            </div>
            <input className='btn bg-[green] hover:bg-[green] text-[white]' type="submit" value="Register" name="submit" />
        <h1>Don't have account? <Link className='text-[#12F7D6]' to="/login">LogIn</Link></h1>
        </form>
      </div>
      <div className='md:w-1/2 '>
        <Player src={animation}  loop autoplay/>
      </div>
    </div>
  )
}

export default Registration
