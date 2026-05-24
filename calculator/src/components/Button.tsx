import './Button.css'

interface Props { label: string; onClick: () => void; type?: 'num' | 'op' | 'action' }
export const Button = ({ label, onClick, type = 'num' }: Props) => (
  <button className={`btn btn-${type}`} onClick={onClick}>
    {label}
  </button>
)
