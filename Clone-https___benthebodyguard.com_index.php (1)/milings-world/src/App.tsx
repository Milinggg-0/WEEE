import { useState } from 'react'

function App() {
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  const buildings = [
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Creative works and projects',
      color: 'bg-purple-400',
      height: 'h-48',
      content: {
        title: 'Portfolio & Projects',
        items: ['Digital Art', 'Web Design', 'Illustrations', 'Photography']
      }
    },
    {
      id: 'about',
      title: 'About',
      description: 'Story and background',
      color: 'bg-purple-300',
      height: 'h-56',
      content: {
        title: 'About MiLing',
        items: ['Creative Designer', 'Digital Artist', 'Dream Builder', 'World Creator']
      }
    },
    {
      id: 'journal',
      title: 'Journal',
      description: 'Thoughts and experiences',
      color: 'bg-violet-400',
      height: 'h-40',
      content: {
        title: 'Creative Journal',
        items: ['Daily Sketches', 'Design Process', 'Inspiration Notes', 'Project Stories']
      }
    },
    {
      id: 'contact',
      title: 'Connect',
      description: 'Get in touch',
      color: 'bg-purple-200',
      height: 'h-52',
      content: {
        title: 'Let\'s Connect',
        items: ['Email Me', 'Social Media', 'Collaborations', 'Say Hello']
      }
    },
    {
      id: 'gallery',
      title: 'Gallery',
      description: 'Visual showcase',
      color: 'bg-purple-500',
      height: 'h-44',
      content: {
        title: 'Art Gallery',
        items: ['Latest Works', 'Favorites', 'Experiments', 'Collections']
      }
    }
  ]

  const handleBuildingClick = (building: typeof buildings[0]) => {
    setSelectedBuilding(building.id)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedBuilding(null)
  }

  const selectedBuildingData = buildings.find(b => b.id === selectedBuilding)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-purple-200 overflow-hidden relative">
      {/* Animated Clouds */}
      <div className="absolute inset-0 z-0">
        <div className="cloud cloud-1 absolute top-10 left-10 w-20 h-12 bg-white rounded-full opacity-80 animate-float" />
        <div className="cloud cloud-2 absolute top-20 right-20 w-16 h-8 bg-white rounded-full opacity-70 animate-float-delayed" />
        <div className="cloud cloud-3 absolute top-32 left-1/3 w-24 h-10 bg-white rounded-full opacity-60 animate-float" />
        <div className="cloud cloud-4 absolute top-16 right-1/3 w-18 h-9 bg-white rounded-full opacity-75 animate-float-delayed" />
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-12 px-4">
        <h1 className="text-6xl font-bold text-purple-800 mb-4 tracking-wide">
          MiLing's World
        </h1>
        <p className="text-xl text-purple-600 font-medium">
          A whimsical journey through creativity and imagination
        </p>
        <div className="mt-6 flex justify-center">
          {/* Character Element */}
          <div className="character w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center animate-bounce">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Cityscape */}
      <div className="relative z-10 px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-end gap-4 flex-wrap">
            {buildings.map((building, index) => (
              <div
                key={building.id}
                className={`building relative ${building.color} ${building.height} w-24 md:w-32 rounded-t-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-lg hover:shadow-xl`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
                onClick={() => handleBuildingClick(building)}
              >
                {/* Building Windows */}
                <div className="absolute inset-2 grid grid-cols-2 gap-1">
                  <div className="bg-purple-100 rounded opacity-80" />
                  <div className="bg-purple-100 rounded opacity-60" />
                  <div className="bg-purple-100 rounded opacity-70" />
                  <div className="bg-purple-100 rounded opacity-80" />
                </div>

                {/* Building Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-semibold text-purple-700 whitespace-nowrap">
                  {building.title}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-t-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedBuildingData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4 transform animate-scale-in shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-purple-800">
                {selectedBuildingData.content.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-purple-600 hover:text-purple-800 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="space-y-3">
              {selectedBuildingData.content.items.map((item) => (
                <div
                  key={item}
                  className="p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer"
                >
                  <span className="text-purple-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={closeModal}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-purple-600">
        <p className="text-sm">Welcome to MiLing's imaginative universe ✨</p>
      </footer>
    </div>
  )
}

export default App
