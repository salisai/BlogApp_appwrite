import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../features/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    
    const logoutHandler = async() => {
        try {
          await authService.logout();
          dispatch(logout());
        } catch (error) {
          console.log("Logout failed: ", error)
        }
    }

  return (
    <button 
    onClick={logoutHandler}
    className='px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-200 text-sm font-medium'
    >
        Logout
    </button>
  )
}

export default LogoutBtn