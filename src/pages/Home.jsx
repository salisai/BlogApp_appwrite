import React, { useEffect, useState } from 'react'
import service from "../appwrite/config"
import { Container , PostCard} from "../components" 


const Home = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
  
    if(posts.length === 0){
        return (
            <Container>
                <h1>No posts found.</h1>
            </Container>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                       <div key={post.$id}  className='p-2'>
                         <PostCard {...post}/>
                       </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home