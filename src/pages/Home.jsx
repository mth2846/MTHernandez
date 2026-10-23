import { Link } from 'react-router-dom'
import { FiLinkedin, FiMail } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'
import HeroCarousel from '../components/HeroCarousel'
import img from '../img'

const companies = [
  { name: 'Guinn Partners', role: 'Engineering Intern', initials: 'GP' },
  { name: 'Ascendant AI', role: 'Engineering Intern', initials: 'AAI' },
  { name: 'UT Austin ECE', role: 'Researcher', initials: 'ECE' },
  { name: 'Longhorn Rocketry', role: 'Member', initials: 'LRA' },
  { name: 'NASA HUNCH', role: 'Intern', initials: 'HUNCH' },
]

const timelineEntries = [
  {
    date: '2026 – Present',
    org: 'Guinn Partners · IMPRESS',
    role: 'Engineering · Mars Penetrator Drop Testing · NASA TechLeap Prize 2026 Winner',
    tag: 'Industry',
    to: '/industry/impress',
    initials: 'GP',
  },
  {
    date: '2026 – Present',
    org: 'Ascendant AI · WaveDrone',
    role: 'Engineering Intern · Autonomous Maritime Vessel Platform',
    tag: 'Industry',
    to: '/industry/wavedrone',
    initials: 'AAI',
  },
  {
    date: '2026',
    org: 'DZYNE Technologies UAV',
    role: 'Engineering Intern · Assembly Fixturing, DfM & LRIP Support',
    tag: 'Industry',
    to: '/industry/dzyne-uav',
    initials: 'AAI',
  },
  {
    date: '2026 – Present',
    org: 'MoonTower Fleet Intelligence',
    role: 'Engineering Intern · DAQ Qualification Test Stand',
    tag: 'Industry',
    to: '/industry/moontower-daq',
    initials: 'AAI',
  },
  {
    date: '2026 – Present',
    org: '526 Solutions · Modular FPV UAS',
    role: 'Engineering · Frame DfM, CNC Carbon Fiber & Payload Mounts',
    tag: 'Industry',
    to: '/industry/modular-fpv-uas',
    initials: 'AAI',
  },
  {
    date: '2026 – Present',
    org: 'Guinn Partners · Medical & Robotics',
    role: 'Engineering · Endotracheal Tube Design · Okrabot Harvester Chassis',
    tag: 'Industry',
    to: '/industry/endotracheal-tube',
    initials: 'GP',
  },
  {
    date: '2024 – Present',
    org: 'Longhorn Rocketry Association',
    role: 'Airbrakes · Fin-Tab Roll Control · Thrust Vector Control · Avionics',
    tag: 'Student Org',
    to: '/rocketry',
    initials: 'LRA',
  },
  {
    date: '2024 – Present',
    org: 'UT Austin ECE',
    role: 'Undergraduate Research Assistant · Additive Manufacturing (Prof. Michael Becker)',
    tag: 'Research',
    to: '/research/atomic-strain',
    initials: 'ECE',
  },
  {
    date: '2023 – 2024',
    org: 'NASA HUNCH',
    role: 'Intern · 3D-Printed Medical Devices',
    tag: 'NASA HUNCH',
    to: '/research/hunch-medical-devices',
    initials: 'HUNCH',
  },
  {
    date: '2022 – 2023',
    org: 'NASA HUNCH',
    role: 'Intern · Lunar Scooter Wheels',
    tag: 'NASA HUNCH',
    to: '/research/hunch-lunar-wheels',
    initials: 'HUNCH',
  },
  {
    date: '2018 – Present',
    org: 'Hernandez Farms',
    role: 'Foreman · Facilities, records & invoicing, equipment repair, herd health',
    tag: 'Work',
    to: null,
    initials: 'HF',
  },
]

