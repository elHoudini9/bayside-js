import { AcademicCapIcon } from '@heroicons/react/outline'
const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center bg-blue-500 rounded-full h-24 w-24 text-white">
        <AcademicCapIcon className="h-10 w-10" />
      </div>
      <h4 className="mt-6 text-2xl font-bold">{title}</h4>
      <p className="mt-2">{description}</p>
    </div>
  )
}

export default FeatureItem
