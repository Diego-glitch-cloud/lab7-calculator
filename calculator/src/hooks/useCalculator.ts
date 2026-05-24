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

  const addDigit = (digit: string) => {
    setState((prev) => {
      if (prev.shouldResetDisplay) {
        return {
          ...prev,
          currentValue: digit,
          shouldResetDisplay: false
        }
      }

      if (prev.currentValue.length >= 9) return prev

      const newValue = prev.currentValue === '0' ? digit : prev.currentValue + digit
      return { ...prev, currentValue: newValue }
    })
  }

  return {
    ...state,
    addDigit
  }
}
