import { useState } from 'react'
import Header from './components/Header.jsx'
import OSSelector from './components/OSSelector.jsx'
import SoftwareList from './components/SoftwareList.jsx'
import SelectedBundle from './components/SelectedBundle.jsx'
import { softwareData } from './data/software'

function App() {
  const [selectedOS, setSelectedOS] = useState('windows')
  const [selectedSoftware, setSelectedSoftware] = useState(new Set())
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const toggleSoftware = (softwareId) => {
    const newSelected = new Set(selectedSoftware)
    if (newSelected.has(softwareId)) {
      newSelected.delete(softwareId)
    } else {
      newSelected.add(softwareId)
    }
    setSelectedSoftware(newSelected)
  }

  const filteredSoftware = softwareData.filter(software => {
    const matchesPlatform = software.platforms.includes(selectedOS)
    const matchesSearch = software.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || software.category === selectedCategory
    
    return matchesPlatform && matchesSearch && matchesCategory
  })

  const selectedSoftwareList = softwareData.filter(sw => selectedSoftware.has(sw.id))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Create Your Software Bundle
          </h1>
          <p className="text-gray-600 text-lg">
            Select the software you want to install and generate a custom installer script
          </p>
        </div>

        <OSSelector selectedOS={selectedOS} setSelectedOS={setSelectedOS} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <SoftwareList
              software={filteredSoftware}
              selectedSoftware={selectedSoftware}
              toggleSoftware={toggleSoftware}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          <div className="lg:col-span-1">
            <SelectedBundle
              selectedSoftware={selectedSoftwareList}
              selectedOS={selectedOS}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
