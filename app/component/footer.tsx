import { Link } from '@remix-run/react'

const Footer = () => {
  return (
    <div className='pt-10 flex flex-col items-center justify-center capitalize text-2xl  bg-slate-500 text-slate-200'>
      <Link prefetch='intent' to='/'>
        <img
          className='mr-6 sm:mr-0 right-2 mb-3'
          src='/logo.svg'
          alt=''
          width={30}
          height={30}
        />
      </Link>
      <p className='py-4 '>
        © {new Date().getFullYear()} health matter. Built with remix js.
      </p>
      <a
        className='flex items-center'
        href='https://danico.netlify.app/'
        target='_blank'
        rel='noreferrer'
      >
        <p className='py-6 tracking-wider mr-1'>created by</p>{' '}
        <p className='py-6 tracking-wider'>daniel conteh</p>
      </a>
    </div>
  )
}

export default Footer
