;(function () {

// ═══════════════════════════════════════════════════════════
// CSS
// ═══════════════════════════════════════════════════════════
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

.rf {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: #fff; color: #000;
  height: 100%; display: flex; flex-direction: column;
  overflow: hidden; font-size: 14px;
}
.rf * { box-sizing: border-box; }

.rf-topbar {
  display: flex; align-items: center;
  padding: 10px 14px; border-bottom: 1px solid #e5e5e5;
  flex-shrink: 0; position: relative; z-index: 10;
  background: #fff;
}
.rf-topbar-title {
  font-family: 'Dancing Script', cursive;
  font-size: 20px; font-weight: 700; letter-spacing: .5px;
  flex: 1; text-align: center;
}
.rf-topbar-left, .rf-topbar-right {
  display: flex; align-items: center; gap: 4px; min-width: 70px;
}
.rf-topbar-right { justify-content: flex-end; }

.rf-icon-btn {
  background: none; border: none; cursor: pointer;
  padding: 6px; display: flex; align-items: center; color: #000;
  border-radius: 50%;
}
.rf-icon-btn:hover { background: #f0f0f0; }
.rf-icon-btn:disabled { opacity: .3; cursor: default; }

.rf-bottomnav {
  display: flex; border-top: 1px solid #e5e5e5; flex-shrink: 0;
}
.rf-nav-item {
  flex: 1; display: flex; flex-direction: column; align-items: center;
  padding: 8px 0 6px; cursor: pointer; font-size: 11px;
  color: #888; border: none; background: none; gap: 3px;
}
.rf-nav-item.active { color: #000; font-weight: 700; }
.rf-nav-item svg { width: 22px; height: 22px; }

.rf-content { flex: 1; overflow-y: auto; position: relative; }

.rf-post {
  display: flex; gap: 10px; padding: 12px 14px;
  border-bottom: 1px solid #e5e5e5; cursor: pointer;
}
.rf-post:hover { background: #fafafa; }
.rf-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  border: 1px solid #e5e5e5; background: #f0f0f0;
  flex-shrink: 0; overflow: hidden; display: flex;
  align-items: center; justify-content: center;
}
.rf-avatar img { width: 100%; height: 100%; object-fit: cover; }
.rf-post-body { flex: 1; min-width: 0; }
.rf-post-header {
  display: flex; align-items: baseline; gap: 6px;
  margin-bottom: 4px; flex-wrap: wrap;
}
.rf-post-name { font-weight: 700; font-size: 14px; }
.rf-post-tag {
  font-size: 10px; padding: 1px 5px;
  border: 1px solid #ccc; border-radius: 10px; color: #666;
}
.rf-post-time { color: #999; font-size: 11px; margin-left: auto; }
.rf-post-text { line-height: 1.5; white-space: pre-wrap; word-break: break-word; }
.rf-post-actions { display: flex; gap: 14px; margin-top: 10px; }
.rf-post-action-btn {
  background: none; border: none; cursor: pointer;
  color: #888; font-size: 12px; display: flex;
  align-items: center; gap: 4px; padding: 0;
}
.rf-post-action-btn:hover { color: #000; }
.rf-post-action-btn svg { width: 16px; height: 16px; }

.rf-fab {
  position: absolute; right: 18px; bottom: 18px;
  width: 48px; height: 48px; border-radius: 50%;
  border: none; background: #000; color: #fff;
  font-size: 26px; cursor: pointer; z-index: 10;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
}
.rf-fab:hover { background: #333; }

.rf-modal-overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,.35); display: flex;
  align-items: flex-end; z-index: 200;
}
.rf-modal {
  background: #fff; width: 100%;
  border-radius: 16px 16px 0 0; padding: 16px;
  max-height: 85%; overflow-y: auto;
}
.rf-modal-title { font-weight: 700; font-size: 15px; margin-bottom: 12px; }
.rf-textarea {
  width: 100%; border: 1px solid #e5e5e5; border-radius: 8px;
  padding: 10px; font-size: 14px; resize: none; outline: none;
  min-height: 80px; font-family: inherit;
}
.rf-textarea:focus { border-color: #000; }
.rf-btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 8px 18px; border-radius: 20px; border: none;
  cursor: pointer; font-size: 14px; font-weight: 600; font-family: inherit;
}
.rf-btn-primary { background: #000; color: #fff; }
.rf-btn-primary:hover { background: #222; }
.rf-btn-ghost { background: none; border: 1px solid #ccc; color: #000; }
.rf-btn-ghost:hover { background: #f5f5f5; }
.rf-btn-sm { padding: 5px 14px; font-size: 12px; }

.rf-section-tabs { display: flex; border-bottom: 1px solid #e5e5e5; flex-shrink: 0; }
.rf-section-tab {
  flex: 1; text-align: center; padding: 10px 0;
  cursor: pointer; font-size: 14px; color: #666;
  border: none; background: none; border-bottom: 2px solid transparent;
  font-family: inherit;
}
.rf-section-tab.active { color: #000; font-weight: 700; border-bottom-color: #000; }

/* Profile cover — full-screen style */
.rf-profile-scroll { flex: 1; overflow-y: auto; }
.rf-profile-cover-wrap { position: relative; }
.rf-profile-cover {
  width: 100%; height: 42vh; min-height: 200px;
  background: linear-gradient(135deg,#e0e0e0,#c8c8c8);
  overflow: hidden;
}
.rf-profile-cover img { width: 100%; height: 100%; object-fit: cover; }
.rf-profile-header {
  padding: 0 14px 12px; border-bottom: 1px solid #e5e5e5;
  margin-top: -34px; position: relative;
}
.rf-profile-avatar {
  width: 68px; height: 68px; border-radius: 50%;
  border: 3px solid #fff; background: #f0f0f0;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; overflow: hidden; margin-bottom: 6px;
}
.rf-profile-avatar img { width: 100%; height: 100%; object-fit: cover; }
.rf-profile-name { font-size: 18px; font-weight: 700; }
.rf-profile-handle { color: #666; font-size: 13px; margin-bottom: 4px; }
.rf-profile-tabs { display: flex; border-bottom: 1px solid #e5e5e5; flex-shrink: 0; background: #fff; position: sticky; top: 0; z-index: 5; }
.rf-profile-tab {
  flex: 1; text-align: center; padding: 10px 0;
  cursor: pointer; font-size: 12px; color: #666;
  border: none; background: none; border-bottom: 2px solid transparent;
  font-family: inherit;
}
.rf-profile-tab.active { color: #000; font-weight: 700; border-bottom-color: #000; }

.rf-settings-item {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 16px; border-bottom: 1px solid #f0f0f0; cursor: pointer;
}
.rf-settings-item:hover { background: #fafafa; }
.rf-settings-label { font-size: 14px; }
.rf-settings-value { color: #999; font-size: 13px; }
.rf-form-group { padding: 10px 16px; border-bottom: 1px solid #f0f0f0; }
.rf-form-label { font-size: 12px; color: #666; margin-bottom: 5px; }
.rf-form-input {
  width: 100%; border: 1px solid #e5e5e5; border-radius: 6px;
  padding: 8px 10px; font-size: 14px; outline: none; font-family: inherit;
}
.rf-form-input:focus { border-color: #000; }
.rf-worldview-text {
  width: 100%; border: 1px solid #e5e5e5; border-radius: 6px;
  padding: 8px 10px; font-size: 13px; outline: none; font-family: inherit;
  resize: none; min-height: 260px; line-height: 1.6;
}
.rf-worldview-text:focus { border-color: #000; }
.rf-worldbook-item {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 16px; border-bottom: 1px solid #f0f0f0;
}
.rf-worldbook-item input[type=checkbox] { width: 16px; height: 16px; cursor: pointer; }
.rf-worldbook-item label { flex: 1; font-size: 14px; cursor: pointer; }
.rf-empty {
  text-align: center; color: #999; padding: 56px 24px;
  font-size: 14px; line-height: 1.8;
}
.rf-wip {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; height: 100%; color: #aaa; gap: 12px; font-size: 14px;
}

/* Detail page */
.rf-detail-header { padding: 14px 14px 0; display: flex; gap: 10px; }
.rf-detail-text {
  padding: 8px 14px 12px; font-size: 15px; line-height: 1.6;
  white-space: pre-wrap; word-break: break-word; border-bottom: 1px solid #e5e5e5;
}
.rf-detail-stats {
  display: flex; gap: 18px; padding: 10px 14px;
  border-bottom: 1px solid #e5e5e5; font-size: 13px; color: #666;
}
.rf-detail-stats span b { color: #000; font-weight: 700; }
.rf-detail-comment-input {
  padding: 10px 14px; border-top: 1px solid #e5e5e5;
  display: flex; gap: 8px; align-items: flex-end; flex-shrink: 0;
}
.rf-detail-comment-input textarea {
  flex: 1; border: 1px solid #e5e5e5; border-radius: 20px;
  padding: 8px 12px; font-size: 13px; outline: none;
  font-family: inherit; resize: none; min-height: 36px; max-height: 100px; line-height: 1.4;
}
.rf-detail-comment-input textarea:focus { border-color: #000; }
.rf-comment-row {
  display: flex; gap: 8px; padding: 10px 14px;
  border-bottom: 1px solid #f0f0f0;
}
.rf-comment-avatar {
  width: 32px; height: 32px; border-radius: 50%;
  border: 1px solid #e5e5e5; flex-shrink: 0; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; background: #f0f0f0;
}
.rf-comment-avatar img { width: 100%; height: 100%; object-fit: cover; }
.rf-comment-meta { font-weight: 600; font-size: 12px; color: #444; margin-bottom: 2px; }
.rf-comment-text { font-size: 13px; line-height: 1.4; white-space: pre-wrap; word-break: break-word; }
.rf-comment-reply-btn {
  background: none; border: none; color: #aaa; font-size: 11px;
  cursor: pointer; padding: 2px 0; margin-top: 3px;
}
.rf-comment-reply-btn:hover { color: #666; }
.rf-reply-area { background: #f8f8f8; border-radius: 8px; margin-top: 4px; padding: 6px 10px; }
.rf-reply-item {
  font-size: 12px; color: #555; padding: 3px 0;
  border-bottom: 1px solid #eee; line-height: 1.4;
}
.rf-reply-item:last-child { border-bottom: none; }
.rf-reply-item b { color: #000; }

/* DM page — TikTok style */
.rf-dm-list { flex: 1; overflow-y: auto; }
.rf-dm-item {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px; border-bottom: 1px solid #f0f0f0; cursor: pointer;
}
.rf-dm-item:hover { background: #fafafa; }
.rf-dm-av {
  width: 50px; height: 50px; border-radius: 50%; border: 1px solid #e5e5e5;
  background: #f0f0f0; flex-shrink: 0; overflow: hidden;
  display: flex; align-items: center; justify-content: center; font-size: 20px;
}
.rf-dm-info { flex: 1; min-width: 0; }
.rf-dm-name { font-weight: 700; font-size: 15px; }
.rf-dm-preview { color: #888; font-size: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-top: 2px; }
.rf-dm-time { color: #aaa; font-size: 11px; flex-shrink: 0; }
.rf-dm-unread {
  width: 8px; height: 8px; border-radius: 50%; background: #000;
  flex-shrink: 0; margin-left: 4px;
}
/* Chat page */
.rf-chat-wrap { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.rf-chat-messages { flex: 1; overflow-y: auto; padding: 12px 14px; display: flex; flex-direction: column; gap: 12px; }
.rf-chat-msg { display: flex; gap: 8px; align-items: flex-end; }
.rf-chat-msg.me { flex-direction: row-reverse; }
.rf-chat-bubble {
  max-width: 70%; padding: 9px 13px; border-radius: 18px;
  font-size: 14px; line-height: 1.5; word-break: break-word;
}
.rf-chat-msg.them .rf-chat-bubble { background: #f0f0f0; border-bottom-left-radius: 4px; }
.rf-chat-msg.me .rf-chat-bubble { background: #000; color: #fff; border-bottom-right-radius: 4px; }
.rf-chat-av {
  width: 32px; height: 32px; border-radius: 50%; border: 1px solid #e5e5e5;
  background: #f0f0f0; flex-shrink: 0; overflow: hidden; font-size: 14px;
  display: flex; align-items: center; justify-content: center;
}
.rf-chat-av img { width: 100%; height: 100%; object-fit: cover; }
.rf-chat-input {
  padding: 10px 14px; border-top: 1px solid #e5e5e5;
  display: flex; gap: 8px; align-items: flex-end; flex-shrink: 0;
}
.rf-chat-input textarea {
  flex: 1; border: 1px solid #e5e5e5; border-radius: 20px;
  padding: 8px 14px; font-size: 14px; outline: none;
  font-family: inherit; resize: none; min-height: 38px; max-height: 100px; line-height: 1.4;
}
.rf-chat-input textarea:focus { border-color: #000; }
.rf-chat-typing { color: #aaa; font-size: 12px; padding: 4px 8px; font-style: italic; }

/* Loading overlay */
.rf-loading-overlay {
  position: absolute; inset: 0;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; z-index: 999; gap: 12px;
}
.rf-loading-spinner { font-size: 52px; animation: rf-spin 1s linear infinite; display: inline-block; }
.rf-loading-hint { font-size: 13px; color: #888; }
@keyframes rf-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* Settings utils */
.rf-beauty-group { padding: 14px 16px; border-bottom: 1px solid #f0f0f0; }
.rf-beauty-label { font-size: 13px; color: #555; margin-bottom: 10px; display: flex; justify-content: space-between; }
.rf-beauty-label span { color: #000; font-weight: 600; }
.rf-beauty-slider { width: 100%; accent-color: #000; }
.rf-divider-label { font-size: 11px; color: #aaa; padding: 10px 16px 4px; text-transform: uppercase; letter-spacing: .5px; }
.rf-library-item { display: flex; align-items: flex-start; gap: 10px; padding: 10px 14px; border-bottom: 1px solid #f0f0f0; }
.rf-library-item input[type=checkbox] { margin-top: 2px; width: 16px; height: 16px; cursor: pointer; flex-shrink: 0; }
.rf-library-item-body { flex: 1; min-width: 0; }
.rf-library-cat { font-size: 10px; color: #888; margin-bottom: 2px; }
.rf-library-content { font-size: 13px; line-height: 1.4; word-break: break-word; }
.rf-library-del { background: none; border: none; color: #ccc; cursor: pointer; padding: 2px; flex-shrink: 0; margin-top: 1px; }
.rf-library-del:hover { color: #c00; }
`

// ═══════════════════════════════════════════════════════════
// SVG Icons
// ═══════════════════════════════════════════════════════════
const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`,
  section: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>`,
  message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  profile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 018-8c2.2 0 4.2.9 5.7 2.3L21 9"/><path d="M20 12a8 8 0 01-8 8c-2.2 0-4.2-.9-5.7-2.3L3 15"/><polyline points="21 3 21 9 15 9"/><polyline points="3 21 3 15 9 15"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><polyline points="12 5 5 12 12 19"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/></svg>`,
  comment: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  retweet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/></svg>`,
  summon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  settingAvatar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
  settingProfile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  settingWorld: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 010 20"/><path d="M12 2a15.3 15.3 0 000 20"/></svg>`,
  settingBook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
  settingBeauty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  settingPost: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="13" y2="16"/></svg>`,
  settingLibrary: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>`,
  settingTrash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`,
}

function mkSvg(s) { const d = document.createElement('div'); d.innerHTML = s; return d.firstElementChild }

// ═══════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════
function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag)
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') e.className = v
    else if (k === 'style') { if (typeof v === 'string') e.setAttribute('style', v); else Object.assign(e.style, v) }
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v)
    else e.setAttribute(k, v)
  }
  for (const c of children) {
    if (c == null) continue
    if (typeof c === 'string') e.appendChild(document.createTextNode(c))
    else e.appendChild(c)
  }
  return e
}
function fmtTime(ts) {
  const diff = (Date.now() - ts) / 1000
  if (diff < 60) return '刚刚'
  if (diff < 3600) return `${Math.floor(diff / 60)}分钟前`
  if (diff < 86400) return `${Math.floor(diff / 3600)}小时前`
  const d = new Date(ts)
  return `${d.getMonth()+1}月${d.getDate()}日`
}
function avatarEl(url, size = 40) {
  const wrap = el('div', { class: 'rf-avatar', style: `width:${size}px;height:${size}px` })
  if (url) { const img = el('img', { src: url, alt: '' }); img.onerror = () => img.remove(); wrap.appendChild(img) }
  return wrap
}
function showLoadingOverlay(mountEl, hint = 'AI 生成中…') {
  const ov = el('div', { class: 'rf-loading-overlay' })
  ov.appendChild(el('div', { class: 'rf-loading-spinner' }, '🍘'))
  ov.appendChild(el('div', { class: 'rf-loading-hint' }, hint))
  mountEl.appendChild(ov)
  return ov
}
function hideLoadingOverlay(ov) { ov && ov.remove() }

// ═══════════════════════════════════════════════════════════
// State
// ═══════════════════════════════════════════════════════════
let roche = null
const state = {
  page: 'home',
  sectionTab: 0,
  profileTab: 0,
  loading: false,
  homePosts: [],
  crossPosts: [],
  parallelPosts: [],
  myPosts: [],
  savedPosts: [],
  dmConversations: [], // [{id, charName, worldTag, avatar, messages:[{role,text,ts}]}]
  userProfile: { handle: '', name: '', age: '', appearance: '', avatarUrl: '', coverUrl: '' },
  worldview: `这是一个论坛，发帖人是角色本人发帖。角色由AI自由选择，来自游戏、动漫、小说等高热门作品。
$角色发帖日常、剧情、小烦恼等
$角色可以从游戏、漫画、动漫、小说等各个方面选择（如：崩铁、原神、鸣潮、王者、蓝色监狱、咒术回战等高热门游戏、动漫、小说）
$游戏用户是代入主角，禁止出现如开拓者（星、穹）、旅行者（空、荧）等主角角色的评论，这是绝对禁止
$论坛偏乙女向（代入向），用户为女孩子，绝对禁止角色认为用户为男生
$绝对禁止出现耽美小说漫画等角色（禁止BL，不要出现任何BL配对或角色）
自检：
1. 有没有根据角色世界观、人设发帖？有就继续。
2. 有没有出现开拓者/旅行者等游戏主角？有就改。
3. 角色有没有将用户认为是男生？有就改。
4. 有没有出现耽美角色？有就改。`,
  boundWorldbooks: [],
  beauty: { topbarPadding: 10 },
  postSettings: { postCount: 5, commentPerPost: 3 },
  dataLibrary: [],
}

// ═══════════════════════════════════════════════════════════
// Storage
// ═══════════════════════════════════════════════════════════
const STORAGE_KEYS = ['homePosts','crossPosts','parallelPosts','myPosts','savedPosts','dmConversations',
  'userProfile','worldview','boundWorldbooks','beauty','postSettings','dataLibrary']
async function loadStorage() {
  for (const k of STORAGE_KEYS) {
    const v = await roche.storage.get(k)
    if (v !== null && v !== undefined) state[k] = v
  }
}
async function save(key) { await roche.storage.set(key, state[key]) }

// ═══════════════════════════════════════════════════════════
// AI 生成
// ═══════════════════════════════════════════════════════════
async function buildContext() {
  let wbContext = ''
  for (const catId of state.boundWorldbooks) {
    try {
      const entries = await roche.worldbook.getEntries({ categoryId: catId })
      if (entries?.length) wbContext += entries.map(e => e.content || e.text || '').filter(Boolean).join('\n') + '\n'
    } catch (_) {}
  }
  const libContext = state.dataLibrary.filter(e => e.enabled !== false)
    .map(e => (e.category ? `[${e.category}] ` : '') + e.content).join('\n')
  return { wbContext, libContext }
}

// 获取最近几条帖子用于防重复记忆
function getRecentMemory(listKey, count = 4) {
  const posts = state[listKey] || []
  return posts.slice(0, count).map(p => `${p.authorName}（${p.worldTag || '?'}）`).join('、')
}

async function generatePosts(mode) {
  const { wbContext, libContext } = await buildContext()
  const userHandle = state.userProfile.handle || '用户'
  const userDesc = [state.userProfile.name, state.userProfile.age ? state.userProfile.age + '岁' : '', state.userProfile.appearance].filter(Boolean).join('，')
  const postCount = state.postSettings?.postCount || 5
  const commentPerPost = state.postSettings?.commentPerPost || 3

  // 记忆上下文
  const listKey = mode === 'home' ? 'homePosts' : mode === 'cross' ? 'crossPosts' : 'parallelPosts'
  const recentMemory = getRecentMemory(listKey)

  const systemPrompt = `你是一个角色论坛AI内容生成器。从高人气游戏/动漫/小说中自由选取角色。
世界观规则：
${state.worldview}
${wbContext ? `世界书参考：\n${wbContext}` : ''}
${libContext ? `资料库参考：\n${libContext}` : ''}
用户：论坛昵称 @${userHandle}，${userDesc || '女生'}。
⚠️ 只输出JSON，不要其他文字。`

  let userPrompt = ''
  const memHint = recentMemory ? `\n⚠️ 记忆提示：最近已出现过这些角色，请尽量选择不同角色：${recentMemory}` : ''
  const jsonFmt = `{"posts":[{"name":"角色名","worldTag":"作品名","text":"帖子内容","likes":0,"retweets":0,"comments":[{"name":"角色名","worldTag":"作品名（同帖子作品）","text":"评论内容"}]}]}`
  const jsonFmtCross = `{"posts":[{"name":"角色名","worldTag":"作品名","text":"帖子内容","likes":0,"retweets":0,"comments":[{"name":"角色名","worldTag":"任意作品名","text":"评论内容"}]}]}`

  if (mode === 'home') {
    userPrompt = `生成${postCount}条主页帖子。每条帖子选一个角色，内容是角色日常/剧情/小烦恼。⚠️每条帖子恰好${commentPerPost}条评论，评论者必须来自与发帖角色【完全相同的作品】，角色名就是论坛名不要分开。严格遵守世界观规则。${memHint}\nJSON格式：${jsonFmt}`
  } else if (mode === 'cross') {
    userPrompt = `生成${postCount}条跨界板块帖子，发帖人来自不同作品。评论区有其他作品角色跨界评论（此板块允许跨作品）。恰好${commentPerPost}条评论。严格遵守世界观规则。${memHint}\nJSON格式：${jsonFmtCross}`
  } else {
    userPrompt = `生成${postCount}条平行板块帖子，内容是角色与用户@${userHandle}的恋爱日常，温馨乙女向。⚠️${commentPerPost}条评论，评论者必须来自与发帖角色【相同的作品】。严格遵守世界观规则。${memHint}\nJSON格式：${jsonFmt}`
  }

  const result = await roche.ai.chat({
    messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
    temperature: 0.93
  })
  let parsed
  try {
    const raw = result.text.trim()
    parsed = JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1))
  } catch (e) { throw new Error('AI返回格式错误，请重试') }

  return (parsed.posts || []).map(p => ({
    id: crypto.randomUUID(),
    timestamp: Date.now() - Math.floor(Math.random() * 7200000),
    authorName: p.name || '未知角色',
    worldTag: p.worldTag || '',
    text: p.text || '',
    likes: p.likes || Math.floor(Math.random() * 80),
    retweets: p.retweets || Math.floor(Math.random() * 30),
    comments: (p.comments || []).map(c => ({
      name: c.name || '角色',
      worldTag: c.worldTag || p.worldTag || '',
      text: c.text || '',
      replies: []
    })),
  }))
}

async function summonComments(post) {
  const { libContext } = await buildContext()
  const count = state.postSettings?.commentPerPost || 3
  const sys = `你是角色论坛AI。只输出JSON，不要其他文字。${libContext ? `资料库参考：\n${libContext}` : ''}`
  const usr = `以下帖子需要新评论：
作者：${post.authorName}（${post.worldTag}）
内容：${post.text}
请生成${count}条来自${post.worldTag || '同一作品'}角色的评论，禁止BL角色和游戏主角。
JSON格式：{"comments":[{"name":"角色名","worldTag":"${post.worldTag || '同一作品'}","text":"评论内容"}]}`
  const result = await roche.ai.chat({ messages: [{ role: 'system', content: sys }, { role: 'user', content: usr }], temperature: 0.9 })
  let parsed
  try {
    const raw = result.text.trim()
    parsed = JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1))
  } catch (e) { throw new Error('AI返回格式错误') }
  return (parsed.comments || []).map(c => ({ name: c.name, worldTag: c.worldTag || post.worldTag || '', text: c.text || '', replies: [] }))
}

// DM: AI 角色回复
async function dmAiReply(conv) {
  const lastMsgs = conv.messages.slice(-8).map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text }))
  const sys = `你现在扮演${conv.charName}（来自${conv.worldTag}），以角色身份与用户私信聊天。保持角色人设，不要出戏。用户是女生，请用符合角色语气的中文回复，不要超过100字。`
  const result = await roche.ai.chat({ messages: [{ role: 'system', content: sys }, ...lastMsgs], temperature: 0.88 })
  return result.text.trim()
}

// ═══════════════════════════════════════════════════════════
// Post card
// ═══════════════════════════════════════════════════════════
function postCard(post, listKey, onOpenDetail) {
  const card = el('div', { class: 'rf-post' })
  card.appendChild(avatarEl(post.avatar || '', 40))
  const body = el('div', { class: 'rf-post-body' })
  const header = el('div', { class: 'rf-post-header' })
  header.appendChild(el('span', { class: 'rf-post-name' }, post.authorName))
  if (post.worldTag) header.appendChild(el('span', { class: 'rf-post-tag' }, post.worldTag))
  header.appendChild(el('span', { class: 'rf-post-time' }, fmtTime(post.timestamp)))
  body.appendChild(header)
  body.appendChild(el('div', { class: 'rf-post-text' }, post.text))
  const actions = el('div', { class: 'rf-post-actions' })
  actions.onclick = e => e.stopPropagation()
  // comment
  const cmtBtn = el('button', { class: 'rf-post-action-btn' })
  cmtBtn.appendChild(mkSvg(ICONS.comment))
  cmtBtn.appendChild(document.createTextNode(' ' + (post.comments?.length || 0)))
  cmtBtn.onclick = e => { e.stopPropagation(); onOpenDetail && onOpenDetail(post) }
  actions.appendChild(cmtBtn)
  // retweet
  const rtBtn = el('button', { class: 'rf-post-action-btn' })
  rtBtn.appendChild(mkSvg(ICONS.retweet))
  const rtCount = el('span', {}, ' ' + (post.retweets || 0))
  rtBtn.appendChild(rtCount)
  rtBtn.onclick = e => { e.stopPropagation(); post.retweets = (post.retweets || 0) + 1; rtCount.textContent = ' ' + post.retweets; save(listKey) }
  actions.appendChild(rtBtn)
  // like
  const likeBtn = el('button', { class: 'rf-post-action-btn' })
  likeBtn.appendChild(mkSvg(ICONS.heart))
  const likeCount = el('span', {}, ' ' + (post.likes || 0))
  likeBtn.appendChild(likeCount)
  likeBtn.onclick = e => { e.stopPropagation(); post.likes = (post.likes || 0) + 1; likeCount.textContent = ' ' + post.likes; save(listKey) }
  actions.appendChild(likeBtn)
  // bookmark
  const bkBtn = el('button', { class: 'rf-post-action-btn' })
  bkBtn.appendChild(mkSvg(ICONS.star))
  bkBtn.onclick = async e => {
    e.stopPropagation()
    if (state.savedPosts.find(p => p.id === post.id)) { state.savedPosts = state.savedPosts.filter(p => p.id !== post.id); roche.ui.toast('已取消收藏') }
    else { state.savedPosts = [post, ...state.savedPosts]; roche.ui.toast('✦ 已收藏') }
    await save('savedPosts')
  }
  actions.appendChild(bkBtn)
  body.appendChild(actions)
  card.appendChild(body)
  card.onclick = () => onOpenDetail && onOpenDetail(post)
  return card
}

// ═══════════════════════════════════════════════════════════
// Post Detail
// ═══════════════════════════════════════════════════════════
function pagePostDetail(container, post, listKey, onBack) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf', style: 'position:relative' })
  // topbar: back | title | summon
  const summonBtn = el('button', { class: 'rf-icon-btn' })
  summonBtn.appendChild(mkSvg(ICONS.summon))
  summonBtn.title = '召唤角色评论'
  const rightGroup = el('div', { class: 'rf-topbar-right' }); rightGroup.appendChild(summonBtn)
  wrap.appendChild(buildBackTopBar('帖子详情', onBack, rightGroup))

  const content = el('div', { class: 'rf-content' })
  const dh = el('div', { class: 'rf-detail-header' })
  dh.appendChild(avatarEl('', 44))
  const dm = el('div', { style: 'flex:1;min-width:0' })
  dm.appendChild(el('div', { class: 'rf-post-name' }, post.authorName))
  if (post.worldTag) {
    const sub = el('div', { style: 'margin-top:2px' })
    sub.appendChild(el('span', { class: 'rf-post-tag' }, post.worldTag))
    dm.appendChild(sub)
  }
  dh.appendChild(dm)
  content.appendChild(dh)
  content.appendChild(el('div', { class: 'rf-detail-text' }, post.text))
  content.appendChild(el('div', { class: 'rf-post-time', style: 'padding:6px 14px;border-bottom:1px solid #e5e5e5;font-size:11px' }, fmtTime(post.timestamp)))

  const stats = el('div', { class: 'rf-detail-stats' })
  const rtSpan = el('span'); rtSpan.innerHTML = `<b>${post.retweets || 0}</b> 转发`
  const likeSpan = el('span'); likeSpan.innerHTML = `<b>${post.likes || 0}</b> 点赞`
  const cmtSpan = el('span'); cmtSpan.innerHTML = `<b>${post.comments?.length || 0}</b> 评论`
  stats.appendChild(rtSpan); stats.appendChild(likeSpan); stats.appendChild(cmtSpan)
  content.appendChild(stats)

  const cmtSection = el('div', {})
  function renderComments() {
    cmtSection.innerHTML = ''
    if (!post.comments?.length) {
      cmtSection.appendChild(el('div', { style: 'text-align:center;color:#aaa;padding:24px;font-size:13px' }, '暂无评论，发第一条吧'))
    } else {
      for (const c of post.comments) {
        const row = el('div', { class: 'rf-comment-row' })
        row.appendChild(el('div', { class: 'rf-comment-avatar' }))
        const cbody = el('div', { style: 'flex:1;min-width:0' })
        cbody.appendChild(el('div', { class: 'rf-comment-meta' }, c.name + (c.worldTag ? ` ·【${c.worldTag}】` : '')))
        cbody.appendChild(el('div', { class: 'rf-comment-text' }, c.text))
        if (c.replies?.length) {
          const ra = el('div', { class: 'rf-reply-area' })
          for (const r of c.replies) {
            const ri = el('div', { class: 'rf-reply-item' })
            ri.innerHTML = `<b>${r.name}：</b>${r.text}`
            ra.appendChild(ri)
          }
          cbody.appendChild(ra)
        }
        const replyBtn = el('button', { class: 'rf-comment-reply-btn' }, '↩ 回复')
        replyBtn.onclick = () => {
          const existing = cbody.querySelector('.rf-inline-reply')
          if (existing) { existing.remove(); return }
          const box = el('div', { class: 'rf-inline-reply', style: 'display:flex;gap:6px;margin-top:6px;align-items:center' })
          const inp = el('input', { class: 'rf-form-input', type: 'text', placeholder: `回复 ${c.name}…`, style: 'flex:1;font-size:12px;padding:5px 10px;border-radius:14px' })
          const sendR = el('button', { class: 'rf-btn rf-btn-primary rf-btn-sm' }, '发')
          sendR.onclick = async () => {
            const text = inp.value.trim(); if (!text) return
            c.replies = c.replies || []
            c.replies.push({ name: state.userProfile.handle || '我', text })
            await save(listKey); box.remove(); renderComments()
          }
          box.appendChild(inp); box.appendChild(sendR); cbody.appendChild(box)
          setTimeout(() => inp.focus(), 30)
        }
        cbody.appendChild(replyBtn)
        row.appendChild(cbody)
        cmtSection.appendChild(row)
      }
    }
    cmtSpan.innerHTML = `<b>${post.comments?.length || 0}</b> 评论`
  }
  renderComments()
  content.appendChild(cmtSection)
  wrap.appendChild(content)

  summonBtn.onclick = async () => {
    const ov = showLoadingOverlay(wrap, '召唤角色中…')
    try {
      const newComments = await summonComments(post)
      post.comments = [...(post.comments || []), ...newComments]
      await save(listKey); renderComments()
      roche.ui.toast(`✦ 召唤了 ${newComments.length} 条评论`)
    } catch (e) { roche.ui.toast('召唤失败：' + e.message) }
    finally { hideLoadingOverlay(ov) }
  }

  const inputBar = el('div', { class: 'rf-detail-comment-input' })
  const ta = el('textarea', { placeholder: '发表评论…', rows: '1' })
  ta.addEventListener('input', () => { ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 100) + 'px' })
  const sendBtn = el('button', { class: 'rf-btn rf-btn-primary rf-btn-sm' }, '发送')
  sendBtn.onclick = async () => {
    const text = ta.value.trim(); if (!text) return
    post.comments = post.comments || []
    post.comments.push({ name: state.userProfile.handle || '我', worldTag: '', text, replies: [] })
    ta.value = ''; ta.style.height = 'auto'
    await save(listKey); renderComments(); roche.ui.toast('✦ 评论已发送')
  }
  inputBar.appendChild(ta); inputBar.appendChild(sendBtn)
  wrap.appendChild(inputBar)
  container.appendChild(wrap)
}

// ═══════════════════════════════════════════════════════════
// Top bar builders
// ═══════════════════════════════════════════════════════════
function buildTopBar(title, leftEl, rightEl) {
  const p = state.beauty?.topbarPadding ?? 10
  const bar = el('div', { class: 'rf-topbar', style: `padding:${p}px 14px` })
  const left = el('div', { class: 'rf-topbar-left' })
  if (leftEl) left.appendChild(leftEl)
  bar.appendChild(left)
  bar.appendChild(el('span', { class: 'rf-topbar-title' }, title))
  const right = el('div', { class: 'rf-topbar-right' })
  if (rightEl) right.appendChild(rightEl)
  bar.appendChild(right)
  return bar
}
function buildBackTopBar(title, onBack, rightEl) {
  const backBtn = el('button', { class: 'rf-icon-btn', onclick: onBack })
  backBtn.appendChild(mkSvg(ICONS.back))
  return buildTopBar(title, backBtn, rightEl)
}

// ═══════════════════════════════════════════════════════════
// Bottom nav
// ═══════════════════════════════════════════════════════════
function bottomNav(container) {
  const nav = el('div', { class: 'rf-bottomnav' })
  const tabs = [
    { label: '主页', icon: 'home', page: 'home' },
    { label: '板块', icon: 'section', page: 'section' },
    { label: '私信', icon: 'message', page: 'message' },
    { label: '我的', icon: 'profile', page: 'profile' },
  ]
  for (const tab of tabs) {
    const btn = el('button', { class: 'rf-nav-item' + (state.page === tab.page ? ' active' : '') })
    btn.appendChild(mkSvg(ICONS[tab.icon]))
    btn.appendChild(document.createTextNode(tab.label))
    btn.onclick = () => { if (state.page !== tab.page) { state.page = tab.page; renderMain(container) } }
    nav.appendChild(btn)
  }
  return nav
}

// ═══════════════════════════════════════════════════════════
// Page: Home （顶栏：✕exit | title | 🔄refresh）
// ═══════════════════════════════════════════════════════════
function pageHome(container) {
  const wrap = el('div', { class: 'rf', style: 'position:relative' })

  const closeBtn = el('button', { class: 'rf-icon-btn' })
  closeBtn.appendChild(mkSvg(ICONS.close))
  closeBtn.onclick = () => roche.ui.closeApp()

  const refreshBtn = el('button', { class: 'rf-icon-btn' })
  refreshBtn.appendChild(mkSvg(ICONS.refresh))

  wrap.appendChild(buildTopBar('✦ Forum', closeBtn, refreshBtn))

  const content = el('div', { class: 'rf-content' })
  wrap.appendChild(content)
  wrap.appendChild(bottomNav(container))

  const fab = el('button', { class: 'rf-fab', style: 'bottom:70px' }, '+')
  wrap.appendChild(fab)

  function openDetail(post) {
    pagePostDetail(container, post, 'homePosts', () => { state.page = 'home'; renderMain(container) })
  }
  function drawPosts() {
    content.innerHTML = ''
    if (!state.homePosts.length) {
      content.appendChild(el('div', { class: 'rf-empty' }, '暂无帖子\n点击右上角刷新生成 ↑')); return
    }
    for (const p of state.homePosts) content.appendChild(postCard(p, 'homePosts', openDetail))
  }
  drawPosts()

  refreshBtn.onclick = async () => {
    if (state.loading) return
    state.loading = true; refreshBtn.disabled = true
    const ov = showLoadingOverlay(wrap)
    try {
      const posts = await generatePosts('home')
      state.homePosts = [...posts, ...state.homePosts].slice(0, 60)
      await save('homePosts')
    } catch (e) { roche.ui.toast('生成失败：' + e.message) }
    hideLoadingOverlay(ov)
    state.loading = false; refreshBtn.disabled = false
    drawPosts()
  }

  fab.onclick = () => {
    const overlay = el('div', { class: 'rf-modal-overlay' })
    const modal = el('div', { class: 'rf-modal' })
    modal.appendChild(el('div', { class: 'rf-modal-title' }, '✦ 发帖'))
    const ta = el('textarea', { class: 'rf-textarea', placeholder: '分享你的想法…' })
    modal.appendChild(ta)
    const btnRow = el('div', { style: 'display:flex;gap:8px;margin-top:10px;justify-content:flex-end' })
    btnRow.appendChild(el('button', { class: 'rf-btn rf-btn-ghost', onclick: () => overlay.remove() }, '取消'))
    const postBtn = el('button', { class: 'rf-btn rf-btn-primary' }, '发布')
    postBtn.onclick = async () => {
      const text = ta.value.trim(); if (!text) return
      const post = { id: crypto.randomUUID(), timestamp: Date.now(), authorName: state.userProfile.handle || '我', worldTag: '', text, likes: 0, retweets: 0, comments: [], isUserPost: true }
      state.homePosts = [post, ...state.homePosts]
      state.myPosts = [post, ...state.myPosts]
      await save('homePosts'); await save('myPosts')
      overlay.remove(); drawPosts(); roche.ui.toast('✦ 发布成功！')
    }
    btnRow.appendChild(postBtn)
    modal.appendChild(btnRow); overlay.appendChild(modal)
    overlay.onclick = e => { if (e.target === overlay) overlay.remove() }
    wrap.appendChild(overlay)
    setTimeout(() => ta.focus(), 50)
  }
  return wrap
}

// ═══════════════════════════════════════════════════════════
// Page: Section （顶栏：✕exit | title | 🔄refresh）
// ═══════════════════════════════════════════════════════════
function pageSection(container) {
  const wrap = el('div', { class: 'rf', style: 'position:relative' })

  const closeBtn = el('button', { class: 'rf-icon-btn', onclick: () => roche.ui.closeApp() })
  closeBtn.appendChild(mkSvg(ICONS.close))
  const refreshBtn = el('button', { class: 'rf-icon-btn' })
  refreshBtn.appendChild(mkSvg(ICONS.refresh))

  wrap.appendChild(buildTopBar('✦ Sections', closeBtn, refreshBtn))

  const tabsEl = el('div', { class: 'rf-section-tabs' })
  const tabNames = ['跨界', '平行']
  const tabEls = tabNames.map((name, i) => el('button', { class: 'rf-section-tab' + (state.sectionTab === i ? ' active' : ''), onclick: () => switchTab(i) }, name))
  tabEls.forEach(t => tabsEl.appendChild(t))
  wrap.appendChild(tabsEl)

  const content = el('div', { class: 'rf-content' })
  wrap.appendChild(content)
  wrap.appendChild(bottomNav(container))

  const keyMap = ['crossPosts', 'parallelPosts']
  function openDetail(post, key) {
    pagePostDetail(container, post, key, () => { state.page = 'section'; renderMain(container) })
  }
  function drawPosts() {
    content.innerHTML = ''
    const key = keyMap[state.sectionTab]
    const posts = state[key]
    if (!posts.length) { content.appendChild(el('div', { class: 'rf-empty' }, `暂无「${tabNames[state.sectionTab]}」帖子\n点击刷新生成 ↑`)); return }
    for (const p of posts) content.appendChild(postCard(p, key, post => openDetail(post, key)))
  }
  function switchTab(i) {
    state.sectionTab = i
    tabEls.forEach((t, idx) => t.className = 'rf-section-tab' + (idx === i ? ' active' : ''))
    drawPosts()
  }
  drawPosts()

  refreshBtn.onclick = async () => {
    if (state.loading) return
    state.loading = true; refreshBtn.disabled = true
    const ov = showLoadingOverlay(wrap)
    try {
      const mode = state.sectionTab === 0 ? 'cross' : 'parallel'
      const key = keyMap[state.sectionTab]
      const posts = await generatePosts(mode)
      state[key] = [...posts, ...state[key]].slice(0, 60)
      await save(key)
    } catch (e) { roche.ui.toast('生成失败：' + e.message) }
    hideLoadingOverlay(ov)
    state.loading = false; refreshBtn.disabled = false
    drawPosts()
  }
  return wrap
}

// ═══════════════════════════════════════════════════════════
// Page: Message — 抖音风格私信
// ═══════════════════════════════════════════════════════════
function pageMessage(container) {
  const wrap = el('div', { class: 'rf', style: 'position:relative' })

  const closeBtn = el('button', { class: 'rf-icon-btn', onclick: () => roche.ui.closeApp() })
  closeBtn.appendChild(mkSvg(ICONS.close))

  // 右上角：添加新对话
  const addBtn = el('button', { class: 'rf-icon-btn' })
  addBtn.appendChild(mkSvg(ICONS.plus))

  wrap.appendChild(buildTopBar('✦ Messages', closeBtn, addBtn))

  const content = el('div', { class: 'rf-content' })
  wrap.appendChild(content)
  wrap.appendChild(bottomNav(container))

  function openChat(conv) {
    pageDmChat(container, conv, () => { state.page = 'message'; renderMain(container) })
  }

  function drawDmList() {
    content.innerHTML = ''
    if (!state.dmConversations.length) {
      const empty = el('div', { class: 'rf-empty' }, '还没有私信\n点击右上角 + 开始新对话')
      content.appendChild(empty); return
    }
    for (const conv of state.dmConversations) {
      const item = el('div', { class: 'rf-dm-item', onclick: () => openChat(conv) })
      const av = el('div', { class: 'rf-dm-av' })
      if (conv.avatar) { const img = el('img', { src: conv.avatar }); img.onerror = () => img.remove(); av.appendChild(img) }
      item.appendChild(av)
      const info = el('div', { class: 'rf-dm-info' })
      info.appendChild(el('div', { class: 'rf-dm-name' }, conv.charName + (conv.worldTag ? ` ·【${conv.worldTag}】` : '')))
      const lastMsg = conv.messages[conv.messages.length - 1]
      info.appendChild(el('div', { class: 'rf-dm-preview' }, lastMsg ? lastMsg.text : '开始聊天吧…'))
      item.appendChild(info)
      if (lastMsg) item.appendChild(el('div', { class: 'rf-dm-time' }, fmtTime(lastMsg.ts || Date.now())))
      if (conv.unread) item.appendChild(el('div', { class: 'rf-dm-unread' }))
      content.appendChild(item)
    }
  }
  drawDmList()

  // 添加新对话：让AI生成一个角色然后打招呼
  addBtn.onclick = () => {
    const overlay = el('div', { class: 'rf-modal-overlay' })
    const modal = el('div', { class: 'rf-modal' })
    modal.appendChild(el('div', { class: 'rf-modal-title' }, '✦ 新私信'))
    const charGroup = el('div', { style: 'margin-bottom:10px' })
    charGroup.appendChild(el('div', { class: 'rf-form-label' }, '角色名称'))
    const charInput = el('input', { class: 'rf-form-input', type: 'text', placeholder: '例如：银狼' })
    charGroup.appendChild(charInput)
    modal.appendChild(charGroup)
    const worldGroup = el('div', { style: 'margin-bottom:10px' })
    worldGroup.appendChild(el('div', { class: 'rf-form-label' }, '所属作品'))
    const worldInput = el('input', { class: 'rf-form-input', type: 'text', placeholder: '例如：崩铁' })
    worldGroup.appendChild(worldInput)
    modal.appendChild(worldGroup)
    const btnRow = el('div', { style: 'display:flex;gap:8px;justify-content:flex-end' })
    btnRow.appendChild(el('button', { class: 'rf-btn rf-btn-ghost', onclick: () => overlay.remove() }, '取消'))
    const startBtn = el('button', { class: 'rf-btn rf-btn-primary' }, '开始聊天')
    startBtn.onclick = async () => {
      const charName = charInput.value.trim()
      if (!charName) return
      overlay.remove()
      const ov = showLoadingOverlay(wrap, '角色准备中…')
      try {
        // AI生成开场白
        const sys = `你现在扮演${charName}（${worldInput.value.trim() || '未知作品'}），以角色身份主动给用户发第一条私信。用符合角色人设的语气，简短自然，不要超过60字。`
        const result = await roche.ai.chat({ messages: [{ role: 'system', content: sys }, { role: 'user', content: '发出第一条私信' }], temperature: 0.9 })
        const greeting = result.text.trim()
        const conv = {
          id: crypto.randomUUID(),
          charName,
          worldTag: worldInput.value.trim() || '',
          avatar: '',
          messages: [{ role: 'char', text: greeting, ts: Date.now() }],
          unread: true
        }
        state.dmConversations = [conv, ...state.dmConversations]
        await save('dmConversations')
        drawDmList()
        openChat(conv)
      } catch (e) { roche.ui.toast('创建失败：' + e.message) }
      finally { hideLoadingOverlay(ov) }
    }
    btnRow.appendChild(startBtn)
    modal.appendChild(btnRow); overlay.appendChild(modal)
    overlay.onclick = e => { if (e.target === overlay) overlay.remove() }
    wrap.appendChild(overlay)
    setTimeout(() => charInput.focus(), 50)
  }

  return wrap
}

// DM Chat Page
function pageDmChat(container, conv, onBack) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf', style: 'position:relative' })

  // mark read
  conv.unread = false
  save('dmConversations')

  wrap.appendChild(buildBackTopBar(conv.charName + (conv.worldTag ? ` ·【${conv.worldTag}】` : ''), onBack))

  const chatWrap = el('div', { class: 'rf-chat-wrap' })
  const messages = el('div', { class: 'rf-chat-messages' })

  function renderMessages() {
    messages.innerHTML = ''
    for (const m of conv.messages) {
      const isMe = m.role === 'user'
      const row = el('div', { class: 'rf-chat-msg ' + (isMe ? 'me' : 'them') })
      if (!isMe) {
        const av = el('div', { class: 'rf-chat-av' })
        if (conv.avatar) { const img = el('img', { src: conv.avatar }); img.onerror = () => img.remove(); av.appendChild(img) }
        row.appendChild(av)
      }
      row.appendChild(el('div', { class: 'rf-chat-bubble' }, m.text))
      messages.appendChild(row)
    }
    setTimeout(() => messages.scrollTop = messages.scrollHeight, 50)
  }
  renderMessages()
  chatWrap.appendChild(messages)

  const inputBar = el('div', { class: 'rf-chat-input' })
  const ta = el('textarea', { placeholder: '发消息…', rows: '1' })
  ta.addEventListener('input', () => { ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 100) + 'px' })
  const sendBtn = el('button', { class: 'rf-icon-btn', style: 'color:#000;padding:8px' })
  sendBtn.appendChild(mkSvg(ICONS.send))
  sendBtn.onclick = async () => {
    const text = ta.value.trim(); if (!text) return
    conv.messages.push({ role: 'user', text, ts: Date.now() })
    ta.value = ''; ta.style.height = 'auto'
    renderMessages()
    await save('dmConversations')
    // typing indicator
    const typingRow = el('div', { class: 'rf-chat-msg them' })
    const typingAv = el('div', { class: 'rf-chat-av' })
    typingRow.appendChild(typingAv)
    typingRow.appendChild(el('div', { class: 'rf-chat-typing' }, `${conv.charName} 正在输入…`))
    messages.appendChild(typingRow)
    messages.scrollTop = messages.scrollHeight
    try {
      const reply = await dmAiReply(conv)
      typingRow.remove()
      conv.messages.push({ role: 'char', text: reply, ts: Date.now() })
      renderMessages()
      await save('dmConversations')
    } catch (e) { typingRow.remove(); roche.ui.toast('回复失败：' + e.message) }
  }
  inputBar.appendChild(ta); inputBar.appendChild(sendBtn)
  chatWrap.appendChild(inputBar)
  wrap.appendChild(chatWrap)
  container.appendChild(wrap)
}

// ═══════════════════════════════════════════════════════════
// Page: Profile （顶栏：✕exit | title | ⚙️settings）
// ═══════════════════════════════════════════════════════════
function pageProfile(container) {
  const wrap = el('div', { class: 'rf' })

  const closeBtn = el('button', { class: 'rf-icon-btn', onclick: () => roche.ui.closeApp() })
  closeBtn.appendChild(mkSvg(ICONS.close))
  const settingsBtn = el('button', { class: 'rf-icon-btn', onclick: () => pageSettings(container) })
  settingsBtn.appendChild(mkSvg(ICONS.settings))

  wrap.appendChild(buildTopBar('✦ Profile', closeBtn, settingsBtn))

  // Profile content in a scrollable div
  const scroll = el('div', { class: 'rf-profile-scroll' })

  // Cover
  const coverEl = el('div', { class: 'rf-profile-cover' })
  if (state.userProfile.coverUrl) {
    const img = el('img', { src: state.userProfile.coverUrl, alt: '' }); img.onerror = () => img.remove(); coverEl.appendChild(img)
  }
  scroll.appendChild(coverEl)

  const header = el('div', { class: 'rf-profile-header' })
  const av = el('div', { class: 'rf-profile-avatar' })
  if (state.userProfile.avatarUrl) { const img = el('img', { src: state.userProfile.avatarUrl, alt: '' }); img.onerror = () => img.remove(); av.appendChild(img) }
  header.appendChild(av)
  header.appendChild(el('div', { class: 'rf-profile-name' }, state.userProfile.handle || '未设置昵称'))
  header.appendChild(el('div', { class: 'rf-profile-handle' }, '@' + (state.userProfile.handle || 'user')))
  scroll.appendChild(header)

  // Tabs sticky inside scroll
  const tabNames = ['我的动态', '资料', '收藏', '更多']
  const profTabsEl = el('div', { class: 'rf-profile-tabs' })
  const profTabEls = tabNames.map((name, i) => el('button', { class: 'rf-profile-tab' + (state.profileTab === i ? ' active' : ''), onclick: () => switchPTab(i) }, name))
  profTabEls.forEach(t => profTabsEl.appendChild(t))
  scroll.appendChild(profTabsEl)

  const tabContent = el('div', {})
  scroll.appendChild(tabContent)

  wrap.appendChild(scroll)
  wrap.appendChild(bottomNav(container))

  function openDetail(post, key) {
    pagePostDetail(container, post, key, () => { state.page = 'profile'; renderMain(container) })
  }
  function drawContent() {
    tabContent.innerHTML = ''
    if (state.profileTab === 0) {
      if (!state.myPosts.length) tabContent.appendChild(el('div', { class: 'rf-empty' }, '还没有发过帖子'))
      else for (const p of state.myPosts) tabContent.appendChild(postCard(p, 'myPosts', post => openDetail(post, 'myPosts')))
    } else if (state.profileTab === 1) {
      const rows = [['论坛昵称', state.userProfile.handle], ['姓名', state.userProfile.name], ['年龄', state.userProfile.age], ['外貌', state.userProfile.appearance]]
      for (const [label, val] of rows) {
        const row = el('div', { class: 'rf-settings-item' })
        row.appendChild(el('span', { class: 'rf-settings-label' }, label))
        row.appendChild(el('span', { class: 'rf-settings-value' }, val || '—'))
        tabContent.appendChild(row)
      }
      const ew = el('div', { style: 'padding:16px' })
      ew.appendChild(el('button', { class: 'rf-btn rf-btn-primary', style: 'width:100%', onclick: () => pageProfileEdit(container) }, '编辑资料'))
      tabContent.appendChild(ew)
    } else if (state.profileTab === 2) {
      if (!state.savedPosts.length) tabContent.appendChild(el('div', { class: 'rf-empty' }, '还没有收藏任何帖子'))
      else for (const p of state.savedPosts) tabContent.appendChild(postCard(p, 'savedPosts', post => openDetail(post, 'savedPosts')))
    } else {
      const wip = el('div', { class: 'rf-wip' })
      wip.appendChild(el('span', { style: 'font-size:30px' }, '🔧'))
      wip.appendChild(el('span', {}, '更多功能开发中…'))
      tabContent.appendChild(wip)
    }
  }
  function switchPTab(i) {
    state.profileTab = i
    profTabEls.forEach((t, idx) => t.className = 'rf-profile-tab' + (idx === i ? ' active' : ''))
    drawContent()
  }
  drawContent()
  return wrap
}

// ═══════════════════════════════════════════════════════════
// Settings
// ═══════════════════════════════════════════════════════════
function pageSettings(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  wrap.appendChild(buildBackTopBar('设置', () => renderMain(container)))
  const content = el('div', { class: 'rf-content' })
  const items = [
    { label: '头像 & 封面', icon: 'settingAvatar', fn: () => pageAvatar(container) },
    { label: '资料设置', icon: 'settingProfile', fn: () => pageProfileEdit(container) },
    { label: '世界观设定', icon: 'settingWorld', fn: () => pageWorldview(container) },
    { label: '绑定世界书', icon: 'settingBook', fn: () => pageWorldbook(container) },
    { label: '帖子设置', icon: 'settingPost', fn: () => pagePostSettings(container) },
    { label: '资料库', icon: 'settingLibrary', fn: () => pageDataLibrary(container) },
    { label: '美化设置', icon: 'settingBeauty', fn: () => pageBeauty(container) },
    { label: '清理数据', icon: 'settingTrash', fn: () => pageCleanup(container) },
  ]
  for (const item of items) {
    const row = el('div', { class: 'rf-settings-item', onclick: item.fn })
    const left = el('div', { style: 'display:flex;align-items:center;gap:10px' })
    const iw = el('div', { style: 'width:20px;height:20px;flex-shrink:0;display:flex;align-items:center;color:#444' })
    iw.appendChild(mkSvg(ICONS[item.icon]))
    left.appendChild(iw); left.appendChild(el('span', { class: 'rf-settings-label' }, item.label))
    row.appendChild(left)
    const arrow = el('div', { style: 'width:16px;height:16px;color:#ccc;flex-shrink:0' }); arrow.appendChild(mkSvg(ICONS.chevronRight))
    row.appendChild(arrow)
    content.appendChild(row)
  }
  wrap.appendChild(content)
  container.appendChild(wrap)
}

function pagePostSettings(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  const saveBtn = el('button', { class: 'rf-btn rf-btn-primary', style: 'font-size:13px;padding:6px 14px' }, '保存')
  wrap.appendChild(buildBackTopBar('帖子设置', () => pageSettings(container), saveBtn))
  const content = el('div', { class: 'rf-content' })
  content.appendChild(el('div', { class: 'rf-divider-label' }, '每次生成数量'))
  const pcGroup = el('div', { class: 'rf-beauty-group' })
  const pcVal = el('span', {}, (state.postSettings?.postCount || 5) + ' 条')
  const pcLabel = el('div', { class: 'rf-beauty-label' }); pcLabel.appendChild(document.createTextNode('每次生成帖子数')); pcLabel.appendChild(pcVal)
  pcGroup.appendChild(pcLabel)
  const pcSlider = el('input', { class: 'rf-beauty-slider', type: 'range', min: '1', max: '10', step: '1' })
  pcSlider.value = state.postSettings?.postCount || 5
  pcSlider.oninput = () => { pcVal.textContent = pcSlider.value + ' 条' }
  pcGroup.appendChild(pcSlider); content.appendChild(pcGroup)
  const ccGroup = el('div', { class: 'rf-beauty-group' })
  const ccVal = el('span', {}, (state.postSettings?.commentPerPost || 3) + ' 条')
  const ccLabel = el('div', { class: 'rf-beauty-label' }); ccLabel.appendChild(document.createTextNode('每条帖子评论数')); ccLabel.appendChild(ccVal)
  ccGroup.appendChild(ccLabel)
  const ccSlider = el('input', { class: 'rf-beauty-slider', type: 'range', min: '1', max: '8', step: '1' })
  ccSlider.value = state.postSettings?.commentPerPost || 3
  ccSlider.oninput = () => { ccVal.textContent = ccSlider.value + ' 条' }
  ccGroup.appendChild(ccSlider); content.appendChild(ccGroup)
  content.appendChild(el('div', { style: 'font-size:11px;color:#aaa;padding:10px 16px;line-height:1.6' }, '提示：数量越多生成越慢，建议帖子5条、评论3条。'))
  wrap.appendChild(content)
  saveBtn.onclick = async () => {
    state.postSettings = { postCount: parseInt(pcSlider.value), commentPerPost: parseInt(ccSlider.value) }
    await save('postSettings'); roche.ui.toast('✦ 帖子设置已保存'); pageSettings(container)
  }
  container.appendChild(wrap)
}

function pageDataLibrary(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  const addBtn = el('button', { class: 'rf-icon-btn' }); addBtn.appendChild(mkSvg(ICONS.plus))
  wrap.appendChild(buildBackTopBar('资料库', () => pageSettings(container), addBtn))
  const content = el('div', { class: 'rf-content' })
  wrap.appendChild(content)
  function renderLib() {
    content.innerHTML = ''
    content.appendChild(el('div', { style: 'font-size:11px;color:#aaa;padding:10px 16px;line-height:1.6;border-bottom:1px solid #f0f0f0' }, '勾选的条款刷新时作为参考提供给AI，可按分类整理角色/设定等信息。'))
    if (!state.dataLibrary.length) { content.appendChild(el('div', { class: 'rf-empty' }, '暂无资料\n点击右上角 + 添加')); return }
    for (let i = 0; i < state.dataLibrary.length; i++) {
      const entry = state.dataLibrary[i]
      const row = el('div', { class: 'rf-library-item' })
      const cb = el('input', { type: 'checkbox' }); cb.checked = entry.enabled !== false
      cb.onchange = async () => { entry.enabled = cb.checked; await save('dataLibrary') }
      row.appendChild(cb)
      const body = el('div', { class: 'rf-library-item-body' })
      if (entry.category) body.appendChild(el('div', { class: 'rf-library-cat' }, entry.category))
      body.appendChild(el('div', { class: 'rf-library-content' }, entry.content))
      row.appendChild(body)
      const delBtn = el('button', { class: 'rf-library-del' }); delBtn.appendChild(mkSvg(ICONS.trash))
      delBtn.onclick = async () => {
        const ok = await roche.ui.confirm({ title: '删除条款', message: '确定删除这条资料吗？' }); if (!ok) return
        state.dataLibrary.splice(i, 1); await save('dataLibrary'); renderLib()
      }
      row.appendChild(delBtn); content.appendChild(row)
    }
  }
  renderLib()
  addBtn.onclick = () => {
    const overlay = el('div', { class: 'rf-modal-overlay' })
    const modal = el('div', { class: 'rf-modal' })
    modal.appendChild(el('div', { class: 'rf-modal-title' }, '添加资料条款'))
    const cg = el('div', { style: 'margin-bottom:10px' })
    cg.appendChild(el('div', { class: 'rf-form-label' }, '分类（选填）'))
    const catInput = el('input', { class: 'rf-form-input', type: 'text', placeholder: '例如：崩铁角色' })
    cg.appendChild(catInput); modal.appendChild(cg)
    const mg = el('div', { style: 'margin-bottom:10px' })
    mg.appendChild(el('div', { class: 'rf-form-label' }, '条款内容'))
    const ta = el('textarea', { class: 'rf-textarea', placeholder: '例如：银狼是崩铁中的黑客少女，喜欢游戏，说话傲娇…', style: 'min-height:100px' })
    mg.appendChild(ta); modal.appendChild(mg)
    const btnRow = el('div', { style: 'display:flex;gap:8px;justify-content:flex-end' })
    btnRow.appendChild(el('button', { class: 'rf-btn rf-btn-ghost', onclick: () => overlay.remove() }, '取消'))
    const confBtn = el('button', { class: 'rf-btn rf-btn-primary' }, '添加')
    confBtn.onclick = async () => {
      const c2 = ta.value.trim(); if (!c2) return
      state.dataLibrary.push({ id: crypto.randomUUID(), category: catInput.value.trim(), content: c2, enabled: true })
      await save('dataLibrary'); overlay.remove(); renderLib(); roche.ui.toast('✦ 已添加')
    }
    btnRow.appendChild(confBtn); modal.appendChild(btnRow); overlay.appendChild(modal)
    overlay.onclick = e => { if (e.target === overlay) overlay.remove() }
    wrap.appendChild(overlay); setTimeout(() => ta.focus(), 50)
  }
  container.appendChild(wrap)
}

function pageAvatar(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  wrap.appendChild(buildBackTopBar('头像 & 封面', () => pageSettings(container)))
  const content = el('div', { class: 'rf-content' })
  // Cover
  content.appendChild(el('div', { class: 'rf-divider-label' }, '主页封面'))
  const coverPreview = el('div', { style: 'width:100%;height:100px;background:#f0f0f0;overflow:hidden' })
  if (state.userProfile.coverUrl) { const img = el('img', { src: state.userProfile.coverUrl, alt: '', style: 'width:100%;height:100%;object-fit:cover' }); img.onerror = () => img.remove(); coverPreview.appendChild(img) }
  content.appendChild(coverPreview)
  const cg1 = el('div', { class: 'rf-form-group' }); cg1.appendChild(el('div', { class: 'rf-form-label' }, '封面图片 URL'))
  const coverInput = el('input', { class: 'rf-form-input', type: 'url', placeholder: 'https://…' }); coverInput.value = state.userProfile.coverUrl || ''; cg1.appendChild(coverInput); content.appendChild(cg1)
  const cg2 = el('div', { class: 'rf-form-group' }); cg2.appendChild(el('div', { class: 'rf-form-label' }, '或从相册选择封面'))
  const coverFile = el('input', { type: 'file', accept: 'image/*', style: 'margin-top:6px' })
  coverFile.onchange = e => { const file = e.target.files[0]; if (!file) return; const r = new FileReader(); r.onload = ev => { coverInput.value = ev.target.result; coverPreview.innerHTML = ''; coverPreview.appendChild(el('img', { src: ev.target.result, alt: '', style: 'width:100%;height:100%;object-fit:cover' })) }; r.readAsDataURL(file) }
  cg2.appendChild(coverFile); content.appendChild(cg2)
  content.appendChild(el('button', { class: 'rf-btn rf-btn-ghost', style: 'margin:8px 16px;width:calc(100% - 32px)', onclick: async () => { state.userProfile.coverUrl = coverInput.value.trim(); await save('userProfile'); roche.ui.toast('✦ 封面已保存') } }, '保存封面'))
  // Avatar
  content.appendChild(el('div', { class: 'rf-divider-label', style: 'margin-top:8px' }, '头像'))
  const avPreview = el('div', { style: 'display:flex;justify-content:center;padding:16px 0 8px' })
  const avCircle = el('div', { class: 'rf-profile-avatar', style: 'margin:0;width:64px;height:64px' })
  if (state.userProfile.avatarUrl) { const img = el('img', { src: state.userProfile.avatarUrl, alt: '' }); img.onerror = () => img.remove(); avCircle.appendChild(img) }
  avPreview.appendChild(avCircle); content.appendChild(avPreview)
  const ag1 = el('div', { class: 'rf-form-group' }); ag1.appendChild(el('div', { class: 'rf-form-label' }, '头像 URL'))
  const urlInput = el('input', { class: 'rf-form-input', type: 'url', placeholder: 'https://…' }); urlInput.value = state.userProfile.avatarUrl || ''; ag1.appendChild(urlInput); content.appendChild(ag1)
  const ag2 = el('div', { class: 'rf-form-group' }); ag2.appendChild(el('div', { class: 'rf-form-label' }, '或从相册选择头像'))
  const fileInput = el('input', { type: 'file', accept: 'image/*', style: 'margin-top:6px' })
  fileInput.onchange = e => { const file = e.target.files[0]; if (!file) return; const r = new FileReader(); r.onload = ev => { urlInput.value = ev.target.result; avCircle.innerHTML = ''; avCircle.appendChild(el('img', { src: ev.target.result, alt: '' })) }; r.readAsDataURL(file) }
  ag2.appendChild(fileInput); content.appendChild(ag2)
  content.appendChild(el('button', { class: 'rf-btn rf-btn-primary', style: 'margin:12px 16px;width:calc(100% - 32px)', onclick: async () => { state.userProfile.avatarUrl = urlInput.value.trim(); await save('userProfile'); roche.ui.toast('✦ 头像已保存') } }, '保存头像'))
  wrap.appendChild(content); container.appendChild(wrap)
}

function pageProfileEdit(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  const saveBtn = el('button', { class: 'rf-btn rf-btn-primary', style: 'font-size:13px;padding:6px 14px' }, '保存')
  wrap.appendChild(buildBackTopBar('编辑资料', () => pageSettings(container), saveBtn))
  const content = el('div', { class: 'rf-content' })
  const fields = [
    { key: 'handle', label: '论坛昵称（被@的名字）', placeholder: '例如：小樱' },
    { key: 'name', label: '姓名', placeholder: '你的真实名字' },
    { key: 'age', label: '年龄', placeholder: '例如：18' },
    { key: 'appearance', label: '外貌描述', placeholder: '例如：长黑发，琥珀色眼睛…' },
  ]
  const inputs = {}
  for (const f of fields) {
    const grp = el('div', { class: 'rf-form-group' })
    grp.appendChild(el('div', { class: 'rf-form-label' }, f.label))
    const inp = el('input', { class: 'rf-form-input', type: 'text', placeholder: f.placeholder })
    inp.value = state.userProfile[f.key] || ''; inputs[f.key] = inp; grp.appendChild(inp); content.appendChild(grp)
  }
  wrap.appendChild(content)
  saveBtn.onclick = async () => {
    for (const f of fields) state.userProfile[f.key] = inputs[f.key].value.trim()
    await save('userProfile'); roche.ui.toast('✦ 资料已保存'); pageSettings(container)
  }
  container.appendChild(wrap)
}

function pageWorldview(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  const saveBtn = el('button', { class: 'rf-btn rf-btn-primary', style: 'font-size:13px;padding:6px 14px' }, '保存')
  wrap.appendChild(buildBackTopBar('世界观设定', () => pageSettings(container), saveBtn))
  const content = el('div', { class: 'rf-content', style: 'padding:12px 16px' })
  const ta = el('textarea', { class: 'rf-worldview-text' }); ta.value = state.worldview; content.appendChild(ta)
  content.appendChild(el('div', { style: 'font-size:11px;color:#999;margin-top:8px;line-height:1.6' }, '提示：修改后下次刷新生效，建议保留禁令规则。'))
  wrap.appendChild(content)
  saveBtn.onclick = async () => { state.worldview = ta.value.trim(); await save('worldview'); roche.ui.toast('✦ 世界观已保存'); pageSettings(container) }
  container.appendChild(wrap)
}

async function pageWorldbook(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  wrap.appendChild(buildBackTopBar('绑定世界书', () => pageSettings(container)))
  const content = el('div', { class: 'rf-content' })
  content.appendChild(el('div', { style: 'text-align:center;color:#888;padding:32px;font-size:13px' }, '加载世界书分类…'))
  wrap.appendChild(content); container.appendChild(wrap)
  try {
    const categories = await roche.worldbook.list()
    content.innerHTML = ''
    if (!categories?.length) { content.appendChild(el('div', { class: 'rf-empty' }, '暂无世界书分类\n请先在 Roche 中创建世界书')); return }
    const selected = new Set(state.boundWorldbooks)
    for (const cat of categories) {
      const item = el('div', { class: 'rf-worldbook-item' })
      const cb = el('input', { type: 'checkbox', id: 'wb-' + cat.id }); cb.checked = selected.has(cat.id)
      cb.onchange = () => { cb.checked ? selected.add(cat.id) : selected.delete(cat.id) }
      item.appendChild(cb); item.appendChild(el('label', { for: 'wb-' + cat.id }, cat.name || cat.title || cat.id)); content.appendChild(item)
    }
    content.appendChild(el('button', { class: 'rf-btn rf-btn-primary', style: 'margin:12px 16px;width:calc(100% - 32px)', onclick: async () => { state.boundWorldbooks = [...selected]; await save('boundWorldbooks'); roche.ui.toast('✦ 绑定已保存'); pageSettings(container) } }, '保存绑定'))
  } catch (e) { content.innerHTML = ''; content.appendChild(el('div', { class: 'rf-empty' }, '加载失败：' + e.message)) }
}

function pageBeauty(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  const saveBtn = el('button', { class: 'rf-btn rf-btn-primary', style: 'font-size:13px;padding:6px 14px' }, '保存')
  wrap.appendChild(buildBackTopBar('美化设置', () => pageSettings(container), saveBtn))
  const content = el('div', { class: 'rf-content' })
  content.appendChild(el('div', { class: 'rf-divider-label' }, '顶部栏'))
  const padGroup = el('div', { class: 'rf-beauty-group' })
  const padVal = el('span', {}, (state.beauty?.topbarPadding ?? 10) + 'px')
  const padLabel = el('div', { class: 'rf-beauty-label' }); padLabel.appendChild(document.createTextNode('顶部栏上下间距')); padLabel.appendChild(padVal)
  padGroup.appendChild(padLabel)
  const padSlider = el('input', { class: 'rf-beauty-slider', type: 'range', min: '4', max: '22', step: '1' })
  padSlider.value = state.beauty?.topbarPadding ?? 10; padSlider.oninput = () => { padVal.textContent = padSlider.value + 'px' }
  padGroup.appendChild(padSlider); content.appendChild(padGroup)
  wrap.appendChild(content)
  saveBtn.onclick = async () => { state.beauty = state.beauty || {}; state.beauty.topbarPadding = parseInt(padSlider.value); await save('beauty'); roche.ui.toast('✦ 美化设置已保存'); pageSettings(container) }
  container.appendChild(wrap)
}

async function pageCleanup(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  wrap.appendChild(buildBackTopBar('清理数据', () => pageSettings(container)))
  const content = el('div', { class: 'rf-content' })
  const items = [
    { label: '清理主页全部帖子', key: 'homePosts' },
    { label: '清理板块跨界帖子', key: 'crossPosts' },
    { label: '清理板块平行帖子', key: 'parallelPosts' },
    { label: '清理我发的帖子', key: 'myPosts' },
    { label: '清理全部收藏帖子', key: 'savedPosts' },
    { label: '清理全部私信记录', key: 'dmConversations' },
  ]
  for (const item of items) {
    const row = el('div', { class: 'rf-settings-item', onclick: async () => {
      const ok = await roche.ui.confirm({ title: '确认清理', message: `确定要${item.label}吗？此操作不可撤销。` }); if (!ok) return
      state[item.key] = []; await save(item.key); roche.ui.toast(`✦ 已${item.label}`)
    }})
    const left = el('div', { style: 'display:flex;align-items:center;gap:10px' })
    const iw = el('div', { style: 'width:20px;height:20px;flex-shrink:0;display:flex;align-items:center;color:#c00' }); iw.appendChild(mkSvg(ICONS.trash))
    left.appendChild(iw); left.appendChild(el('span', { class: 'rf-settings-label', style: 'color:#c00' }, item.label))
    row.appendChild(left)
    const arrow = el('div', { style: 'width:16px;height:16px;color:#ccc;flex-shrink:0' }); arrow.appendChild(mkSvg(ICONS.chevronRight))
    row.appendChild(arrow); content.appendChild(row)
  }
  wrap.appendChild(content); container.appendChild(wrap)
}

// ═══════════════════════════════════════════════════════════
// Main render
// ═══════════════════════════════════════════════════════════
function renderMain(container) {
  container.innerHTML = ''
  let wrap
  if (state.page === 'home') wrap = pageHome(container)
  if (state.page === 'section') wrap = pageSection(container)
  if (state.page === 'message') wrap = pageMessage(container)
  if (state.page === 'profile') wrap = pageProfile(container)
  if (wrap) container.appendChild(wrap)
}

// ═══════════════════════════════════════════════════════════
// Plugin registration
// ═══════════════════════════════════════════════════════════
let _styleEl = null
window.RochePlugin.register({
  id: 'roche-forum',
  name: '✦ 角色论坛',
  version: '5.0.0',
  apps: [{
    id: 'roche-forum-main',
    name: '角色论坛',
    icon: 'forum',
    iconImage: '',
    async mount(container, rocheApi) {
      roche = rocheApi
      _styleEl = document.createElement('style')
      _styleEl.textContent = CSS
      document.head.appendChild(_styleEl)
      await loadStorage()
      renderMain(container)
    },
    async unmount(container) {
      container.replaceChildren()
      if (_styleEl) { _styleEl.remove(); _styleEl = null }
    },
  }],
})
})()
