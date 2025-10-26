import { useState } from 'react'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
import SoftwareCard from './SoftwareCard'

export default function SoftwareList({
  software,
  selectedSoftware,
  toggleSoftware,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}) {
  const [viewMode, setViewMode] = useState('grid')

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="mt-4">
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Available Software ({software.length})
          </h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>View:</span>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-700' : ''}`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-700' : ''}`}
            >
              List
            </button>
          </div>
        </div>

        {software.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No software found matching your criteria
            </p>
          </div>
        ) : (
          <div className={`space-y-3 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-3' : ''}`}>
            {software.map(item => (
              <SoftwareCard
                key={item.id}
                software={item}
                isSelected={selectedSoftware.has(item.id)}
                onToggle={toggleSoftware}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

