import React, { useEffect, useState } from 'react'
import {Container, PostForm } from "../components"
import service from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'


const EditPost = () => {
    const [post, setPost] = useState(null)
    
    //get value from URL
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate("/")
        }
    },[slug, navigate])
  
  
    return post ? (
        <div>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ): null
}

export default EditPost
