import React from 'react'
import { Post } from '../types'
import PostCard from './PostCard'
import SideBar from './SideBar'

interface Props { 
    posts: Post[]
}

const PostFeed: React.FC<Props> = ({posts}) => {
  return (
    <div className="max-w-7xl mx-auto flex">
        <div className="w-3/5">
            {posts && posts.length && posts.map(post => {
                return (
                    <div className="m-3 max-w-3xl">
                        <PostCard post={post}/>
                    </div>
                )
            })}
        </div>
        <div className="w-2/5">
            <SideBar/>
        </div>
    </div>
  )
}

export default PostFeed