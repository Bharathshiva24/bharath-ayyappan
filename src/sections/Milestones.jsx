import { MILESTONES } from '../data';
import { SectionHead, Reveal } from '../ui';

export default function Milestones() {
  return (
    <section className="section milestones" id="milestones" aria-labelledby="milestones-title">
      <div className="container">
        <SectionHead
          scene="SC.05"
          meta={['Recognition', 'Certifications']}
          title={<span id="milestones-title">Milestones</span>}
          intro="Moments where the work reached further than I expected — from a state-level first to films, programmes and certifications."
        />
        <ol className="ms-list">
          {MILESTONES.map((m, i) => {
            const ext = m.href && /^https?:/.test(m.href);
            const Inner = (
              <>
                <span className="ms-year">{m.year}</span>
                <span className="ms-title">{m.title}</span>
                <span className="ms-note">{m.note}</span>
                <span className="ms-arrow" aria-hidden="true">{m.href ? '↗' : ''}</span>
              </>
            );
            return (
              <Reveal key={m.title} delay={Math.min(i, 5) * 0.05} distance={16}>
                <li className="ms-item">
                  {m.href ? (
                    <a className="ms-row cursor-target" href={m.href} data-cursor-label="Open" {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{Inner}</a>
                  ) : (
                    <div className="ms-row">{Inner}</div>
                  )}
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
