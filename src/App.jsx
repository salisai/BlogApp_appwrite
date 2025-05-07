import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authService } from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header} from "./components/index"
import { Outlet } from 'react-router-dom'

const App = () => {
  //for database requests
  //loading k base par conditional rendering 
  //if loading true then loading k icon
  //if loading false then show data
  const [loading, setLoading]=useState(true)
  const dispatch = useDispatch()//merger when you use react with redux

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{//you will get data from above line
      if(userData){
        dispatch(login({userData: userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

//condtional rendering
//if no loading the do this and if loading do that 
 return !loading?(
   <div className='min-h-screen flex flex-wrap 
   content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
       todo {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
     
   </div>
 ):null//assignment here, to set loading for the first entrance 

}//header and footer in every page

export default App;
//important step 
//env variables => id, password =we should use these variables here
//kuch variables => system variables
//secret manager for these variables in deployment servers like netlify
//yaha bhi env variables alag rakhtay ho aur waha bhi alag hotay hai
//env => should be in root home directory
//.env

//.env k access

//appwrite setting for backend


