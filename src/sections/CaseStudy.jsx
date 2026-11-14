import { useEffect } from 'react';
import SplitText from '../bits/SplitText';
import CountUp from '../bits/CountUp';
import { CASES } from '../cases';
import { Slate, Status, Screen, Reveal, Button } from '../ui';

const Img = ({ slot }) =>
  slot ? <Screen aspect={slot.aspect || 'flat'} src={slot.src} alt={slot.alt || slot.label} label={`${slot.id} · ${slot.label}`} /> : null;

function Stat({ value, label }) {
  const n = parseFloat(String(value).replace(/[^\d.]/g, ''));
  const plain = /^\d+$/.test(String(value));
  return (
    <div className="stat">
      <div className="stat-value">{plain ? <CountUp to={n} duration={1.4} separator="," /> : value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function CaseStudy({ id }) {
  const c = CASES[id];
  useEffect(() => {
    if (c) document.title = `${c.title} — Bharath Ayyappan`;
    return () => { document.title = 'Bharath Ayyappan — Product Designer & Creative Technologist'; };
  }, [c]);
  if (!c) return null;
  const next = CASES[c.next];

  return (
    <article className="case" aria-labelledby="case-title">
      <header className="container case-head">
        <a className="case-back cursor-target" href="#work" data-cursor-label="Back">← All work</a>
        <Slate scene="CASE" items={[c.kind, c.year]} />
        <h1 id="case-title" className="case-title">
          <SplitText text={c.title} tag="span" splitType="words" effect="rise" mask delay={60} duration={1} textAlign="left" trigger="load" />
        </h1>
        <Reveal delay={0.4} distance={20}><p className="case-brief">{c.brief}</p></Reveal>
        <Reveal delay={0.5} distance={20}>
          <div className="case-status"><Status state={c.status}>{c.status === 'concept' ? 'Concept' : undefined}</Status></div>
        </Reveal>
      </header>

      <div className="container case-cover"><Reveal distance={30}><Img slot={c.cover} /></Reveal></div>

      <div className="container">
        <dl className="case-facts">
          {c.facts.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
        {c.disclaimer && <p className="case-disclaimer">{c.disclaimer}</p>}

        {c.chapters.map((ch, i) => (
          <section className="case-chapter" key={ch.title} aria-labelledby={`ch-${i}`}>
            <div className="case-chapter-head">
              <span className="case-num">{String(i + 1).padStart(2, '0')}</span>
              <Reveal distance={20}><h2 id={`ch-${i}`} className="heading-lg">{ch.title}</h2></Reveal>
            </div>
            <div className="case-chapter-body">
              {ch.body?.map((p, j) => <Reveal key={j} distance={16} delay={j * 0.05}><p className="body-lg">{p}</p></Reveal>)}
              {ch.bullets && (
                <ul className="case-bullets">
                  {ch.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              )}
              {ch.stats && <div className="stats case-stats">{ch.stats.map(([v, l]) => <Stat key={l} value={v} label={l} />)}</div>}
            </div>
            {ch.img && <div className="case-media"><Reveal distance={30}><figure className="case-fig"><Img slot={ch.img} />{ch.img.src && <figcaption>{ch.img.label}</figcaption>}</figure></Reveal></div>}
            {ch.gallery && (
              <div className="case-gallery" style={{ gridTemplateColumns: `repeat(${Math.min(ch.gallery.length, 5)}, 1fr)` }}>
                {ch.gallery.map(g => <Reveal key={g.id} distance={24}><figure className="case-fig"><Img slot={{ ...g, aspect: 'portrait' }} /><figcaption>{g.label}</figcaption></figure></Reveal>)}
              </div>
            )}
          </section>
        ))}

        {c.links?.length > 0 && (
          <div className="case-links">
            {c.links.map(l => <Button key={l.href} href={l.href} arrow label="Open">{l.label}</Button>)}
          </div>
        )}
      </div>

      {next && (
        <a className="case-next cursor-target" href={`#case-${next.id}`} data-cursor-label="Next">
          <div className="container">
            <span className="slate"><span className="slate-scene">NEXT</span><span className="slate-sep" />{next.kind}</span>
            <span className="case-next-title">{next.title} <span aria-hidden="true">→</span></span>
          </div>
        </a>
      )}
    </article>
  );
}
