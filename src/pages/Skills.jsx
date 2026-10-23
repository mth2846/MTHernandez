import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { TbCube, TbChartLine, TbTool, TbCpu, TbCertificate, TbSchool, TbUsers } from 'react-icons/tb'
import ScrollReveal from '../components/ScrollReveal'
import StatRow from '../components/StatRow'

// ─── Skill Category Data ────────────────────────────────────────────────────────

const skillCategories = [
  {
    label: 'CAD & Design',
    icon: <TbCube />,
    skills: ['SolidWorks', 'Fusion 360', 'Onshape', 'Revit', 'KiCad', 'Manufacturing Drawings', 'Assembly Fixturing', 'Design for Manufacturing'],
  },
  {
    label: 'Analysis & Simulation',
    icon: <TbChartLine />,
    skills: ['ANSYS Fluent (CFD)', 'Transient CFD', 'ANSYS Static Structural (FEA)', 'OpenRocket', 'MATLAB', 'OVITO', 'LAMMPS', 'Trade Studies'],
  },
  {
    label: 'Manufacturing & Test',
    icon: <TbTool />,
    skills: ['CNC (Carbon-Fiber Sheet)', 'Resin 3D Printing', '3D Printing', 'Prototyping', 'Bench Testing', 'Drop Testing', 'Test Stand Design', 'Flex-Cable Routing'],
  },
  {
    label: 'Electronics & Avionics',
    icon: <TbCpu />,
    skills: ['4-Layer PCB Layout', 'ESP32', 'IMU / Barometer Integration', 'Power Stage Design', 'Pyro Channels & Arming', 'DAQ Qualification', 'Sensor Cross-Validation', 'Safety Interlocks'],
  },
  {
    label: 'Robotics Certifications',
    icon: <TbCertificate />,
    skills: ['SACA C-101 Industry 4.0 Associate', 'KAWASAKI Certified Robot Operator/Programming', 'FANUC Certified Robot Operator/Programming', 'KUKA Certified Robot Operator/Programming'],
  },
  {
    label: 'Relevant Coursework',
    icon: <TbSchool />,
    skills: ['Mechatronics', 'Mechatronics Laboratory', 'Fluid Mechanics', 'Robot Mechanism Design', 'Materials Engineering', 'Materials Engineering Laboratory'],
  },
  {
    label: 'Societies & Language',
    icon: <TbUsers />,
    skills: ['Terry Scholar', 'SHPE Member', 'Longhorn Rocketry Association', 'STARS Society (NASA Anchor)', 'FITS Co-Founder', 'Fluent in Spanish'],
  },
]

const tools = [
  { name: 'SolidWorks' },
  { name: 'Fusion 360' },
  { name: 'Onshape' },
  { name: 'ANSYS Fluent' },
  { name: 'ANSYS Mechanical' },
  { name: 'KiCad' },
  { name: 'MATLAB' },
  { name: 'OpenRocket' },
  { name: 'OVITO' },
  { name: 'LAMMPS' },
  { name: 'Revit' },
  { name: 'FANUC · KUKA · Kawasaki' },
]

const education = [
  { value: '3.30', label: 'GPA / 4.00' },
  { value: 'May 2028', label: 'Expected Graduation' },
  { value: 'B.S.', label: 'Mechanical Engineering' },
  { value: '+ Minor', label: 'Business' },
]

