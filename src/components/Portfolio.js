import React from 'react'
import './Post.css'

function Portfolio({ posts }){
    return (
        posts.map((post) =>{
            return  (
                <div className='posts'>
                    <p> {post.description} </p>
                    <p> Created at: {post.created_at} </p>
                    <p> Ended time: {post.ended_time} </p>
                    <h4> Projects..</h4>
                    {post.images.map((image) => {
                        return(
                            <img className='posts_images' src={image.image} alt='Images' />
                        )
                    })}
                </div>
            )    
        })
        
    )
}

export default Portfolio