import Head from 'next/head'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Posts from '../components/Posts'
import { sanityClient } from '../sanity'
import { Post } from '../typing'

interface Posts { 
  posts: [Post]
}

const Home = ({posts}: Posts) => {
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


      <Posts props={posts}/>
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
