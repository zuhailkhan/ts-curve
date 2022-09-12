import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex justify-between p-5 bg-yellow-500 max-w-7xl mx-auto'>
        <div className='flex space-x-5 items-center flex-grow justify-between mr-5'>
            <Link href="/">
                <img className='w-44 object-contain cursor-pointer' src="https://links.papareact.com/yvf" alt="Logo" />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5'>
                <h3>Our Story</h3>
                <h3>Membership</h3>
                <h3>Write</h3>
            </div>
        </div>
        <div className='flex items-center space-x-5 text-black'>
            <h3 className='hidden sm:inline-flex'>Sign In</h3>
            <h3 className='px-4 py-2 rounded-full bg-black text-white'>Get Started</h3>
        </div>
    </header>
  )
}

export default Header