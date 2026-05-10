import Icon from './Icons';
import Cover from './Covers';

const fmt = n => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n;

const CourseCard = ({ c, variant = 'default' }) => (
  <article className={`card ${variant === 'featured' ? 'card--feat' : ''}`} tabIndex={0}>
    <div className="card-media">
      <Cover theme={c.cover} />
      <div className="card-media-veil" />
      {c.badge ? <span className="chip chip--series">{c.badge}</span> : null}
      {c.status === 'completed' ? <span className="chip chip--done">已完成</span> : null}
      {c.tag ? <span className="chip chip--tag">{c.tag}</span> : null}
      <div className="card-overlay">
        <p className="overlay-desc">{c.desc}</p>
        <div className="overlay-meta">
          {c.duration ? <span><Icon name="clock" size={13} /> {c.duration}</span> : null}
          {c.chapters ? <span><Icon name="book" size={13} /> {c.chapters} 單元</span> : null}
        </div>
        <button className="overlay-cta">
          <Icon name="play" size={12} /> 開始學習
        </button>
      </div>
    </div>
    <div className="card-body">
      <h3 className="card-title">{c.title}</h3>
      <div className="card-date">{c.date}</div>
      <div className="card-stats">
        {c.enrolled !== undefined ? (
          <span><Icon name="users" size={13} /> {fmt(c.enrolled)}</span>
        ) : (
          <span><Icon name="eye" size={13} /> {fmt(c.views)}</span>
        )}
        <span><Icon name="comment" size={13} /> {c.comments}</span>
        <span><Icon name="thumbs" size={13} /> {c.likes}</span>
      </div>
    </div>
  </article>
);

export default CourseCard;
