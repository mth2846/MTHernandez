import { FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">MARIO HERNANDEZ JR.</div>

        <div className="footer-contact">
          <a href="tel:9562417934">
            <FiPhone size={14} />
            (956) 241-7934
          </a>
          <a href="mailto:mariothdz@utexas.edu">
            <FiMail size={14} />
            mariothdz@utexas.edu
          </a>
          <span>
            <FiMapPin size={14} />
            San Benito, TX
          </span>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/mario-hernandez813" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={16} />
            </a>
          </div>
          <a
            href="mailto:mariothdz@utexas.edu"
            className="btn btn-outline"
            style={{ fontSize: '0.72rem', padding: '8px 14px' }}
          >
            <FiMail size={13} />
            Get in Touch
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mario Hernandez Jr., Mechanical Engineering</span>
        <span>The University of Texas at Austin</span>
      </div>
      <div className="footer-legal">
        Work described under Guinn Partners / Ascendant AI programs belongs to those organisations and their
        clients and is published with their approval. Work eligible in the U.S. · Open to relocation with sponsorship.
      </div>
    </footer>
  )
}
