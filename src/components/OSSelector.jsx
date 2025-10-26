export default function OSSelector({ selectedOS, setSelectedOS }) {
  const osOptions = [
    { value: 'windows', label: 'Windows', icon: '🪟' },
    { value: 'macos', label: 'macOS', icon: '🍎' },
    { value: 'linux', label: 'Linux', icon: '🐧' }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">
        Select Your Operating System
      </h2>
      <div className="flex flex-wrap gap-3">
        {osOptions.map(os => (
          <button
            key={os.value}
            onClick={() => setSelectedOS(os.value)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 transition-all ${
              selectedOS === os.value
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
            }`}
          >
            <span className="text-2xl">{os.icon}</span>
            <span className="font-medium">{os.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

