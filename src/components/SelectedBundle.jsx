import { softwareData } from '../data/software'

export default function SelectedBundle({ selectedSoftware = [], selectedOS }) {
  const generateScript = () => {
    const scripts = {
      windows: {
        header: '@echo off\nREM Software Bundle Installer\nREM Generated automatically\n\n',
        footer: '\necho All software installed successfully!\npause'
      },
      macos: {
        header: '#!/bin/bash\n# Software Bundle Installer\n# Generated automatically\n\n',
        footer: '\necho "All software installed successfully!"'
      },
      linux: {
        header: '#!/bin/bash\n# Software Bundle Installer\n# Generated automatically\n\nset -e\n\n',
        footer: '\necho "All software installed successfully!"'
      }
    }

    let script = scripts[selectedOS].header
    script += `echo "Installing ${selectedSoftware.length} software packages...\n"\n\n`

    selectedSoftware.forEach(software => {
      const installCommand = software.install[selectedOS]
      if (installCommand) {
        script += `echo "Installing ${software.name}..."\n`
        script += `${installCommand}\n`
        script += 'echo ""\n'
      }
    })

    script += scripts[selectedOS].footer

    return script
  }

  const downloadScript = () => {
    const script = generateScript()
    const extension = selectedOS === 'windows' ? 'bat' : 'sh'
    const filename = `install-bundle.${extension}`
    const blob = new Blob([script], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Your Bundle
        </h2>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          {selectedSoftware.length} selected
        </span>
      </div>

      {selectedSoftware.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
          <div className="text-5xl mb-3">📦</div>
          <p className="text-gray-500">
            Select software to create your bundle
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-2 mb-6 max-h-96 overflow-y-auto">
            {selectedSoftware.map(item => (
              <div
                key={item.id}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{item.name}</p>
                  <p className="text-xs text-gray-600">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={downloadScript}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            ⬇️ Download Install Script
          </button>

          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Review the script before running it. 
              Some installations may require administrator privileges.
            </p>
          </div>

          {selectedOS === 'macos' && (
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>For macOS:</strong> Make the script executable with:<br/>
                <code className="bg-white px-2 py-1 rounded text-xs">chmod +x install-bundle.sh</code>
              </p>
            </div>
          )}

          {selectedOS === 'linux' && (
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>For Linux:</strong> Make the script executable with:<br/>
                <code className="bg-white px-2 py-1 rounded text-xs">chmod +x install-bundle.sh</code>
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

