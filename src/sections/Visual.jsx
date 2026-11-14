import { VISUAL } from '../data';
import { SectionHead, Screen, Viewfinder, Reveal } from '../ui';

export default function Visual() {
  return (
    <section className="section visual" id="visual" aria-labelledby="visual-title">
      <div className="container">
        <SectionHead
          scene="SC.04"
          meta={['Photography', 'Concepts', 'Visual design']}
          title={<span id="visual-title">Through the lens</span>}
          intro="Before interfaces there was a camera. Photojournalism, concept vehicles and speculative products — the visual side of the work."
        />
        <div className="visual-grid">
          {VISUAL.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <figure className="visual-item cursor-target" data-cursor-label={v.href ? 'Case' : 'Frame'}>
                <a className="visual-link" href={v.href} tabIndex={v.href ? undefined : -1} aria-disabled={v.href ? undefined : true}>
                  <Viewfinder>
                    <Screen aspect={v.aspect} src={v.image} alt={v.alt || v.title} label={v.image ? undefined : v.slot} />
                  </Viewfinder>
                  <figcaption>
                    <span className="visual-title">{v.title}</span>
                    <span className="visual-meta">{v.meta}</span>
                  </figcaption>
                </a>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
