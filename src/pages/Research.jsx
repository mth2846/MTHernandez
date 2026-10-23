import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { cardFor } from '../data/projects'

const university = [cardFor('atomic-strain')]
const hunch = ['hunch-medical-devices', 'hunch-lunar-wheels'].map(slug => cardFor(slug))

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

      <div className="project-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
        {items.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={i + 1} />
        ))}
      </div>
    </>
  )
}

export default function Research() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <Section
            title="University Research"
            intro="Additive manufacturing research at UT Austin ECE under Prof. Michael Becker: atomic-scale strain analysis of Al₂O₃ particles from molecular-dynamics simulation."
            items={university}
          />
        </div>
      </section>

      <section className="projects-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Section
            title="NASA HUNCH"
            intro="Hardware for spaceflight through NASA HUNCH in Houston: 3D-printed medical devices and wheels for an electric lunar scooter."
            items={hunch}
          />
        </div>
      </section>
    </div>
  )
}
