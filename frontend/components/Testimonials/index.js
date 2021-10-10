import Slider from 'react-slick'
import { getStrapiMedia } from '../../lib/media'
import SliderDots from '../SliderDots'
import TestimonialItem from './testimonial-item'

// Docs: https://react-slick.neostack.com/docs/api/#methods

const Testimonials = ({ title, description, image, items }) => {
  const imgSrc = getStrapiMedia(image)

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    appendDots: SliderDots,
    dotsClass: 'flex items-center justify-center absolute bottom-10 inset-x-0',
  }

  return (
    <section className="bs-testimonials mb-20 text-center h-96 relative py-10 text-white">
      {image && (
        <div className="absolute inset-0">
          <img
            className="object-cover h-full w-full filter brightness-50"
            src={imgSrc}
            alt=""
          />
        </div>
      )}
      <div className="relative h-full">
        {title && <h2 className="text-5xl">{title}</h2>}
        {description && <p className="mt-4 mb-6">{description}</p>}
        <Slider {...settings}>
          {items.map((item) => (
            <TestimonialItem key={item.title} {...item} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
