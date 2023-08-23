import React from 'react'
import Post from './Post'

export default function PostList({posts}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
    {posts.map((post)=>(
        <Post key={post.id} post={post}/>
    ))}
    </div>
  )
}
