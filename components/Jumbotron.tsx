import React from 'react'

function Jumbotron() {
  return (
    <div className=' flex items-center justify-between bg-yellow-500 max-w-7xl mx-auto py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
            <h1 className='text-6xl max-w-xl font-serif'>Stay curious.</h1>
            <h2>Discover stories, thinking, and expertise from writers on any topic.</h2>
            <button className='rounded-full px-6 py-2 bg-black text-white'>
                Start Reading
            </button>
        </div>
        <div>
            <img 
            className='hidden md:inline-flex h-32 lg:h-full'
            src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="Big M Logo" />
        </div>
    </div>
  )
}

export default Jumbotron