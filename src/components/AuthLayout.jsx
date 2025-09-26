import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from'react-redux'


export default function Protected({children, authentication=true}){

   const navigate = useNavigate()
   const [loader, setLoader]=useState(true)
   const authStatus = useSelector(state=>state.auth.isAuthenticated)


   useEffect(()=>{
    //if the page needs authentication and the user is not logged in
    if(authentication && !authStatus){
        navigate("/login")
    }else if(!authentication && authStatus){
        navigate("/")
    }
    setLoader(false)
   },[authStatus, navigate,authentication])


   if (loader) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-semibold text-gray-700">Loading...</h1>
      </div>
    );
  }

  return <>{children}</>;
}
