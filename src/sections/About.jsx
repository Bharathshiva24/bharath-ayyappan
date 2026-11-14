import TrueFocus from '../bits/TrueFocus';
import '../bits/TrueFocus.css';
import CountUp from '../bits/CountUp';
import { STATS, EXPERIENCE } from '../data';
import { Slate, Tag, Reveal } from '../ui';

export default function About({ theme }) {
  const tung = theme === 'light' ? '#8a4f00' : '#ffb03a';
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <Slate scene="SC.05" items={['About', 'Chennai, IN']} />
        <h2 id="about-title" className="sr-only">About — Camera, Canvas, Code</h2>
        <div className="about-focus" aria-hidden="true">
          <TrueFocus
            sentence="Camera Canvas Code"
            focusStyle="brackets"
            blurAmount={4}
            borderColor={tung}
            glowColor="transparent"
            animationDuration={0.6}
            pauseBetweenAnimations={1.4}
            cornerSize={18}
            borderWidth={2}
          />
        </div>

        <div className="about-grid">
          <Reveal>
            <div className="about-story">
              <p className="body-lg">
                I started behind a camera — as a photojournalist at Dinamalar — learning to find the frame that tells the story.
                That instinct carried into seven years of product and experience design at Slate and Pencil, Xerago and now Mindsprint, where I lead design.
              </p>
              <p className="body-lg">
                Lately the line between designing and building has disappeared. With AI as a collaborator I take ideas from Figma to shipped code —
                a Chrome extension that shows the screen from your seat, a phone that becomes a PC, an AC that turns off when I close my laptop.
                I founded three products along the way.
              </p>
              <p className="body-lg">When I'm not designing, I'm watching films — usually from the perfect seat.</p>
            </div>
          </Reveal>
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} distance={24}>
                <div className="stat">
                  <div className="stat-value">
                    <CountUp to={s.value} duration={1.6} separator="," />
                    {s.suffix && <sup>{s.suffix}</sup>}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="exp">
          <h3 className="heading-md exp-title">Experience</h3>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role + e.company} delay={Math.min(i, 4) * 0.05} distance={16}>
              <div className={`exp-row ${e.current ? 'exp-current' : ''}`}>
                <div className="exp-years">{e.years}</div>
                <div>
                  <div className="exp-role">{e.role} <span className="exp-co">· {e.company}</span></div>
                  {e.note && <p className="exp-note">{e.note}</p>}
                </div>
                <Tag>{e.kind}</Tag>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
