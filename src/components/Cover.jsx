// Blueprint-style tile for client programs that have no publishable imagery
export default function Cover({ icon: Icon, code, className = '' }) {
  return (
    <div className={`cover-art ${className}`} aria-hidden="true">
      <div className="cover-art-grid" />
      <div className="cover-art-glow" />
      {Icon && <Icon className="cover-art-icon" />}
      {code && <span className="cover-art-code">{code}</span>}
    </div>
  )
}
