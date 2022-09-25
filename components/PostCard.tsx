import React from 'react'
import { urlFor } from '../sanity'
import { SinglePost } from '../types'
// import Image from 'next/Image'

type Props = {
    post: SinglePost
}

const PostCard: React.FC<Props> = ({post}) => {
    console.log(post)
    const formatDate = (e:string): string => {
        let d: Date = new Date(e)
        let month: string = d.toLocaleString('default', {month: 'long'})
        let day = d.getDate()
        return `${month.slice(0, 3)}, ${day}`
    }
    return (
        <div className="flex justify-between space-y-9 items-center">
            <div className="sec flex flex-col w-3/4">
                <div className="sec-author flex justify-left items-center space-x-3">
                    <img className="w-6 h-6 aspect-square object-cover rounded-full" src={urlFor(post.author.image).url()} alt="AuthorImg" />
                    <h1 className="font-medium">{post.author.name} in Category</h1>
                </div>
                <div className="sec-title font-bold text-xl py-2">
                    <h1>{post.title}</h1>
                </div>
                <div className="sec-body">
                    <div className="sec-subtitle text-gray-600">
                        <h1>{post.subtitle}</h1>
                    </div>
                    <div className="sec-details">
                        <p>{formatDate(post.publishedAt)}</p>
                    </div>
                </div>
            </div>
            <div className="sec-image flex justify-right items-center p-2 w-1/4">
                <img className=" w-52 object-cover rounded-md aspect-video" src={urlFor(post.mainImage).url()} alt="" />
            </div>
        </div>
    )
}

export default PostCard