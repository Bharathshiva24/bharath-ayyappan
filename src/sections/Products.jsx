import { useEffect, useRef, useState } from 'react';
import { PRODUCTS } from '../data';
import { SectionHead, Status, Reveal } from '../ui';

function Notice({ notice, onClose, returnTo }) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.querySelector('button')?.focus();
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); returnTo?.focus(); };
  }, [onClose, returnTo]);
  return (
    <div className="notice-backdrop" onClick={onClose}>
      <div className="notice" ref={ref} role="alertdialog" aria-modal="true" aria-labelledby="notice-title" aria-describedby="notice-body" onClick={e => e.stopPropagation()}>
        <span className="notice-status"><span className="status-dot" aria-hidden="true" /> Building</span>
        <h3 id="notice-title" className="notice-title">{notice.title}</h3>
        <p id="notice-body" className="notice-body">{notice.body}</p>
        <button type="button" className="btn btn-primary" onClick={onClose}>Got it</button>
      </div>
    </div>
  );
}

export default function Products() {
  const [notice, setNotice] = useState(null);
  return (
    <section className="section products" id="products" aria-labelledby="products-title">
      <div className="container">
        <SectionHead
          scene="SC.02"
          meta={['Founder', `${PRODUCTS.length} ventures`]}
          title={<span id="products-title">Products I've founded</span>}
          intro="Ideas I cared about enough to take from sketch to company — local AI, live streaming, generative content and film."
        />
        <ol className="products-list">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} distance={24}>
              <li className="product">
                {(() => {
                  const inner = (<>
                  <span className="product-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="product-title">{p.title}</span>
                  <span className="product-line">{p.line}</span>
                  <span className="product-meta">
                    <Status state={p.status}>{p.statusLabel}</Status>
                    <span className="product-years">{p.year}</span>
                  </span>
                  <span className="product-arrow" aria-hidden="true">{p.notice ? 'i' : '↗'}</span>
                  </>);
                  return p.notice ? (
                    <button type="button" className="product-link product-btn cursor-target" data-cursor-label="Info" aria-haspopup="dialog" onClick={e => setNotice({ notice: p.notice, from: e.currentTarget })}>{inner}</button>
                  ) : (
                    <a className="product-link cursor-target" href={p.href} data-cursor-label="Visit" {...(/^https?:/.test(p.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{inner}</a>
                  );
                })()}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
      {notice && <Notice notice={notice.notice} returnTo={notice.from} onClose={() => setNotice(null)} />}
    </section>
  );
}
