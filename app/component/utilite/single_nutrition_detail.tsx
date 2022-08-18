/* eslint-disable array-callback-return */
import type { SingleLoaderData } from '~/routes/$slug'
import Image from 'remix-image'

interface arrgs {
  heading1: string
  heading2: string
  value: SingleLoaderData
  item?: string
}

const Single_Nutrition_Detail = ({
  heading1,
  heading2,
  value,
  item = '1',
}: arrgs) => {
  const val =
    item === '1'
      ? Object.values(value?.nutritions)
      : item === '2'
      ? Object.values(value?.['Health benefits'])
      : Object.values(value?.summary)
  const key =
    item === '1'
      ? Object.keys(value?.nutritions)
      : Object.keys(value?.['Health benefits'])

  return (
    <>
      <div className='Nutrition_summary_container py-8 '>
        <div
          className={[
            `text-center col-span-full ${
              item === '2'
                ? 'md:col-start-2 md:col-end-3'
                : 'md:col-start-1 md:col-end-2'
            }   md:text-left md:row-start-1 md:row-end-2`,
          ].join(' ')}
        >
          <h1 className='text-center text-4xl uppercase tracking-wider py-8 text-slate-500'>
            {heading1}
          </h1>
          {val.map((el: string, i: number) => {
            if (item === '1') {
              return (
                <div
                  key={i + 1}
                  className='grid grid-cols-2 text-2xl text-gray-400'
                >
                  <div className='p-2 capitalize leading-relaxed'>{key[i]}</div>
                  <div className='p-2 leading-relaxed'>{el}</div>
                </div>
              )
            }
            if (item === '2') {
              return (
                <div
                  key={i + 1}
                  className='grid grid-cols-2 text-2xl text-gray-400'
                >
                  <div className='text-left p-1 lg:px-8 lg:py-6 text-gray-400 leading-relaxed col-span-full'>
                    <span className='text-gray-600 uppercase mr-2 tracking-wider'>
                      {key[i]}:{' '}
                    </span>{' '}
                    {el}
                    <br />
                  </div>
                </div>
              )
            }

            if (item === '3') {
              return (
                <div key={i} className='text-left'>
                  <div className='p-1 lg:px-8 lg:py-6 text-gray-400 leading-relaxed col-span-full text-2xl'>
                    {el}
                    <br />
                  </div>
                </div>
              )
            }
          })}
        </div>

        {/* DISCRIPTION PART!!! */}
        <div
          className={[
            `justify-self-start col-span-full ${
              item === '2'
                ? 'md:col-start-1 md:col-end-2'
                : 'md:col-start-2 md:col-end-3'
            }  md:row-start-1 md:row-end-2`,
          ].join(' ')}
        >
          <h1 className='text-center col-span-full text-4xl uppercase tracking-wider py-8 text-slate-500 '>
            {heading2}
          </h1>

          {item === '1' ? (
            <div className='text-left text-2xl'>
              {value.description.split('\n').map((el, i) => (
                <div key={i * (1 / 2) * 99}>
                  <p className='p-1 lg:px-8 lg:py-6 text-gray-400 leading-relaxed'>
                    {el}
                    <br />
                  </p>
                </div>
              ))}
            </div>
          ) : item === '2' ? (
            <div className=''>
              <div className='grid grid-cols-2 grid-rows-[25rem] lg:grid-rows-[30rem] gap-1 items-center w-full'>
                {value?.images?.map((el, i) => {
                  return (
                    // <img
                    //   className='object-cover block  w-full'
                    //   key={i}
                    //   src={el}
                    //   alt={el}
                    // />
                    <Image
                      key={i}
                      loaderUrl='/api/image'
                      className='rounded-t-md w-full h-full object-fill'
                      src={el}
                      options={{
                        fit: 'fill',
                        position: 'center',
                      }}
                      responsive={[]}
                      dprVariants={[1, 3]}
                    />
                  )
                })}
              </div>
            </div>
          ) : (
            <div className='text-left text-2xl'>
              {value['The bottom line']?.split('\n').map((el, i) => (
                <div key={i * (1 / 2) * 99}>
                  <p className='p-1 lg:px-8 lg:py-6 text-gray-400 leading-relaxed'>
                    {el}
                    <br />
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Single_Nutrition_Detail