// Skills that link to a project page where they were actually used
const skillProof = {
  'SolidWorks':                    '/rocketry/thrust-vector-control',
  'Fusion 360':                    '/rocketry/rocket-v9',
  'Onshape':                       '/rocketry/fin-tabs',
  'KiCad':                         '/rocketry/tvc-flight-computer',
  'Manufacturing Drawings':        '/industry/dzyne-uav',
  'Assembly Fixturing':            '/industry/dzyne-uav',
  'Design for Manufacturing':      '/industry/modular-fpv-uas',
  'ANSYS Fluent (CFD)':            '/rocketry/fin-tabs',
  'Transient CFD':                 '/rocketry/airbrakes',
  'ANSYS Static Structural (FEA)': '/rocketry/thrust-vector-control',
  'OpenRocket':                    '/rocketry/thrust-vector-control',
  'MATLAB':                        '/research/atomic-strain',
  'OVITO':                         '/research/atomic-strain',
  'LAMMPS':                        '/research/atomic-strain',
  'Trade Studies':                 '/rocketry/airbrakes',
  'CNC (Carbon-Fiber Sheet)':      '/industry/modular-fpv-uas',
  'Resin 3D Printing':             '/industry/endotracheal-tube',
  'Bench Testing':                 '/rocketry/fin-tabs',
  'Drop Testing':                  '/industry/impress',
  'Test Stand Design':             '/rocketry/motor-test-stand',
  'Flex-Cable Routing':            '/industry/dzyne-uav',
  '4-Layer PCB Layout':            '/rocketry/tvc-flight-computer',
  'ESP32':                         '/rocketry/tvc-flight-computer',
  'IMU / Barometer Integration':   '/rocketry/tvc-flight-computer',
  'Power Stage Design':            '/rocketry/tvc-flight-computer',
  'Pyro Channels & Arming':        '/rocketry/tvc-flight-computer',
  'DAQ Qualification':             '/industry/moontower-daq',
  'Sensor Cross-Validation':       '/industry/moontower-daq',
  'Safety Interlocks':             '/industry/moontower-daq',
  'Longhorn Rocketry Association': '/rocketry',
}

// ─── Skill Card ────────────────────────────────────────────────────────────────

function SkillCard({ label, icon, skills }) {
  const handlePillClick = (e) => {
    const el = e.currentTarget
    el.classList.remove('pill-pulse')
    void el.offsetWidth
    el.classList.add('pill-pulse')
    el.addEventListener('animationend', () => el.classList.remove('pill-pulse'), { once: true })
  }

  return (
    <div className="skills-cat-card-v2">
      <div className="skills-cat-header-v2">
        <span className="skills-cat-icon-v2">{icon}</span>
        <span className="skills-cat-label-v2">{label}</span>
      </div>
      <div className="pill-group skills-pill-group">
        {skills.map(s => skillProof[s] ? (
          <Link key={s} to={skillProof[s]} className="skill-pill skill-pill-link" title="See where I used this">
            {s}
          </Link>
        ) : (
          <span key={s} className="skill-pill" onClick={handlePillClick}>{s}</span>
        ))}
      </div>
    </div>
  )
}

// ─── Typewriter Hook ───────────────────────────────────────────────────────────

function useTypewriter(text, speed = 18) {
  const ref       = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = text
      return
    }
    el.textContent = ''

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true
        let i = 0
        const interval = setInterval(() => {
          if (i < text.length) { el.textContent += text[i]; i++ }
          else clearInterval(interval)
        }, speed)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [text, speed])

  return ref
}

// ─── Page ──────────────────────────────────────────────────────────────────────

const SUBTITLE = "A snapshot of the tools, software, and methods I've built proficiency in across coursework, research, and hands-on engineering projects."

export default function Skills() {
  const subtitleRef = useTypewriter(SUBTITLE)

  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">

          {/* Header */}
          <ScrollReveal>
            <div className="skills-header-block">
              <h2 className="skills-heading"><span className="section-title-accent">Skills</span></h2>
              <div className="skills-underline-bar" />
              <p ref={subtitleRef} className="skills-subtitle-tw" aria-label={SUBTITLE}>&nbsp;</p>
              <p className="skills-proof-note">Highlighted skills link to a project where I used them.</p>
            </div>
          </ScrollReveal>

          {/* Marquee */}
          <ScrollReveal>
            <div className="skills-marquee-section">
              <div className="skills-marquee-label">Tools I Use</div>
              <div className="marquee-outer">
                <div className="marquee-track">
                  {[...tools, ...tools].map((t, i) => (
                    <div key={i} className="marquee-badge">
                      <span className="marquee-badge-dot" />
                      <span className="marquee-badge-name">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal>
            <div className="skills-marquee-section">
              <div className="skills-marquee-label">Education · The University of Texas at Austin</div>
              <StatRow stats={education} />
            </div>
          </ScrollReveal>

          {/* Category Cards */}
          <div className="skills-grid">
            {skillCategories.map((cat, i) => (
              <ScrollReveal key={cat.label} delay={(i % 3) + 1}>
                <SkillCard {...cat} />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
