import { useState, useEffect } from 'react'

interface EstadoFaturamento {
  estado: string
  valor: number
}

export default function PercentualCalculator() {
  const [percentuais, setPercentuais] = useState<EstadoFaturamento[]>([])

  useEffect(() => {
    const faturamentoPorEstado: EstadoFaturamento[] = [
      { estado: 'SP', valor: 67836.43 },
      { estado: 'RJ', valor: 36678.66 },
      { estado: 'MG', valor: 29229.88 },
      { estado: 'ES', valor: 27165.48 },
      { estado: 'Outros', valor: 19849.53 }
    ]

    const totalFaturamento = faturamentoPorEstado.reduce((acc, curr) => acc + curr.valor, 0)
    
    const percentuaisCalculados = faturamentoPorEstado.map(estado => ({
      ...estado,
      valor: (estado.valor / totalFaturamento) * 100
    }))

    setPercentuais(percentuaisCalculados)
  }, [])

  return (
    <div className="bg-red-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 text-red-800">Percentual Estados</h2>
      <ul className="space-y-1">
        {percentuais.map(estado => (
          <li key={estado.estado} className="text-gray-700">
            <span className="font-semibold">{estado.estado}:</span> <span className="text-red-600">{estado.valor.toFixed(2)}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

