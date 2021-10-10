import TestimonialCard from './testimonial-card'

const TestimonialItem = ({ title, description, image, quote }) => {
  return (
    <div className="bs-gallery-item flex justify-center items-center container">
      <div className="flex items-center justify-center">
        <div className="flex-initial flex-shrink-0">
          <TestimonialCard
            title={title}
            descripiton={description}
            image={image}
          />
        </div>
        <div className="m-10 italic">&quot;{quote}&quot;</div>
      </div>
    </div>
  )
}

export default TestimonialItem
