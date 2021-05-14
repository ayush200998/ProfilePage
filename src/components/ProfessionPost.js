import React from 'react'
import './Post.css'

function ProfessionPost({ posts }){
    return (
        posts.map((post) =>{
            return  (
                <div className='posts'>
                    <h4> {post.title} </h4>
                    <p> Experience: {post.experience} </p>
                    <p> {post.created_at} </p>
                </div>
            )    
        })
        
    )
}

export default ProfessionPost