import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import MoonLoader from "react-spinners/MoonLoader"
import PostPage from './PostPage'

const Main = () => {

    const {getPost , posts, isLoading} = useContext(AppContext)

    useEffect(()=>{
        getPost();
    },[])
  return (
    <div>
        {
            isLoading ? (
                <MoonLoader color="#000000" />
            ) : (
                
                    posts.length == 0 ? (
                        <h1>No posts found</h1>
                    ) : (
                        posts.map((post)=>(
                            <PostPage post={post} key={post.id}/>
                        ))
                    )
                
            )
        }
    </div>
  )
}

export default Main