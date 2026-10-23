import ScrollReveal from '../components/ScrollReveal'
import StatRow from '../components/StatRow'
import ProjectCard from '../components/ProjectCard'
import StickyTOC from '../components/StickyTOC'
import Gallery from '../components/Gallery'
import { cardFor, projects } from '../data/projects'
import img from '../img'

const toc = [
  { id: 'overview', label: 'Overview' },
  { id: 'approach', label: 'Engineering Approach' },
  { id: 'irec', label: 'IREC Competition Rocket' },
  { id: 'active-control', label: 'Active Control & Avionics' },
  { id: 'propulsion', label: 'Propulsion Testing' },
  { id: 'gallery', label: 'Gallery' },
]

const teamStats = [
  { value: '6', label: 'Subsystems on File' },
  { value: '10,000 ft', label: 'Airbrake Target Apogee' },
  { value: 'FOS > 6', label: 'Fin-Tab Dowel Margin' },
  { value: '~150 lbf', label: 'Test Stand Rating' },
]

const approach = [
  { title: 'Trade Study First', text: 'Mechanisms are picked on paper before CAD: a cam-slot airbrake for simplicity, low mass, and flight heritage, and fin tabs over a linkage for fewer failure points and easier control integration.' },
  { title: 'Simulate, Then Prove It', text: 'CFD sets the loads, FEA checks the structure against them, and bench tests close the loop, like measuring servo torque against the stated max before trusting it in flight.' },
  { title: 'Fail Safe', text: 'The TVC gimbal is designed so the rocket cannot aim toward the ground after a mechanical failure, and the flight computer needs an external arming switch before any pyro event.' },
  { title: 'Fit the 3 in Envelope', text: 'Everything packages into a 3 in airframe: fin tabs with embedded slim servos, and a flight computer compacted from 65 × 80 mm to 50 × 76 mm to mount lengthwise on its sled.' },
]

const irec = ['airbrakes', 'fin-tabs'].map(slug => cardFor(slug))
const activeControl = ['rocket-v9', 'tvc-flight-computer', 'thrust-vector-control'].map(slug => cardFor(slug))
const propulsion = [cardFor('motor-test-stand')]

const rocketrySlugs = ['rocket-v9', 'tvc-flight-computer', 'airbrakes', 'fin-tabs', 'thrust-vector-control', 'motor-test-stand']
const gallery = rocketrySlugs.flatMap(slug => projects[slug].figures.map(f => ({ src: f.src, alt: f.alt })))
  .filter((g, i, all) => all.findIndex(o => o.src === g.src) === i)

function Group({ id, title, intro, items }) {
  return (
    <section id={id} className="projects-section" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-marker" style={{ marginBottom: 16 }}>
            <div className="section-marker-inner">{title}</div>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 760, marginBottom: 28 }}>
            {intro}
          </p>
        </ScrollReveal>
        <div className="project-grid">
          {items.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function LonghornRocketry() {
  return (
    <div className="page-wrapper">
      <StickyTOC sections={toc} />

      {/* ── Hero ── */}
      <div className="cinematic-header" style={{ height: 'clamp(320px, 62vh, 680px)' }}>
        <div
          className="cinematic-header-bg"
          style={{
            backgroundImage: `url('${img('/images/rocket-v9.webp')}')`,
            backgroundColor: 'transparent',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            // Wide transparent render: fit it whole in the upper part of the header, clear of the title
            inset: '8% 8% 34% 8%',
            filter: 'brightness(0.85)',
          }}
        />
        <div className="cinematic-header-overlay" />
        <div className="container cinematic-header-content">
          <div className="cinematic-header-meta">
            <span className="cinematic-header-tag">UT Austin · IREC &amp; Advanced Research</span>
          </div>
          <h1 className="cinematic-header-title">Longhorn Rocketry Association</h1>
          <div className="pill-group cinematic-header-pills">
            {['Fusion 360', 'Onshape', 'SolidWorks', 'ANSYS Fluent', 'ANSYS FEA', 'KiCad', 'OpenRocket'].map(s => <span key={s} className="pill">{s}</span>)}
          </div>
        </div>
      </div>

      {/* ── Overview ── */}
      <section id="overview" className="projects-section" style={{ paddingTop: 40, paddingBottom: 0 }}>
        <div className="container">
          <ScrollReveal>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 700, fontSize: '0.95rem', lineHeight: 1.75 }}>
              With the Longhorn Rocketry Association I work across vehicle design, avionics, and advanced
              research: active airbrakes and fin-tab roll control for the IREC competition rocket, a 2-axis
              thrust vector control gimbal, the TVC V5 flight computer, the active-control Rocket Version 9
              airframe, and a static-fire motor test stand.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <StatRow stats={teamStats} />
          </ScrollReveal>

          <ScrollReveal>
            <div id="approach" className="project-section" style={{ marginBottom: 0 }}>
              <h3 style={{ fontSize: '1.6rem' }}>Engineering Approach</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 760 }}>
                The same habits run through every subsystem below.
              </p>
              <div className="lessons-grid">
                {approach.map((c, i) => (
                  <div key={c.title} className="lesson-card">
                    <span className="lesson-card-tag">{`0${i + 1}`}</span>
                    <h4 className="lesson-card-title">{c.title}</h4>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Group
        id="irec"
        title="IREC Competition Rocket"
        intro="Active control for the team's IREC entries: airbrakes that hold a 10,000 ft target apogee, and actuating fin tabs for roll control."
        items={irec}
      />

      <Group
        id="active-control"
        title="Active Control & Avionics"
        intro="A 3 in active-control vehicle with servo-driven canards, the flight computer compacted to fit it, and an experimental 2-axis thrust vector control gimbal."
        items={activeControl}
      />

      <Group
        id="propulsion"
        title="Propulsion Testing"
        intro="Ground support for solid motor testing: a steel static-fire stand and its remote ignition electronics."
        items={propulsion}
      />

      {/* ── Gallery ── */}
      <section id="gallery" className="projects-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <Gallery images={gallery} title="Rocketry Gallery" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
