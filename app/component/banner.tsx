import React from 'react'

const Banner = ({
  bannerImg = '/banner.jpg',
  bannerImgAlt = 'backgroud_img',
}) => {
  return (
    <>
      <div className='banner flex items-center text-gray-300 w-full h-[45vh] sm:h-[50vh] md:h-[75vh] relative'>
        <div className='text-4xl md:text-6xl ml-6 capitalize leading-[3.35rem] sm:leading-[4rem] md:leading-[4.5rem]'>
          <p>welcome to </p>
          <p>health matter</p>
          <img
            className='object-cover absolute left-0 right-0 top-0 z-[-1] w-full h-full bg-center'
            src={bannerImg}
            alt={bannerImgAlt}
          />
        </div>
      </div>
      <hr />
    </>
  )
}

export default Banner
