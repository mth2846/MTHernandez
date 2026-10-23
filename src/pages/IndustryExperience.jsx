import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { cardFor, okrabot } from '../data/projects'

const aerospace = ['impress', 'dzyne-uav', 'modular-fpv-uas'].map(slug => cardFor(slug))

const systems = [
  ...['wavedrone', 'moontower-daq', 'endotracheal-tube'].map(slug => cardFor(slug)),
  okrabot,
]

function Section({ title, intro, items }) {
  return (
    <>
      <ScrollReveal>
        <div className="section-header">
          <h2><span className="section-title-accent">{title}</span></h2>
          <div className="section-header-bar" />
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
          {intro}
        </p>
      </ScrollReveal>

      <div className="project-grid">
        {items.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={(i % 3) + 1} />
        ))}
      </div>
    </>
  )
}

export default function IndustryExperience() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <Section
            title="Aerospace & UAS"
            intro="Engineering work with Guinn Partners and Ascendant AI on flight hardware: Mars penetrator drop testing, UAV assembly fixturing, and a modular FPV platform."
            items={aerospace}
          />
        </div>
      </section>

      <section className="projects-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Section
            title="Maritime, Test & Medical"
            intro="An autonomous maritime vessel, a DAQ qualification test stand, a medical device taken from concept toward final design, and an agricultural robot."
            items={systems}
          />
        </div>
      </section>
    </div>
  )
}
