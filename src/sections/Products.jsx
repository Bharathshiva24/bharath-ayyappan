import { PRODUCTS } from '../data';
import { SectionHead, Status, Reveal } from '../ui';

export default function Products() {
  return (
    <section className="section products" id="products" aria-labelledby="products-title">
      <div className="container">
        <SectionHead
          scene="SC.02"
          meta={['Founder', '3 ventures']}
          title={<span id="products-title">Products I've founded</span>}
          intro="Ideas I cared about enough to take from sketch to company — local AI, generative content and film."
        />
        <ol className="products-list">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} distance={24}>
              <li className="product">
                <a className="product-link cursor-target" href={p.href} data-cursor-label="Visit" {...(/^https?:/.test(p.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <span className="product-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="product-title">{p.title}</span>
                  <span className="product-line">{p.line}</span>
                  <span className="product-meta">
                    <Status state={p.status}>{p.statusLabel}</Status>
                    <span className="product-years">{p.year}</span>
                  </span>
                  <span className="product-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
