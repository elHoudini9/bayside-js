import Navbar from './Navbar'

const Layout = ({ children, navigation, seo }) => (
  <>
    <Navbar navigation={navigation} />
    {children}
  </>
)

export default Layout
