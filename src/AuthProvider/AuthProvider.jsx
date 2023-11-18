import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, onAuthStateChanged } from "firebase/auth";
import axios from 'axios';

export const AuthContent = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [userRole, setuserRole] = useState()
    const [loading, setloading] = useState(true)
    const [isAdmin, setAdmin] = useState(null)

    useEffect(()=>{
        const ussubscribe = onAuthStateChanged(auth, currentUser =>{
            // if (currentUser) {
            //     const loadedUser = currentUser.email
            //     axios.post("http://localhost:5000/jwt",loadedUser, {withCredentials:true})
            //     .then(res => console.log(res.data))
            // }
            setUser(currentUser)
            setloading(false)
        })
    },[])

    //Checking if the user is admin or not.
    useEffect(()=>{
        if (user !== null) {
            axios.get(`https://blog-server-alpha-inky.vercel.app/user?email=${user.email}`)
            .then(res=> setuserRole(res.data[0].role))
            axios.get(`https://blog-server-alpha-inky.vercel.app/user/admin?email=${user.email}`)
            .then(res=> setAdmin(res.data.isAdmin) )
        }
    },[user])


    const Register = (email, password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
        const userEmail = {email: user.email}
        axios.post("https://blog-server-alpha-inky.vercel.app/logout", userEmail, {withCredentials:true})
        .then(res=> console.log(res.data))
        return signOut(auth)
    }


    const AuthValue ={
        user,
        userRole,
        loading,
        Register,
        signIn,
        isAdmin, 
        setAdmin,
        logout
    }
  return (
    <AuthContent.Provider value={AuthValue}>
      {children}
    </AuthContent.Provider>
  )
}

export default AuthProvider
