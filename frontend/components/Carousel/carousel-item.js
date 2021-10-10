import { getStrapiMedia } from '../../lib/media'
import Image from '../image'

const CarouselItem = ({ title, description, image, href }) => {
  const imgSrc = getStrapiMedia(image)
  return (
    <div className="bs-gallery-item h-96 sm:h-50vh overflow-hidden">
      <Image className="w-full h-full object-cover" src={imgSrc} alt="" />
    </div>
  )
}

export default CarouselItem
