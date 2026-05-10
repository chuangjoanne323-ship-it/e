import Icon from './Icons';

const Topbar = () => (
  <header className="topbar">
    <div className="crumbs">
      <span className="crumb-cur">首頁 / Home</span>
      <span className="crumb-tag">企業學習平台</span>
    </div>
    <div className="search">
      <Icon name="search" size={15} />
      <input placeholder="搜尋課程、活動或測驗…" />
      <kbd>⌘K</kbd>
    </div>
    <div className="top-actions">
      <button className="top-btn" title="篩選"><Icon name="filter" size={16} /></button>
      <button className="top-btn" title="通知">
        <Icon name="bell" size={16} />
        <span className="bell-dot" />
      </button>
      <div className="top-divider" />
      <div className="top-user">
        <div className="top-user-avatar">莊</div>
        <div>
          <div className="top-user-name">莊佳燕</div>
          <div className="top-user-sub">Lv.2 · 30 pts</div>
        </div>
      </div>
    </div>
  </header>
);

export default Topbar;
