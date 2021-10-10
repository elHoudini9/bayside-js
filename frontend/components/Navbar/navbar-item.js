import classNames from '../../lib/utils/classNames'

const NavbarItem = ({ active = false, mobile = false, title, href }) => {
  const className = classNames([
    mobile ?? 'hover:bg-gray-50',
    (active && !mobile) ?? 'border-indigo-500 text-gray-900',
    (active && mobile) ?? 'bg-indigo-50 border-indigo-500 text-indigo-700',
    'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium',
  ])

  return (
    <a href={href} className={className}>
      {title}
    </a>
  )
}

export default NavbarItem