export default function Home() {
  return (
    <div className="page-wrapper">
      <section className="hero-section">
        <HeroCarousel />
        <div className="container hero-section-content">
          <div className="hero-grid bento-grid">

            {/* Profile card */}
            <ScrollReveal className="hero-profile card" delay={1}>
              <img
                src={img('/images/profile.jpg')}
                alt="Mario Hernandez Jr."
                className="hero-photo"
              />
              <div className="hero-name">Mario Hernandez Jr.</div>
              <div className="hero-title">Mechanical Engineering Student</div>
              <div className="hero-education">
                <img
                  src={img('/images/ut-austin-logo.png')}
                  alt="UT Austin"
                  className="hero-edu-logo"
                />
                <div className="hero-edu-text">
                  <span className="hero-edu-degree">B.S. Mechanical Engineering</span>
                  <span className="hero-edu-minor">Minor in Business</span>
                  <span className="hero-edu-years">Expected May 2028 · GPA 3.30</span>
                </div>
              </div>
              <div className="hero-social-links">
                <a href="https://www.linkedin.com/in/mario-hernandez813" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href="mailto:mariothdz@utexas.edu" aria-label="Email">
                  <FiMail />
                </a>
              </div>
            </ScrollReveal>

            {/* Bio card */}
            <ScrollReveal className="hero-bio card" delay={2}>
              <div className="hero-bio-label">Portfolio</div>
              <h1 className="hero-bio-heading">
                From the Atom<br />
                to the <span style={{ color: 'var(--accent)' }}>Airframe</span>,<br />
                I Build It.
              </h1>
              <div className="hero-bio-chips">
                <span className="hero-bio-chip">ME + Business · UT Austin · May 2028</span>
                <span className="hero-bio-chip">Engineering Intern · Guinn Partners</span>
                <span className="hero-bio-chip">Seeking aerospace structures, actuation &amp; hardware test roles</span>
              </div>
              <p className="hero-bio-text">
                I'm Mario Hernandez Jr., a mechanical engineering student at UT Austin building flight
                hardware, actuation systems, and manufacturing drawings for real vehicles, on the ground and
                off it: rocket airbrakes, fin-tab roll control, thrust vector control, Mars penetrator drop
                tests, UAV fixturing and autonomous maritime platforms.
              </p>
              <div className="hero-bio-actions">
                <a href="mailto:mariothdz@utexas.edu" className="btn btn-primary">
                  <FiMail size={14} />
                  Get in Touch
                </a>
                <Link to="/industry" className="btn btn-outline">View Work</Link>
              </div>
            </ScrollReveal>

            {/* CTA cards */}
            <ScrollReveal delay={3} className="hero-cta-industry">
              <Link to="/industry" className="card-link" style={{ height: '100%', display: 'block' }}>
                <div className="cta-card card" style={{ height: '100%' }}>
                  <div className="cta-card-number">01</div>
                  <div className="cta-card-title">Industry<br />Experience</div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={4} className="hero-cta-team">
              <Link to="/rocketry" className="card-link" style={{ height: '100%', display: 'block' }}>
                <div className="cta-card card" style={{ height: '100%' }}>
                  <div className="cta-card-number">02</div>
                  <div className="cta-card-title">Longhorn<br />Rocketry</div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={5} className="hero-cta-personal">
              <Link to="/research" className="card-link" style={{ height: '100%', display: 'block' }}>
                <div className="cta-card card" style={{ height: '100%' }}>
                  <div className="cta-card-number">03</div>
                  <div className="cta-card-title">Research &amp;<br />NASA HUNCH</div>
                </div>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Organization strip */}
      <section style={{ padding: '64px 0 64px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="company-strip">
              {companies.map(c => (
                <div key={c.name} className="company-badge">
                  <div className="company-logo-wrap">
                    <div className="company-logo-initials">{c.initials}</div>
                  </div>
                  <div className="company-badge-name">{c.name}</div>
                  <div className="company-badge-role">{c.role}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Timeline */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ marginBottom: 48 }}>
              <h2><span className="section-title-accent">Experience</span></h2>
              <div className="section-header-bar" />
            </div>
          </ScrollReveal>

          <div className="zz-timeline">
            <div className="zz-spine" />
            {timelineEntries.map((entry, i) => {
              const isLeft = i % 2 === 0
              const inner = (
                <div className={`zz-card card${entry.to ? ' zz-card-link' : ''}`}>
                  <div className="zz-card-top">
                    <span className="pill">{entry.tag}</span>
                    {entry.to && <span className="zz-arrow">→</span>}
                  </div>
                  <div className="zz-card-main">
                    <div className="zz-logo">
                      <span className="zz-logo-initials">{entry.initials}</span>
                    </div>
                    <div className="zz-card-text">
                      <div className="zz-date">{entry.date}</div>
                      <div className="zz-org">{entry.org}</div>
                      <div className="zz-role">{entry.role}</div>
                    </div>
                  </div>
                </div>
              )
              return (
                <ScrollReveal key={entry.org + entry.date} delay={(i % 3) + 1} className={`zz-entry ${isLeft ? 'zz-left' : 'zz-right'}`}>
                  {isLeft ? (
                    <>
                      <div className="zz-side">
                        {entry.to ? <Link to={entry.to} className="card-link">{inner}</Link> : inner}
                      </div>
                      <div className="zz-dot-col"><div className="zz-dot" /></div>
                      <div className="zz-side" />
                    </>
                  ) : (
                    <>
                      <div className="zz-side" />
                      <div className="zz-dot-col"><div className="zz-dot" /></div>
                      <div className="zz-side">
                        {entry.to ? <Link to={entry.to} className="card-link">{inner}</Link> : inner}
                      </div>
                    </>
                  )}
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reference */}
      <section id="reference" style={{ padding: '0 0 100px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ marginBottom: 40 }}>
              <h2><span className="section-title-accent">Reference</span></h2>
              <div className="section-header-bar" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <figure className="card reference-card">
              <span className="reference-mark" aria-hidden="true">”</span>
              <blockquote className="reference-quote">
                “Mario is an all-around very capable young man who has quickly proven himself to be
                a <em>vital asset</em> to our team.”
              </blockquote>
              <p className="reference-body">
                He brought technical intuition and hands-on ability beyond his years, stepping into unfamiliar
                work with confidence rather than hesitation, and volunteering wherever he could to expand his
                engineering toolkit.
              </p>
              <figcaption className="reference-who">
                <span className="reference-name">Mitchell Richburg</span>
                <span className="reference-role">Head of Engineering, Guinn Partners · June 2026</span>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
