import SomaCalculator from './components/Soma'
import FibonacciChecker from './components/Fibonacci'
import FaturamentoCalculator from './components/Faturamento'
import PercentualCalculator from './components/Percentual'
import StringInverter from './components/Inverter'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Target App</h1>
          <div className="space-y-6">
            <SomaCalculator />
            <FibonacciChecker />
            <FaturamentoCalculator />
            <PercentualCalculator />
            <StringInverter />
          </div>
        </div>
      </div>
    </div>
  )
}

