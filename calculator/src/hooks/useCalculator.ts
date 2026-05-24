import { useState } from 'react'

export type Operator = '+' | '-' | '*' | '/' | '%' | null

interface CalculatorState {
  currentValue: string
  operator: Operator
  previousValue: string | null
  shouldResetDisplay: boolean
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    currentValue: '0',
    operator: null,
    previousValue: null,
    shouldResetDisplay: false
  })

  return {
    ...state
  }
}
