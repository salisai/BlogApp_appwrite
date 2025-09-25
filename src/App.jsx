import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authService } from './appwrite/auth'
import { login, logout } from './features/authSlice'
import { Footer, Header} from "./components/index"
import { Outlet } from 'react-router-dom'

const App = () => {
  const [loading, setLoading]=useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData: userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap 
    content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
          <main>
            <Outlet/>
          </main>
        <Footer/>
      </div>
      
    </div>
 ) : null//assignment here, to set loading for the first entrance 

}

export default App;

