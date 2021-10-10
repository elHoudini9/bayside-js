const Section = ({ name, fullWidth, children }) => {
  const className = `c-${name} ${
    fullWidth ? 'w-full' : 'max-w-7x mx-auto px-4 sm:px-6 lg:px-8'
  }`
  return <section className={className}>{children}</section>
}

export default Section
