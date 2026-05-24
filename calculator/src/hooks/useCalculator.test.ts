import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useCalculator } from './useCalculator'

describe('useCalculator Hook - Character Limit', () => {
  it('should not exceed 9 characters on input', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      // Input 12 digits
      '123456789012'.split('').forEach(d => result.current.addDigit(d))
    })

    expect(result.current.currentValue).toBe('123456789')
    expect(result.current.currentValue.length).toBe(9)
  })

  it('should count decimal point as a character in the 9-limit', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      // 1.23456789 (10 chars total) -> should be 1.2345678
      '1.23456789'.split('').forEach(d => result.current.addDigit(d))
    })

    expect(result.current.currentValue).toBe('1.2345678')
    expect(result.current.currentValue.length).toBe(9)
  })
})
