import { useCalculator } from '../hooks/useCalculator'
import { Display } from './Display'
import { Keypad } from './Keypad'

export const Calculator = () => {
  const { currentValue, addDigit, applyOperator, execute, clear, toggleSign } = useCalculator()
  return (
    <div style={{ width: '320px', padding: '10px', border: '4px solid #333', background: '#111' }}>
      <Display value={currentValue} />
      <Keypad onDigit={addDigit} onOp={applyOperator} onExec={execute} onClear={clear} onSign={toggleSign} />
    </div>
  )
}
