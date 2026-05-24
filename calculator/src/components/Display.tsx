import './Display.css'

export const Display = ({ value }: { value: string }) => (
  <div className="display-container">
    <div className="display-text">{value}</div>
  </div>
)
