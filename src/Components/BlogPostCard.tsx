import React from 'react'
import '../styles/blog.scss'

export default function BlogPostCard({post}: {post: any}) {
  return (
            <div  className="blog-post">
                <img src={post.image} alt={post.title} className="blog-post-image" />   
                <div className="blog-post-content">
                    <p className="blog-post-date">{post.date}</p>
                    <h3 className="blog-post-title">{post.title}</h3>
                    <p className="blog-post-description">{post.description}</p>
                </div>
            </div>
  )
}
