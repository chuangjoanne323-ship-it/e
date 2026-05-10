import Icon from './Icons';
import { NAV_ITEMS, NAV_FOOT } from '../data';

const NavBtn = ({ item, isActive, onClick }) => (
  <button
    className={`nav-btn ${isActive ? 'is-active' : ''}`}
    onClick={() => onClick(item.id)}
    aria-label={item.label}
  >
    <Icon name={item.icon} size={20} />
    {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
    <span className="nav-tip">{item.label}</span>
  </button>
);

const Sidebar = ({ active, onChange }) => (
  <aside className="rail">
    <div className="rail-logo" title="e學院">
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M4 24 16 6l12 18" />
        <path d="M9 24 16 14l7 10" />
      </svg>
    </div>
    <nav className="rail-main">
      {NAV_ITEMS.map(it => (
        <NavBtn key={it.id} item={it} isActive={active === it.id} onClick={onChange} />
      ))}
    </nav>
    <div className="rail-foot">
      {NAV_FOOT.map(it => (
        <NavBtn key={it.id} item={it} isActive={active === it.id} onClick={onChange} />
      ))}
      <div className="rail-avatar" title="莊佳燕">莊</div>
    </div>
  </aside>
);

export default Sidebar;
