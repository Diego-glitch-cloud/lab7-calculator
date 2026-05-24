import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useCalculator } from './useCalculator'

describe('useCalculator Hook - Character Limit', () => {
  it('should not exceed 9 characters on input', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      '123456789012'.split('').forEach(d => result.current.addDigit(d))
    })

    expect(result.current.currentValue).toBe('123456789')
    expect(result.current.currentValue.length).toBe(9)
  })

  it('should count decimal point as a character in the 9-limit', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      '1.23456789'.split('').forEach(d => result.current.addDigit(d))
    })

    expect(result.current.currentValue).toBe('1.2345678')
    expect(result.current.currentValue.length).toBe(9)
  })
})

describe('useCalculator Hook - Chaining', () => {
  it('should chain operations sequentially (2 + 3 * 4 = 20)', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.addDigit('2')
      result.current.applyOperator('+')
      result.current.addDigit('3')
      result.current.applyOperator('*')
    })
    
    expect(result.current.currentValue).toBe('5')
    
    act(() => {
      result.current.addDigit('4')
      result.current.execute()
    })

    expect(result.current.currentValue).toBe('20')
  })
})

describe('useCalculator Hook - Error States', () => {
  it('should return ERROR on upper overflow (> 999,999,999)', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      '999999999'.split('').forEach(d => result.current.addDigit(d))
      result.current.applyOperator('+')
      result.current.addDigit('1')
      result.current.execute()
    })

    expect(result.current.currentValue).toBe('ERROR')
  })

  it('should return ERROR on negative results (5 - 10)', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.addDigit('5')
      result.current.applyOperator('-')
      result.current.addDigit('10')
      result.current.execute()
    })

    expect(result.current.currentValue).toBe('ERROR')
  })

  it('should return ERROR when using +/- to make a number negative', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.addDigit('5')
      result.current.toggleSign()
    })

    expect(result.current.currentValue).toBe('ERROR')
  })
})

describe('useCalculator Hook - Precision', () => {
  it('should truncate long division results to 9 characters (10 / 3)', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.addDigit('1')
      result.current.addDigit('0')
      result.current.applyOperator('/')
      result.current.addDigit('3')
      result.current.execute()
    })

    // 10 / 3 = 3.333333333... -> 3.3333333 (9 characters total)
    expect(result.current.currentValue).toBe('3.3333333')
    expect(result.current.currentValue.length).toBe(9)
  })
})
