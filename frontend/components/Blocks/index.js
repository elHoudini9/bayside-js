import Carousel from '../Carousel'
import Features from '../Features'
import Gallery from '../Gallery'
import Testimonials from '../Testimonials'
import Section from '../Section'
import Banner from '../Banner'

const blocksMap = {
  'blocks.carousel': {
    Component: Carousel,
  },
  'blocks.features': {
    Component: Features,
  },
  'blocks.image-gallery': {
    Component: Gallery,
  },
  'blocks.testimonials': {
    Component: Testimonials,
  },
  'blocks.banner': {
    Component: Banner,
  },
}

const Blocks = ({ blocks }) => {
  return blocks.map((block, index) => {
    const id = block.__component
    const instance = blocksMap[id]
    if (!instance) return null
    const { Component } = instance
    const key = `${id}-${index}`
    return <Component {...block} key={key} />
  })
}

export default Blocks
