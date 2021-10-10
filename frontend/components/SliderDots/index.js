const SliderDots = (dots) => (
  <ul className="">
    {dots.map((dot, index) => (
      <li
        key={index}
        onClick={dot.props.children.props.onClick}
        className={`border-2 rounded-full border-white h-3 w-3 hover:bg-white mx-1 cursor-pointer ${
          dot.props.className === 'slick-active' ? 'bg-white' : ''
        }`}
      ></li>
    ))}
  </ul>
)

export default SliderDots
