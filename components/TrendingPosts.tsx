import React from 'react'
import { urlFor } from '../sanity'
import Image from 'next/image'

type Props = {
  posts: []
}

interface Post {
  _id: string,
  title: string,
  slug: {
    current: string
  },
  author: {
    name: string,
    image: Object
  },
  categories: [],
  publishedAt: string,
}

const TrendingPosts: React.FC<Props> = ({ posts }) => {
  const formatDate = (e:string): string => {
    let d: Date = new Date(e)
    let month: string = d.toLocaleString('default', {month: 'long'})
    let day = d.getDate()
    return `${month.slice(0, 3)}, ${day}`
  }
  return (
    <div className="sec-trendingWrapper max-w-7xl mx-auto p-3 mb-60">
      <div className="flex items-center">
        <h1 className="font-semibold ml-1 ">Trending on Medium</h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts && posts.map((post: Post, index: number) => {
          return (
            <li className="">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="font-black text-3xl text-gray-300">{(index + 1).toString().padStart(2, '0')}</h1>
                </div>
                <div className="flex flex-col px-3 py-2">
                  <div className="sec-author flex items-center space-x-2">
                    <img className="w-6 h-6 aspect-square object-cover rounded-full" src={urlFor(post.author.image).url()} alt="AuthorImg" />
                    <h1 className="font-medium">{post.author.name}</h1>
                  </div>
                  <h1 className="sec-title font-bold">{post.title}</h1>
                  <div className="sec-details">
                    <h6 className="sec-datePosted">{formatDate(post.publishedAt)}</h6>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TrendingPosts