import FlowingMenu from '../bits/FlowingMenu';
import '../bits/FlowingMenu.css';
import { LAB } from '../data';
import { SectionHead } from '../ui';

export default function Lab({ theme }) {
  const dark = theme !== 'light';
  return (
    <section className="section lab" id="lab" aria-labelledby="lab-title">
      <div className="container">
        <SectionHead
          scene="SC.03"
          meta={['Open source', 'Built with AI']}
          title={<span id="lab-title">The Lab</span>}
          intro="Weekend builds that turned into real tools. Designed, coded with Claude, and released under MIT — hover a row to run the reel."
        />
      </div>
      <div className="lab-menu">
        <FlowingMenu
          items={LAB}
          speed={50}
          textColor={dark ? '#f3efe7' : '#141312'}
          bgColor={dark ? '#0a0a0b' : '#f4f1ea'}
          marqueeBgColor="#ffb03a"
          marqueeTextColor="#141312"
          borderColor={dark ? '#2a2a2e' : '#dcd7cc'}
          showIndex
          showArrow
          imageShape="rounded"
          align="left"
          ariaLabel="Open-source projects"
        />
      </div>
    </section>
  );
}
