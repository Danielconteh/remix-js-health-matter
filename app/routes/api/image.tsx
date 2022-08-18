import type { LoaderFunction } from '@remix-run/server-runtime'
import { imageLoader, DiskCache } from 'remix-image/server'

const config = {
  selfUrl: 'http://localhost:3000',
  cache: new DiskCache(),
}

export const loader: LoaderFunction = ({ request }) => {
  console.log('called!!')
  return imageLoader(config, request)
}
