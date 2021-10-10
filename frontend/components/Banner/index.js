const Banner = ({ title, description, btnLabel, href }) => {
  return (
    <section className="bs-banner mb-20 p-20 text-center text-white bg-blue-500">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3">
          {title && <h2 className="text-5xl">{title}</h2>}
          {description && <p className="mt-4">{description}</p>}
        </div>
        <div className="w-full md:w-1/3 mt-10 md:mt-0">
          {href && (
            <a
              className="border-2 border-white rounded-md px-8 py-4 text-xl"
              href={href}
            >
              {btnLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Banner
