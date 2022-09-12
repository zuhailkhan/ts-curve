import React from 'react'
import { Post } from '../typing'

interface Posts { 
  posts: Post[]
}
export default function Posts(props:any) {
  console.log(props)
  return (
    <div>
      Posts
    </div>
  )
}
