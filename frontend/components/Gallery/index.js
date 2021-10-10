import GalleryItem from './gallery-item'

const Gallery = ({ title, description, items }) => {
  return (
    <section className="pm-gallery mb-20 text-center">
      {title && <h2 className="text-5xl">{title}</h2>}
      {description && <p className="mt-4 mb-6">{description}</p>}
      <div className="flex flex-wrap mt-6">
        {items.map((item) => (
          <GalleryItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Gallery
