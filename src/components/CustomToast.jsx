import {toast} from "react-hot-toast";

export const CustomToast = ({ t, title, description }) => (
  <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="ml-3 flex-1">
          <p className="text-lg font-medium text-gray-900">
            {title}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full rounded-none p-4 flex items-center justify-center text-sm font-medium text-blue-600 hover:bg-gray-100 focus:outline-none"
      >
        Close
      </button>
    </div>
  </div>
)
