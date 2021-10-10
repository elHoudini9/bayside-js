import Slider from 'react-slick'
import SliderDots from '../SliderDots'
import CarouselItem from './carousel-item'

// Docs: https://react-slick.neostack.com/docs/api/#methods

const Carousel = ({ title, description, items }) => {
  const settings = {
    dots: true,
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
    <section className="bs-carousel mb-20 text-center">
      {title && <h2 className="text-5xl">{title}</h2>}
      {description && <p className="mt-4 mb-6">{description}</p>}
      <Slider {...settings}>
        {items.map(({ title, description, image, href }) => (
          <CarouselItem
            key={title}
            title={title}
            description={description}
            image={image}
            href={href}
          />
        ))}
      </Slider>
    </section>
  )
}

export default Carousel
