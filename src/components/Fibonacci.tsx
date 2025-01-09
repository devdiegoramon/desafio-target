import { useState } from 'react'

export default function FibonacciChecker() {
  const [number, setNumber] = useState('')
  const [result, setResult] = useState('')

  const checkFibonacci = (num: number) => {
    let a = 0
    let b = 1
    while (b < num) {
      let temp = b
      b = a + b
      a = temp
    }
    return b === num
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const num = parseInt(number)
    if (isNaN(num)) {
      setResult('Por favor, insira um número válido.')
    } else {
      setResult(
        checkFibonacci(num)
          ? `${num} pertence à sequência de Fibonacci.`
          : `${num} não pertence à sequência de Fibonacci.`
      )
    }
  }

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 text-green-800">Fibonacci Consulta</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Digite um número"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors">
          Verificar
        </button>
      </form>
      <p className="mt-2 text-gray-700">{result}</p>
    </div>
  )
}

