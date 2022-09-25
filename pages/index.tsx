import Head from 'next/head'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import PostFeed from '../components/PostFeed'
import TrendingPosts from '../components/TrendingPosts'
import { sanityClient } from '../sanity'
import { Post } from '../types'

interface Posts {
  posts: Post[]
}

const Home: React.FC<Posts> = ({ posts }) => {
  return (
    <div className='mx-auto'>
      <Head>
        <title>Medium 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-yellow-500'>
        <div className="border-b border-black">
          <Header />
        </div>

        <div className="border-b border-black">
          <Jumbotron />
        </div>
      </div>

      <TrendingPosts posts={posts} />

      <hr className='w-full' />

      <PostFeed posts={posts}/>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  try {
    const query = `*[_type == 'post']{
      _id,
      title,
      slug,
      author-> {
       name,
       image
      },
      categories,
      publishedAt,
      mainImage,
      subtitle
    }`

    let posts = await sanityClient.fetch(query)

    return {
      props: {
        posts
      }
    }

  } catch (error) {
    console.log(error)
    return {
      props: {
        msg: "Error Occured"
      }
    }
  }
}
