import { useState, useEffect } from 'react'

interface FaturamentoDiario {
  dia: number
  valor: number
}

export default function FaturamentoCalculator() {
  const [menorValor, setMenorValor] = useState(0)
  const [maiorValor, setMaiorValor] = useState(0)
  const [diasAcimaDaMedia, setDiasAcimaDaMedia] = useState(0)

  useEffect(() => {
    const faturamentoData: FaturamentoDiario[] = [
      { dia: 1, valor: 22174.1664 },
      { dia: 2, valor: 24537.6698 },
      { dia: 3, valor: 26139.6134 },
      { dia: 4, valor: 0.0 },
      { dia: 5, valor: 0.0 },
      { dia: 6, valor: 26742.6612 },
      { dia: 7, valor: 0.0 },
      { dia: 8, valor: 42889.2258 },
      { dia: 9, valor: 46251.174 },
      { dia: 10, valor: 11191.4722 },
      { dia: 11, valor: 0.0 },
      { dia: 12, valor: 0.0 },
      { dia: 13, valor: 3847.4823 },
      { dia: 14, valor: 373.7838 },
      { dia: 15, valor: 2659.7563 },
      { dia: 16, valor: 48924.2448 },
      { dia: 17, valor: 18419.2614 },
      { dia: 18, valor: 0.0 },
      { dia: 19, valor: 0.0 },
      { dia: 20, valor: 35240.1826 },
      { dia: 21, valor: 43829.1667 },
      { dia: 22, valor: 18235.6852 },
      { dia: 23, valor: 4355.0662 },
      { dia: 24, valor: 13327.1025 },
      { dia: 25, valor: 0.0 },
      { dia: 26, valor: 0.0 },
      { dia: 27, valor: 25681.8318 },
      { dia: 28, valor: 1718.1221 },
      { dia: 29, valor: 13220.495 },
      { dia: 30, valor: 8414.61 }
    ]

    const valoresFaturamento = faturamentoData.filter(f => f.valor > 0).map(f => f.valor)
    setMenorValor(Math.min(...valoresFaturamento))
    setMaiorValor(Math.max(...valoresFaturamento))

    const mediaMensal = valoresFaturamento.reduce((acc, curr) => acc + curr, 0) / valoresFaturamento.length
    const diasAcima = valoresFaturamento.filter(valor => valor > mediaMensal).length
    setDiasAcimaDaMedia(diasAcima)
  }, [])

  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 text-yellow-800">Faturamento</h2>
      <p className="text-gray-700">Menor valor de faturamento: <span className="font-bold text-yellow-600">R$ {menorValor.toFixed(2)}</span></p>
      <p className="text-gray-700">Maior valor de faturamento: <span className="font-bold text-yellow-600">R$ {maiorValor.toFixed(2)}</span></p>
      <p className="text-gray-700">Número de dias acima da média mensal: <span className="font-bold text-yellow-600">{diasAcimaDaMedia}</span></p>
    </div>
  )
}

