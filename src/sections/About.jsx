import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import TrueFocus from '../bits/TrueFocus';
import '../bits/TrueFocus.css';
import CountUp from '../bits/CountUp';
import { STATS, JOURNEY } from '../data';
import { Slate, Reveal } from '../ui';

export default function About({ theme }) {
  const tung = theme === 'light' ? '#8a4f00' : '#ffb03a';
  const reel = useRef(null);

  // The reel line fills as you scroll through the story.
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo('.journey-progress', { scaleY: 0 }, {
      scaleY: 1, ease: 'none',
      scrollTrigger: { trigger: reel.current, start: 'top 70%', end: 'bottom 60%', scrub: 0.6 }
    });
  }, { scope: reel });

  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <Slate scene="SC.06" items={['About', 'Chennai, IN']} />
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
              <p className="about-lead">
                I've never followed a straight line. Every turn in my work started the same way — with curiosity, and a
                willingness to try something I didn't know how to do yet.
              </p>
              <p className="body-lg">
                It began with photographs, became a studio, turned into a question about how apps are made, and grew into
                a career in UX, digital experiences and AI. Here's how it unfolded.
              </p>
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

        <ol className="journey" ref={reel} aria-label="Career journey">
          <span className="journey-track" aria-hidden="true"><span className="journey-progress" /></span>
          {JOURNEY.map((j, i) => (
            <li key={j.scene} className={`journey-item ${j.current ? 'journey-current' : ''}`}>
              <span className="journey-dot" aria-hidden="true" />
              <div className="journey-when">{j.year}</div>
              <Reveal distance={28} delay={0.05}>
                <div className="journey-body">
                  <div className="slate">
                    <span className="slate-scene">Scene {String(i + 1).padStart(2, '0')}</span>
                    <span className="slate-sep" />
                    <span>{j.place}</span>
                    <span className="slate-sep" />
                    <span>{j.role}</span>
                  </div>
                  <h3 className="journey-title">{j.scene}</h3>
                  <p className="journey-story">{j.story}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
