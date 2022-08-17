/* eslint-disable react/jsx-pascal-case */
// import { useLoaderData } from '@remix-run/react'
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import Banner from '~/component/banner'
import Header from '~/component/header'
import data from '~/data/fruit.json'
import slugify from 'react-slugify'
import { json, useLoaderData } from 'superjson-remix'

import indexCss from '~/style/base.css'
import bannerCss from '~/style/banner.css'
import NutritionSummaryCss from '~/style/Nutrition_summary.css'

import Nutrition_summary from '~/component/single_fruit/nutrition_summary'
import Footer from '~/component/footer'

export const meta: MetaFunction = ({ data, parentsData, location }) => {
  // console.log(data)
  return {
    charset: 'utf-8',
    title: `FRUIT | ${location?.pathname.slice(1).toUpperCase()}`,
    viewport: 'width=device-width,initial-scale=1',
  }
}

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: indexCss },
    { rel: 'stylesheet', href: bannerCss },
    { rel: 'stylesheet', href: NutritionSummaryCss },
  ]
}

export type SingleLoaderData = typeof data[0]

export const loader: LoaderFunction = async ({ params }) => {
  if (data) {
    return json(data.filter((el) => slugify(el?.name) === params?.slug))
  }
  return null
}

const SingleFruit = () => {
  const res = useLoaderData<SingleLoaderData[]>()
  console.log(res[0]?.bg_img)

  return (
    <>
      <Header />
      <Banner bannerImg={res[0]?.bg_img} bannerImgAlt='banner-image' />
      <Nutrition_summary data={res} />
      <Footer />
    </>
  )
}

export default SingleFruit
