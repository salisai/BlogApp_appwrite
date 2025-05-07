//its a mechanism that how to protect pages or routes
import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from'react-redux'

export default function Protected({children, authentication
    =true}){

   const navigate = useNavigate()
   const [loader, setLoader]=useState(true)
   //logged in hai ya nahi
   //from store
   const authStatus = useSelector(state=>state.auth.status)


   //kis page par jana hai, jana hai ya nahi, kab jana hai
   useEffect(()=>{
    TODO: 
    //this one is easy version
    // if(authStatus === true){
    //     navigate('/')
    // }else if(authStatus === false){
    //     navigate('/login')
    // }

    //if not got anything from user then authentication will be true as by default
    // true && false !==true  => true
    if(authentication && authStatus !==authentication){
        navigate("/login")
        //false && true!==true => false
    }else if(!authentication && authStatus!==authentication){
        navigate("/")
    }
    setLoader(false)
   },[authStatus, navigate,authentication])

   TODO://loading assignment
  return loader ? <h1>Loading ...</h1>: <>{children}</>
}
