import { useState } from 'react'

export default function StringInverter() {
  const [inputString, setInputString] = useState('')
  const [invertedString, setInvertedString] = useState('')

  const invertString = (str: string) => {
    let inverted = ''
    for (let i = str.length - 1; i >= 0; i--) {
      inverted += str[i]
    }
    return inverted
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInvertedString(invertString(inputString))
  }

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 text-purple-800">Inverter String</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          placeholder="Digite uma string"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition-colors">
          Inverter
        </button>
      </form>
      <p className="mt-2 text-gray-700">String invertida: <span className="font-bold text-purple-600">{invertedString}</span></p>
    </div>
  )
}

