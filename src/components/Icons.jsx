const Icon = ({ name, size = 20, stroke = 1.6 }) => {
  const s = {
    width: size, height: size, fill: "none", stroke: "currentColor",
    strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "home":
      return <svg viewBox="0 0 24 24" {...s}><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></svg>;
    case "book":
      return <svg viewBox="0 0 24 24" {...s}><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5z"/><path d="M4 19a2 2 0 0 0 2 2h12"/><path d="M9 7h6"/></svg>;
    case "calendar":
      return <svg viewBox="0 0 24 24" {...s}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>;
    case "exam":
      return <svg viewBox="0 0 24 24" {...s}><path d="M5 3h11l3 3v15H5z"/><path d="M9 12h6M9 16h6M9 8h3"/></svg>;
    case "survey":
      return <svg viewBox="0 0 24 24" {...s}><path d="M4 4h16v12H8l-4 4z"/><path d="M8 9h8M8 12h5"/></svg>;
    case "library":
      return <svg viewBox="0 0 24 24" {...s}><path d="M4 4h4v16H4zM10 4h4v16h-4zM17 5l3 1-4 14-3-1z"/></svg>;
    case "bell":
      return <svg viewBox="0 0 24 24" {...s}><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5z"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>;
    case "settings":
      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>;
    case "user":
      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case "search":
      return <svg viewBox="0 0 24 24" {...s}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case "play":
      return <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></svg>;
    case "clock":
      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "users":
      return <svg viewBox="0 0 24 24" {...s}><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0"/><path d="M16 4a3.5 3.5 0 0 1 0 7"/><path d="M22 20a6 6 0 0 0-5-5.9"/></svg>;
    case "comment":
      return <svg viewBox="0 0 24 24" {...s}><path d="M4 5h16v11H8l-4 4z"/></svg>;
    case "thumbs":
      return <svg viewBox="0 0 24 24" {...s}><path d="M7 11v9H4v-9zM7 11l4-7c1.6 0 2.5 1 2.5 2.5V10h5a2 2 0 0 1 2 2.3l-1.2 6A2 2 0 0 1 17.3 20H7"/></svg>;
    case "eye":
      return <svg viewBox="0 0 24 24" {...s}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>;
    case "chevron":
      return <svg viewBox="0 0 24 24" {...s}><path d="m9 6 6 6-6 6"/></svg>;
    case "arrow":
      return <svg viewBox="0 0 24 24" {...s}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case "badge":
      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="9" r="6"/><path d="m8 14-2 7 6-3 6 3-2-7"/></svg>;
    case "filter":
      return <svg viewBox="0 0 24 24" {...s}><path d="M3 5h18l-7 9v6l-4-2v-4z"/></svg>;
    case "spark":
      return <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2 14 9l7 2-7 2-2 7-2-7-7-2 7-2z"/></svg>;
    default:
      return null;
  }
};

export default Icon;
