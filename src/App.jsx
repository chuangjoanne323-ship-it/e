import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import CourseCard from './components/CourseCard';
import { ProfilePanel, TodoCard, MessageCenter, HistoryPanel } from './components/LeftPanels';
import Icon from './components/Icons';
import { REQUIRED, LATEST } from './data';

const ACCENTS = {
  'warm-red': 'oklch(0.66 0.18 25)',
  'amber':    'oklch(0.74 0.16 65)',
  'emerald':  'oklch(0.68 0.15 165)',
  'violet':   'oklch(0.66 0.20 295)',
};

const CATS = [
  { id: 'all',        label: '全部' },
  { id: 'Compliance', label: '法遵' },
  { id: 'AI / R&D',  label: '技術 / AI' },
  { id: 'HR',         label: '人資' },
  { id: 'Quality',    label: '品質' },
  { id: 'Regulatory', label: '法規' },
  { id: 'Ethics',     label: '誠信' },
];

export default function App() {
  const [active, setActive] = useState('home');
  const [filter, setFilter] = useState('all');
  const [accent, setAccent] = useState('warm-red');
  const [imageStyle, setImageStyle] = useState('harmonized');
  const [density, setDensity] = useState('comfy');
  const [showRequiredCTA, setShowRequiredCTA] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', ACCENTS[accent] || ACCENTS['warm-red']);
  }, [accent]);

  const visible = filter === 'all' ? LATEST : LATEST.filter(c => c.tag === filter);

  const appCls = [
    'app',
    density === 'dense' ? 'dense' : '',
    imageStyle === 'vivid' ? 'img-vivid' : '',
    imageStyle === 'mono' ? 'img-mono' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={appCls}>
      <Sidebar active={active} onChange={setActive} />
      <main className="shell">
        <Topbar />
        <div className="body">
          {/* LEFT COLUMN */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <ProfilePanel />
            <TodoCard />
            <MessageCenter />
            <HistoryPanel />
          </aside>

          {/* RIGHT COLUMN */}
          <div className="right">
            {/* Required Courses */}
            <section className="section section--required">
              <div className="section-head">
                <h2>
                  <span className="bar" />
                  必修課程 Required Courses
                  <span className="meta">公司指派 · 需於期限內完成</span>
                </h2>
                <button className="more-btn">查看全部 <Icon name="chevron" size={12} /></button>
              </div>
              <div className="feat-row">
                <CourseCard c={REQUIRED[0]} variant="featured" />
                {showRequiredCTA && (
                  <div className="feat-cta">
                    <div>
                      <div className="feat-cta-eyebrow">Q2 學習目標</div>
                      <h3>距離 Lv.3 還差 30 點，再完成 2 堂必修課即可升等。</h3>
                      <p>本季公司指派 4 門必修課，已完成 1 門。下一門建議：「個人資料保護指南」。</p>
                    </div>
                    <div>
                      <div className="deadline-list">
                        <div className="deadline-item">
                          <div className="left"><span className="deadline-dot" />個人資料保護指南</div>
                          <span className="deadline-time">2026.06.30 截止</span>
                        </div>
                        <div className="deadline-item">
                          <div className="left"><span className="deadline-dot" />誠信經營守則 年度回訓</div>
                          <span className="deadline-time">2026.07.15 截止</span>
                        </div>
                      </div>
                      <div className="feat-cta-actions">
                        <button className="btn btn-primary"><Icon name="play" size={12} /> 繼續學習</button>
                        <button className="btn btn-ghost">查看學習計畫 <Icon name="arrow" size={13} /></button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Latest Courses */}
            <section className="section">
              <div className="section-head">
                <h2><span className="bar" />最新課程 Latest Courses</h2>
                <div className="section-foot">
                  <span className="tab is-on">最新</span>
                  <span className="tab">熱門</span>
                  <span className="tab">推薦</span>
                </div>
              </div>
              <div className="cat-row" style={{ marginBottom: 18 }}>
                {CATS.map(c => (
                  <button
                    key={c.id}
                    className={`cat-chip ${filter === c.id ? 'is-on' : ''}`}
                    onClick={() => setFilter(c.id)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <div className="grid">
                {visible.map(c => <CourseCard key={c.id} c={c} />)}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
