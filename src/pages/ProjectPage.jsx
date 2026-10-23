import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import DetailPage from '../components/DetailPage'
import ScrollReveal from '../components/ScrollReveal'
import StatRow from '../components/StatRow'
import StickyTOC from '../components/StickyTOC'
import Figures from '../components/Figures'
import AwardBadge from '../components/AwardBadge'
import { projects } from '../data/projects'

export default function ProjectPage({ slug }) {
  const p = projects[slug]

  const toc = useMemo(() => [
    p.challenge && { id: 'overview', label: p.challenge.title },
    p.specs && { id: 'specs', label: 'Specifications' },
    { id: 'my-contribution', label: 'My Contribution' },
    p.decisions && { id: 'key-decisions', label: 'Key Decisions' },
    p.figures && { id: 'figures', label: 'Figures' },
    p.context && { id: 'context', label: p.context.title },
  ].filter(Boolean), [p])

  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo={p.backTo}
        backLabel={p.backLabel}
        tag={p.tag}
        title={p.title}
        heroImage={p.heroImage}
        heroStyle={p.heroStyle}
        heroCover={p.heroCover}
        heroCoverCode={p.heroCoverCode}
        software={p.software}
        roles={p.roles}
        inProgress={p.inProgress}
      >
        {p.award && (
          <ScrollReveal>
            <div style={{ marginBottom: 20 }}><AwardBadge label={p.award} /></div>
          </ScrollReveal>
        )}

        {p.stats && (
          <ScrollReveal>
            <StatRow stats={p.stats} />
          </ScrollReveal>
        )}

        {p.challenge && (
          <ScrollReveal>
            <div id="overview" className="project-section intro-tile">
              <h3>{p.challenge.title}</h3>
              <p>{p.challenge.text}</p>
            </div>
          </ScrollReveal>
        )}

        {p.specs && (
          <ScrollReveal>
            <div id="specs" className="project-section">
              <h3>Specifications</h3>
              {p.specs.map(g => (
                <div key={g.title} className="spec-group">
                  <div className="spec-group-title">{g.title}</div>
                  <div className="spec-grid">
                    {g.specs.map(([label, value]) => (
                      <div key={label} className="spec-tile">
                        <div className="spec-tile-value">{value}</div>
                        <div className="spec-tile-label">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <div id="my-contribution" className="project-section">
            <h3>My Contribution</h3>
            <ul className="contrib-grid">
              {p.contributions.map(c => <li key={c}>{c}</li>)}
            </ul>
            {p.related && (
              <p style={{ marginTop: 16 }}>
                <Link to={p.related.to} style={{ color: 'var(--accent-light)', fontSize: '0.9rem' }}>{p.related.label}</Link>
              </p>
            )}
          </div>
        </ScrollReveal>

        {p.decisions && (
          <ScrollReveal>
            <div id="key-decisions" className="project-section">
              <h3>Key Engineering Decisions</h3>
              <div className="decision-grid">
                {p.decisions.map(d => (
                  <div key={d.title} className="decision-card">
                    <div className="decision-card-title">{d.title}</div>
                    <p className="decision-card-body">
                      <span className="decision-chose"><strong>Chose</strong>{d.chose}</span>
                      {d.rejected && <span className="decision-rejected"><strong>Rejected</strong>{d.rejected}</span>}
                      {d.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {p.figures && (
          <ScrollReveal>
            <div id="figures" className="project-section">
              <h3>Figures</h3>
              <Figures items={p.figures} />
            </div>
          </ScrollReveal>
        )}

        {p.context && (
          <ScrollReveal>
            <div id="context" className="project-section">
              <div className="lessons-grid" style={{ marginTop: 0 }}>
                <div className="lesson-card lesson-card-key">
                  <span className="lesson-card-tag">{p.context.tag}</span>
                  <h4 className="lesson-card-title">{p.context.title}</h4>
                  <p>{p.context.text}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </DetailPage>
    </>
  )
}
