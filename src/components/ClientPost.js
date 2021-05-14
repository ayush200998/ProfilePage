import './Post.css'
import React from 'react'

function Post({ posts }) {
    return (
        posts.map((post) =>{
            return  (
                <div className='posts'>
                    <p> {post.description} </p>
                    <h4> {post.skills} </h4>
                    <p> {post.job_type} </p>
                    <p> {post.profession} </p>
                    <p> {post.created_at} </p>
                </div>
            )    
        })
        
    )
}

export default Post
