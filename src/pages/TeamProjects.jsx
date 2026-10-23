import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { cardFor } from '../data/projects'
import img from '../img'

const projects = [
  cardFor('texas-moto-racing'),
  cardFor('longhorn-baja'),
  {
    image: img('/images/rocket-v9.webp'),
    imageStyle: { objectFit: 'contain', padding: '0 12px', background: '#101014' },
    title: 'Longhorn Rocketry Association',
    tag: 'IREC / Spaceport America Cup Team',
    description: 'Airbrakes, fin-tab roll control, thrust vector control, flight computers, and a motor test stand for the IREC / Spaceport America Cup team.',
    to: '/rocketry',
  },
]

export default function TeamProjects() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2><span className="section-title-accent">Team Projects</span></h2>
              <div className="section-header-bar" />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
              Student competition teams at UT Austin: a motorcycle team I founded for MotoStudent, Baja SAE,
              and the Longhorn Rocketry Association.
            </p>
          </ScrollReveal>

          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
