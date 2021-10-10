const Container = ({ children, fullWidth }) => (
  <div
    className={`${
      fullWidth ? 'w-full' : 'max-w-7xl'
    } mx-auto px-4 sm:px-6 lg:px-8`}
  >
    {children}
  </div>
)

export default Container
