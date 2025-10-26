export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img 
                src="/logo.jpg" 
                alt="QuickInstall Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">QuickInstall</h1>
              <p className="text-sm text-gray-600">Install multiple apps with one script</p>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  )
}


