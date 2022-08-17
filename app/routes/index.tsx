import type { LinksFunction, LoaderFunction } from '@remix-run/node'
import Banner from '~/component/banner'
import Header from '~/component/header'
import Fruit from '~/component/fruits'

import indexCss from '~/style/base.css'
import bannerCss from '~/style/banner.css'
import fruitsCss from '~/style/fruits.css'

import data from '~/data/fruit.json'
import Footer from '~/component/footer'
import { json, useLoaderData } from 'superjson-remix'

export type LoaderData = typeof data

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: indexCss },
    { rel: 'stylesheet', href: bannerCss },
    { rel: 'stylesheet', href: fruitsCss },
  ]
}

export const loader: LoaderFunction = async () => {
  if (data) return json(data)
  return null
}

export default function Index() {
  const res: LoaderData = useLoaderData<LoaderData>()

  return (
    <>
      <Header />
      <Banner />
      <Fruit data={res} />
      <Footer />
    </>
  )
}
