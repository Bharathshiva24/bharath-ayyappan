import LightRays from '../bits/LightRays';
import '../bits/LightRays.css';
import SplitText from '../bits/SplitText';
import { Slate, Button, Reveal } from '../ui';
import { PROFILE } from '../data';

export default function Hero({ theme }) {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-rays" aria-hidden="true">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffb03a"
          raysSpeed={0.6}
          lightSpread={0.7}
          rayLength={2.2}
          intensity={theme === 'light' ? 0.6 : 0.85}
          glow={0.5}
          haze={0.3}
          followMouse
          mouseInfluence={0.06}
          clickPulse={false}
          noiseAmount={0.05}
          lightMode={theme === 'light'}
          maxDevicePixelRatio={1.5}
        />
      </div>

      <div className="container hero-inner">
        <Slate scene="SC.00" items={[PROFILE.name, PROFILE.location, PROFILE.role]} />

        <h1 className="hero-h">
          <span className="sr-only">Designed with intent. Built to ship.</span>
          <span aria-hidden="true">
            <SplitText text="Designed with intent." tag="span" splitType="words" effect="rise" mask delay={70} duration={1.1} textAlign="left" trigger="load" className="hero-line" />
            <SplitText text="Built to ship." tag="span" splitType="words" effect="rise" mask delay={70} duration={1.1} textAlign="left" trigger="load" className="hero-line hero-line-2" />
          </span>
        </h1>

        <div className="hero-foot">
          <Reveal delay={0.7} distance={24}>
            <p className="hero-intro">
              I'm a product designer and creative technologist. For nine years I've moved between the <strong>camera</strong>,
              the <strong>canvas</strong> and the <strong>codebase</strong> — shaping apps, speculative tech and open-source tools
              from first sketch to shipped release.
            </p>
          </Reveal>
          <Reveal delay={0.85} distance={24}>
            <div className="hero-actions">
              <Button variant="primary" href="#work" arrow magnetic label="Roll">View selected work</Button>
              <Button href="#contact" label="Hello">Get in touch</Button>
            </div>
          </Reveal>
        </div>
      </div>

      <a className="hero-scroll cursor-target" href="#work" aria-label="Scroll to work" data-cursor-label="Scroll">
        <span>Scroll</span><span className="hero-scroll-line" />
      </a>
    </section>
  );
}
