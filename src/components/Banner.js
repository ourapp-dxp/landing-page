import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  return (
    <div className="flex items-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm/6 text-white">
      🕹️ ourapp.studio is currently in a 'pre-go live' stage.
      </p>
      <div className="flex flex-1 justify-end">
      </div>
    </div>
  )
}