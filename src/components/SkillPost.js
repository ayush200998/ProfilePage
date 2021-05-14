import React from 'react'
import './Post.css'

function SkillPost({ posts }){
    return (
        posts.map((post) =>{
            return  (
                <div className='posts'>
                    <h4> {post.title} </h4>
                    <p> Level: {post.level} </p>
                    <p> {post.created_at} </p>
                </div>
            )    
        })
        
    )
}

export default SkillPost