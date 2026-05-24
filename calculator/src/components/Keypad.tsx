import { Button } from './Button'
import type { Operator } from '../hooks/useCalculator'
import './Keypad.css'

interface Props { onDigit: (d: string) => void; onOp: (o: Operator) => void; onExec: () => void; onClear: () => void; onSign: () => void }

export const Keypad = ({ onDigit, onOp, onExec, onClear, onSign }: Props) => (
  <div className="keypad-grid">
    <Button label="AC" onClick={onClear} type="action" />
    <Button label="+/-" onClick={onSign} type="op" />
    <Button label="%" onClick={() => onOp('%')} type="op" />
    <Button label="/" onClick={() => onOp('/')} type="op" />
    {[7, 8, 9].map(n => <Button key={n} label={n.toString()} onClick={() => onDigit(n.toString())} />)}
    <Button label="*" onClick={() => onOp('*')} type="op" />
    {[4, 5, 6].map(n => <Button key={n} label={n.toString()} onClick={() => onDigit(n.toString())} />)}
    <Button label="-" onClick={() => onOp('-')} type="op" />
    {[1, 2, 3].map(n => <Button key={n} label={n.toString()} onClick={() => onDigit(n.toString())} />)}
    <Button label="+" onClick={() => onOp('+')} type="op" />
    <Button label="0" onClick={() => onDigit('0')} />
    <Button label="." onClick={() => onDigit('.')} />
    <Button label="=" onClick={onExec} type="op" />
  </div>
)
