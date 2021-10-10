import { getStrapiMedia } from '../../lib/media'

const GalleryItem = ({ title, description, image, href }) => {
  const imgSrc = getStrapiMedia(image)
  return (
    <div className="pm-gallery-item relative group w-full h-80 md:w-1/2 lg:w-1/4 overflow-hidden">
      <img
        className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-125 transition-transform ease-in duration-200"
        src={imgSrc}
      />
      <div className="flex items-center justify-center text-white bg-red-500 bg-opacity-50 absolute w-full top-96 bottom-0 group-hover:top-0 transition-all ease-out duration-300">
        <a
          className="text-xl px-4 py-2 border border-white rounded-md"
          href={href}
        >
          {title}
        </a>
      </div>
    </div>
  )
}

export default GalleryItem
