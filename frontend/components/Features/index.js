import FeatureItem from './feature-item'

const getGridColumnClassName = (count) => {
  switch (count) {
    case 1:
      return 'grid-cols-1'
    case 2:
      return 'grid-cols-1'
    case 3:
      return 'grid-cols-1 md:grid-cols-3'
    default:
      return 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4'
  }
}

const Features = ({ title, description, items }) => {
  const gridClassNames = getGridColumnClassName(items.length)
  return (
    <section className="bs-features mb-20 text-center container">
      {title && <h2 className="text-5xl">{title}</h2>}
      {description && <p className="mt-4 mb-6">{description}</p>}
      <div className={`mt-10 grid ${gridClassNames} gap-10`}>
        {items.map((item) => (
          <FeatureItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Features
