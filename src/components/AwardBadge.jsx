export default function AwardBadge({ label }) {
  return (
    <span className="award-badge">
      <svg viewBox="0 0 24 24" width="11" height="11" aria-hidden="true">
        <path d="M12 2l2.9 6.26L22 9.27l-5.2 4.87L18.18 21 12 17.56 5.82 21 7.2 14.14 2 9.27l7.1-1.01L12 2z" fill="currentColor" />
      </svg>
      {label}
    </span>
  )
}
