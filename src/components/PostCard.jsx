import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'


const PostCard = ({
    $id,
    title,
    featuredimage
}) => {

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden'>
            <div className='w-full h-48 md:h-56 overflow-hidden'>
                <img src={appwriteService.getFilePreview(featuredimage)} 
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' 
                alt={title} 
                />
            </div>
            
            <h2 className='text-lg md:text-xl font-semibold text-gray-900 line-clamp-2'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard