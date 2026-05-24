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

  const formatResult = (num: number): string => {
    const str = num.toString()
    if (str.length <= 9) return str

    const precision = num < 0 ? 8 : 9
    let formatted = num.toPrecision(precision)

    if (formatted.includes('.')) {
      formatted = parseFloat(formatted).toString()
    }

    return formatted.slice(0, 9)
  }

  const addDigit = (digit: string) => {
    setState((prev) => {
      if (prev.shouldResetDisplay || prev.currentValue === 'ERROR') {
        return {
          ...prev,
          currentValue: digit === '.' ? '0.' : digit,
          shouldResetDisplay: false
        }
      }

      if (prev.currentValue.length >= 9) return prev
      if (digit === '.' && prev.currentValue.includes('.')) return prev

      const newValue = prev.currentValue === '0' && digit !== '.'
        ? digit
        : prev.currentValue + digit

      return { ...prev, currentValue: newValue }
    })
  }

  const toggleSign = () => {
    setState((prev) => {
      if (prev.currentValue === '0' || prev.currentValue === 'ERROR') return prev

      const newValue = prev.currentValue.startsWith('-')
        ? prev.currentValue.slice(1)
        : '-' + prev.currentValue

      if (newValue.length > 9) return prev

      return { ...prev, currentValue: newValue }
    })
  }

  const solve = (first: number, second: number, op: Operator): string => {
    let result: number
    switch (op) {
      case '+': result = first + second; break
      case '-': result = first - second; break
      case '*': result = first * second; break
      case '/': result = second === 0 ? 0 : first / second; break
      case '%': result = first % second; break
      default: return second.toString()
    }
    return formatResult(result)
  }

  const applyOperator = (nextOperator: Operator) => {
    setState((prev) => {
      if (prev.currentValue === 'ERROR') return prev

      if (prev.operator && !prev.shouldResetDisplay) {
        const result = solve(
          parseFloat(prev.previousValue || '0'),
          parseFloat(prev.currentValue),
          prev.operator
        )
        return {
          currentValue: result,
          operator: nextOperator,
          previousValue: result,
          shouldResetDisplay: true
        }
      }

      return {
        ...prev,
        operator: nextOperator,
        previousValue: prev.currentValue,
        shouldResetDisplay: true
      }
    })
  }

  const execute = () => {
    setState((prev) => {
      if (!prev.operator || prev.shouldResetDisplay || prev.currentValue === 'ERROR') return prev

      const result = solve(
        parseFloat(prev.previousValue || '0'),
        parseFloat(prev.currentValue),
        prev.operator
      )

      return {
        currentValue: result,
        operator: null,
        previousValue: null,
        shouldResetDisplay: true
      }
    })
  }

  const clear = () => {
    setState({
      currentValue: '0',
      operator: null,
      previousValue: null,
      shouldResetDisplay: false
    })
  }

  return {
    ...state,
    addDigit,
    toggleSign,
    applyOperator,
    execute,
    clear
  }
}
