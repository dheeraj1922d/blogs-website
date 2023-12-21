import React from 'react'

const PostPage = ({post}) => {

    console.log("post :")
    console.log(post.tags)
  return (
    <div>
        <p>{post.title}</p>
        <div><span>By</span><span>{post.author}</span><span>on</span><span>{post.category}</span></div>
        <div><span>Posted on</span><span>{post.date}</span></div>
        <p>{post.content}</p>
        <div>
            {
                 post.tags.map((tag)=>(
                    <span className=''>#{tag}</span>
                 ))
            }
        </div>
    </div>
  )
}

export default PostPage