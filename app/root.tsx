import NProgress from 'nprogress'
import nProgressStyles from 'nprogress/nprogress.css'
// end of Nprogress import
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetchers,
  useTransition,
} from '@remix-run/react'
import styles from './tailwind.css'
import { useEffect, useMemo } from 'react'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Fruit App',
  viewport: 'width=device-width,initial-scale=1',
})

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'stylesheet', href: nProgressStyles },
  ]
}

export default function App() {
  // Nprogress setup
  let transition = useTransition()

  let fetchers = useFetchers()

  /**
   * This gets the state of every fetcher active on the app and combine it with
   * the state of the global transition (Link and Form), then use them to
   * determine if the app is idle or if it's loading.
   * Here we consider both loading and submitting as loading.
   */

  let state = useMemo<'idle' | 'loading'>(
    function getGlobalState() {
      let states = [
        transition.state,
        ...fetchers.map((fetcher) => fetcher.state),
      ]
      if (states.every((state) => state === 'idle')) return 'idle'
      return 'loading'
    },
    [transition.state, fetchers]
  )

  useEffect(() => {
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    if (state === 'loading') NProgress.start()
    // when the state is idle then we can to complete the progress bar
    if (state === 'idle') NProgress.done()
  }, [state, transition.state])

  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
