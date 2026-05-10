// Sidebar (icon rail) for e學院

const Sidebar = ({ active, onChange }) => {
  const { NAV_ITEMS, NAV_FOOT } = window.E_DATA;
  const Icon = window.Icon;

  const Btn = ({ item }) => {
    const isActive = active === item.id;
    return (
      <button
        className={`nav-btn ${isActive ? "is-active" : ""}`}
        onClick={() => onChange(item.id)}
        aria-label={item.label}
      >
        <span className="nav-ico"><Icon name={item.icon} size={20}/></span>
        {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
        <span className="nav-tip">{item.label}</span>
      </button>
    );
  };

  return (
    <aside className="rail">
      <div className="rail-logo" title="e學院">
        <svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M4 24 16 6l12 18"/>
          <path d="M9 24 16 14l7 10"/>
        </svg>
      </div>
      <nav className="rail-main">
        {NAV_ITEMS.map(it => <Btn key={it.id} item={it}/>)}
      </nav>
      <div className="rail-foot">
        {NAV_FOOT.map(it => <Btn key={it.id} item={it}/>)}
        <div className="rail-avatar" title="莊佳燕">
          <span>莊</span>
        </div>
      </div>
    </aside>
  );
};

window.Sidebar = Sidebar;
