import FlowingMenu from '../bits/FlowingMenu';
import '../bits/FlowingMenu.css';
import { LAB } from '../data';
import { SectionHead } from '../ui';
import { useTheme } from '../theme/ThemeProvider';

export default function Lab({ theme }) {
  const { palette: p, theme: skin, mode } = useTheme();
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
          key={skin.id + mode}
          textColor={p.ink}
          bgColor={p.bg}
          marqueeBgColor={p.tungsten}
          marqueeTextColor={p['on-tungsten']}
          borderColor={p.line}
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
