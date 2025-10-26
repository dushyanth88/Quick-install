export default function SoftwareCard({ software, isSelected, onToggle }) {
  return (
    <div
      className={`border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
      onClick={() => onToggle(software.id)}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggle(software.id)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-2xl">{software.icon}</span>
            <h3 className="font-semibold text-gray-900">{software.name}</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">{software.description}</p>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
            {software.category}
          </span>
        </div>
      </div>
    </div>
  )
}

