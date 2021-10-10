import { getStrapiURL } from './api'

export function getStrapiMedia(media) {
  if (!media) return ''
  const imageUrl = media.url.startsWith('/')
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}
