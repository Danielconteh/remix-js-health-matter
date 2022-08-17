import slugify from 'react-slugify'

import { Link } from '@remix-run/react'
import type { LoaderData } from '~/routes'

const Fruits = (props: { data: LoaderData }) => {
  const { data } = props
  return (
    <>
      <main>
        <hr />
        <div className='flex justify-center py-10 text-center capitalize text-4xl tracking-wider text-gray-500'>
          <img
            src='/banana.svg'
            alt=''
            width={20}
            height={20}
            className='mr-2'
          />
          <span>fresh fruits</span>
          <img
            src='/red-apple.svg'
            alt=''
            width={20}
            height={20}
            className='ml-2'
          />
        </div>
        <hr />
        <div className='fruits_header  text-4xl text-center py-7 relative p-2 lg:p-0'>
          <div className='fruits_grid_container'>
            {data.map((el, i) => {
              return (
                <div
                  key={i}
                  className='fruits_items mt-6 shadow-lg text-xl text-gray-500'
                >
                  <div className='col-span-full text-center h-[25rem]'>
                    <img
                      className='rounded-t-md w-full h-full'
                      src={el?.bg_img}
                      alt={el?.name}
                    />
                  </div>
                  <div className='col-span-full text-center text-2xl uppercase tracking-widest bg-slate-500 text-slate-200 w-1/2 mx-auto p-4 translate-y-[-2rem] rounded-md'>
                    <div>{el.name}</div>
                  </div>
                  <div className='capitalize tracking-wider text-gray-800 p-3'>
                    genus:
                  </div>
                  <div className='tracking-wide p-3 self-start'>{el.genus}</div>
                  <div className='capitalize tracking-wider text-gray-800 p-3'>
                    family:
                  </div>
                  <div className='tracking-wide p-3'>{el.family}</div>
                  <div className='capitalize tracking-wider text-gray-800 p-3'>
                    order:
                  </div>
                  <div className='tracking-wide p-3'>{el.order}</div>

                  <div className='col-span-full my-4'>
                    <Link
                      className='block p-4 capitalize bg-slate-500 w-1/2 mx-auto rounded-md text-slate-200 tracking-widest'
                      to={`/${slugify(el?.name)}`}
                    >
                      learn more
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default Fruits
