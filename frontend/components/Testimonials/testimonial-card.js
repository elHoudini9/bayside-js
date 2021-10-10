import { getStrapiMedia } from '../../lib/media'

const TestimonialCard = ({ title, description, image }) => {
  const imgSrc = getStrapiMedia(image)
  return (
    <div className="flex flex-col">
      <img
        className="border-2 border-white rounded-full h-32 w-32 object-cover"
        src={imgSrc}
        alt=""
      />
      <div className="">{title}</div>
      <p>{description}</p>
    </div>
  )
}

export default TestimonialCard
