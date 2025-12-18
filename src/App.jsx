import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Félicitations !</h1>
        <p className="text-lg mb-6">
          Votre prime de Noël de <span className="font-bold text-green-500">1500 euros</span> vous sera envoyée le <span className="font-bold text-green-500">25 décembre</span>.
        </p>
        <p className="text-lg">
          Merci d'avoir travaillé avec dévouement pour Publicis cette année.
        </p>
      </div>
    </div>
  )
}

export default App