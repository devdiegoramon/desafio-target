import { useState, useEffect } from 'react'

export default function SomaCalculator() {
  const [soma, setSoma] = useState(0)

  useEffect(() => {
    let indice = 13
    let k = 0
    let somaTemp = 0

    while (k < indice) {
      k = k + 1
      somaTemp = somaTemp + k
    }

    setSoma(somaTemp)
  }, [])

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 text-blue-800">Soma Desafio</h2>
      <p className="text-gray-700">O valor final da variável SOMA é: <span className="font-bold text-blue-600">{soma}</span></p>
    </div>
  )
}

