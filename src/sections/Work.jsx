import SpotlightCard from '../bits/SpotlightCard';
import '../bits/SpotlightCard.css';
import ScrollVelocity from '../bits/ScrollVelocity';
import '../bits/ScrollVelocity.css';
import { WORK, DISCIPLINES } from '../data';
import { useTheme } from '../theme/ThemeProvider';
import { alpha } from '../theme/engine';
import { SectionHead, Slate, Status, Tag, Screen, Reveal } from '../ui';

function ProjectCard({ p, theme, featured }) {
  const { palette } = useTheme();
  const external = /^https?:/.test(p.href);
  return (
    <SpotlightCard
      className={`project ${featured ? 'project-featured' : ''}`}
      theme={theme}
      spotlightColor={alpha(palette.tungsten, 0.22)}
      spotlightSize={featured ? 520 : 360}
      intensity={0.18}
      borderGlow={0.5}
    >
      <a className="project-link cursor-target" href={p.href} data-cursor-label={external ? 'Open' : p.href.startsWith('#case-') ? 'Case' : 'View'} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        <Screen aspect={featured ? (p.featuredAspect || 'og') : 'flat'} src={p.image} alt={p.imageAlt} fit={p.imageFit} label={p.image ? undefined : p.slot ? `Image ${p.slot}` : 'Under NDA — ask for a walkthrough'} />
        <div className="project-body">
          <Slate scene={p.index} items={[p.kind, p.year]} decrypt={false} />
          <div className="project-row">
            <h3 className={featured ? 'heading-lg' : 'heading-md'}>{p.title}</h3>
            <Status state={p.status}>{p.statusLabel}</Status>
          </div>
          <p className="project-desc">{p.description}</p>
          <div className="project-tags">{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
        </div>
      </a>
    </SpotlightCard>
  );
}

export default function Work({ theme }) {
  const [featured, ...rest] = WORK;
  return (
    <>
      <div className="band" aria-hidden="true">
        <ScrollVelocity
          texts={[DISCIPLINES.join('  ·  ') + '  ·  ', 'Design it  ·  Build it  ·  Ship it  ·  ']}
          velocity={40}
          className="band-text"
          numCopies={4}
          fadeEdges
          outlineAlternate
          damping={50}
          stiffness={400}
        />
      </div>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="container">
          <SectionHead
            scene="SC.01"
            meta={['Selected work', '2019 — 2026']}
            title={<span id="work-title">Selected work</span>}
            intro="Products I've designed — and, increasingly, built myself. Each one shipped, with real users and a version number."
          />
          <Reveal><ProjectCard p={featured} theme={theme} featured /></Reveal>
          <div className="work-grid">
            {rest.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.12}><ProjectCard p={p} theme={theme} /></Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
