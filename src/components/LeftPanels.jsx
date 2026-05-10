import Icon from './Icons';
import { MESSAGES, HISTORY } from '../data';

export const ProfilePanel = () => (
  <section className="panel profile">
    <div className="profile-top">
      <div className="avatar-wrap">
        <div className="avatar-ring" />
        <div className="avatar">莊</div>
        <span className="avatar-status" title="在線中" />
      </div>
      <div className="profile-name">
        <h2>莊佳燕 <span className="lvl">Lv.2</span></h2>
        <div className="profile-role">營運處 · 教育訓練組</div>
        <div className="profile-tags">
          <span className="tag tag--badge"><Icon name="badge" size={11} /> 1 Badges</span>
          <span className="tag">本月學習 4.2h</span>
        </div>
      </div>
    </div>
    <div className="profile-progress">
      <div className="progress-row">
        <span>升等進度 Lv.2 → Lv.3</span>
        <span>30 / 60</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: '50%' }} />
      </div>
    </div>
    <div className="profile-stats">
      <div className="stat">
        <div className="stat-num">0<span>h</span></div>
        <div className="stat-lbl">今日學習</div>
      </div>
      <div className="stat">
        <div className="stat-num">1</div>
        <div className="stat-lbl">學習徽章</div>
      </div>
      <div className="stat">
        <div className="stat-num">23</div>
        <div className="stat-lbl">完成課程</div>
      </div>
      <div className="stat">
        <div className="stat-num">30</div>
        <div className="stat-lbl">我的點數</div>
      </div>
    </div>
  </section>
);

export const TodoCard = () => (
  <section className="panel todo">
    <div className="todo-glow" />
    <div className="todo-inner">
      <div>
        <div className="todo-lbl">待辦事項</div>
        <div className="todo-num">0 <span>件</span></div>
        <div className="todo-sub">所有任務都完成了，幹得好 ✓</div>
      </div>
      <div className="todo-icon"><Icon name="exam" size={28} /></div>
    </div>
  </section>
);

export const MessageCenter = () => (
  <section className="panel msg">
    <div className="panel-head">
      <h3><span className="bar" />訊息中心</h3>
      <button className="more-btn">More <Icon name="chevron" size={12} /></button>
    </div>
    <ul className="msg-list">
      {MESSAGES.slice(0, 4).map((m, i) => (
        <li key={i} className={`msg-item ${m.unread ? 'is-unread' : ''}`}>
          <span className="msg-dot" />
          <div className="msg-body">
            <p className="msg-text">{m.text}</p>
            <span className="msg-time">{m.time}</span>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export const HistoryPanel = () => (
  <section className="panel history">
    <div className="panel-head">
      <h3><span className="bar" />學習軌跡</h3>
    </div>
    <ol className="hist-list">
      {HISTORY.map((h, i) => (
        <li key={i} className="hist-item">
          <span className="hist-node"><span /></span>
          <div>
            <p className="hist-title">{h.title}</p>
            <span className="hist-time">{h.time}</span>
          </div>
        </li>
      ))}
    </ol>
  </section>
);
