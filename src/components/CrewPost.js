import React from 'react'
import './Post.css'

function CrewPost({ posts }){
    return (
        posts.map((post) =>{
            return  (
                <div className='posts'>
                    <p> {post.description} </p>
                    <h4> {post.skills} </h4>
                    <p> {post.profession} </p>
                    <p> {post.created_at} </p>
                </div>
            )    
        })
        
    )
}

export default CrewPost
