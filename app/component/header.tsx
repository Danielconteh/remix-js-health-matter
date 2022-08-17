import { Link } from '@remix-run/react'
import React from 'react'

const Header = () => {
  return (
    <div className=' py-2 bg-white min-h-[6vh] flex items-center justify-between w-full  sm:w-1/2'>
      <Link
        prefetch='intent'
        to='/'
        className='p-4 uppercase text-2xl relative left-8 sm:left-2'
      >
        health matter
      </Link>
      <Link prefetch='intent' to='/' className='text-center relative p-4'>
        <img
          className='mr-6 sm:mr-0 right-2'
          src='/logo.svg'
          alt=''
          width={30}
          height={30}
        />
      </Link>
    </div>
  )
}

export default Header
