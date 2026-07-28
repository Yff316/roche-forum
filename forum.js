;(function () {

// ═══════════════════════════════════════════════════════════
//  CSS
// ═══════════════════════════════════════════════════════════
const CSS = `
.rf {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: #fff; color: #000;
  height: 100%; display: flex; flex-direction: column; overflow: hidden;
  font-size: 14px;
}
.rf * { box-sizing: border-box; }

/* ── top bar ── */
.rf-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 14px; border-bottom: 1px solid #e5e5e5; flex-shrink: 0;
}
.rf-topbar-title { font-size: 16px; font-weight: 700; letter-spacing: .5px; }
.rf-icon-btn {
  background: none; border: none; cursor: pointer; padding: 4px;
  display: flex; align-items: center; color: #000;
}
.rf-icon-btn:hover { opacity: .6; }
.rf-icon-btn:disabled { opacity: .3; cursor: default; }

/* ── bottom nav ── */
.rf-bottomnav { display: flex; border-top: 1px solid #e5e5e5; flex-shrink: 0; }
.rf-nav-item {
  flex: 1; display: flex; flex-direction: column; align-items: center;
  padding: 8px 0 6px; cursor: pointer; font-size: 11px; color: #888;
  border: none; background: none; gap: 3px;
}
.rf-nav-item.active { color: #000; font-weight: 700; }
.rf-nav-item svg { width: 22px; height: 22px; }

/* ── content scroll area ── */
.rf-content { flex: 1; overflow-y: auto; position: relative; }

/* ── post card ── */
.rf-post {
  display: flex; gap: 10px;
  padding: 12px 14px; border-bottom: 1px solid #e5e5e5;
}
.rf-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  border: 1px solid #e5e5e5; background: #fff; flex-shrink: 0;
  overflow: hidden; display: flex; align-items: center; justify-content: center;
}
.rf-avatar img { width: 100%; height: 100%; object-fit: cover; }
.rf-post-body { flex: 1; min-width: 0; }
.rf-post-header {
  display: flex; align-items: baseline; gap: 6px;
  margin-bottom: 4px; flex-wrap: wrap;
}
.rf-post-name { font-weight: 700; font-size: 14px; }
.rf-post-handle { color: #666; font-size: 12px; }
.rf-post-tag {
  font-size: 10px; padding: 1px 5px; border: 1px solid #ccc;
  border-radius: 10px; color: #666;
}
.rf-post-time { color: #999; font-size: 11px; margin-left: auto; }
.rf-post-text { line-height: 1.5; white-space: pre-wrap; word-break: break-word; }
.rf-post-actions { display: flex; gap: 18px; margin-top: 10px; }
.rf-post-action-btn {
  background: none; border: none; cursor: pointer;
  color: #888; font-size: 12px; display: flex; align-items: center; gap: 4px; padding: 0;
}
.rf-post-action-btn:hover { color: #000; }

/* ── comments ── */
.rf-comments {
  background: #fafafa; padding: 0 14px 8px 64px;
  border-bottom: 1px solid #e5e5e5;
}
.rf-comment {
  display: flex; gap: 8px; padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}
.rf-comment:last-child { border-bottom: none; }
.rf-comment-avatar {
  width: 28px; height: 28px; border-radius: 50%;
  border: 1px solid #e5e5e5; flex-shrink: 0; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; background: #fff;
}
.rf-comment-avatar img { width: 100%; height: 100%; object-fit: cover; }
.rf-comment-meta { font-weight: 600; font-size: 12px; color: #444; margin-bottom: 2px; }
.rf-comment-text { font-size: 13px; line-height: 1.4; white-space: pre-wrap; word-break: break-word; }

/* ── FAB ── */
.rf-fab {
  position: absolute; right: 18px; bottom: 18px;
  width: 48px; height: 48px; border-radius: 50%;
  border: none; background: #000; color: #fff;
  font-size: 26px; cursor: pointer; z-index: 10;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
}
.rf-fab:hover { background: #333; }

/* ── compose modal ── */
.rf-modal-overlay {
  position: absolute; inset: 0; background: rgba(0,0,0,.35);
  display: flex; align-items: flex-end; z-index: 100;
}
.rf-modal {
  background: #fff; width: 100%;
  border-radius: 16px 16px 0 0; padding: 16px;
  max-height: 80%; overflow-y: auto;
}
.rf-modal-title { font-weight: 700; font-size: 15px; margin-bottom: 12px; }
.rf-textarea {
  width: 100%; border: 1px solid #e5e5e5; border-radius: 8px;
  padding: 10px; font-size: 14px; resize: none; outline: none;
  min-height: 80px; font-family: inherit;
}
.rf-textarea:focus { border-color: #000; }

/* ── buttons ── */
.rf-btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 8px 18px; border-radius: 20px;
  border: none; cursor: pointer; font-size: 14px; font-weight: 600;
  font-family: inherit;
}
.rf-btn-primary { background: #000; color: #fff; }
.rf-btn-primary:hover { background: #222; }
.rf-btn-ghost { background: none; border: 1px solid #ccc; color: #000; }
.rf-btn-ghost:hover { background: #f5f5f5; }

/* ── section tabs ── */
.rf-section-tabs { display: flex; border-bottom: 1px solid #e5e5e5; flex-shrink: 0; }
.rf-section-tab {
  flex: 1; text-align: center; padding: 10px 0;
  cursor: pointer; font-size: 14px; color: #666;
  border: none; background: none; border-bottom: 2px solid transparent;
  font-family: inherit;
}
.rf-section-tab.active { color: #000; font-weight: 700; border-bottom-color: #000; }

/* ── profile ── */
.rf-profile-header { padding: 16px 14px 10px; border-bottom: 1px solid #e5e5e5; }
.rf-profile-avatar {
  width: 64px; height: 64px; border-radius: 50%;
  border: 2px solid #000; background: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; overflow: hidden; margin-bottom: 8px;
}
.rf-profile-avatar img { width: 100%; height: 100%; object-fit: cover; }
.rf-profile-name { font-size: 18px; font-weight: 700; }
.rf-profile-handle { color: #666; font-size: 13px; margin-bottom: 4px; }
.rf-profile-tabs { display: flex; border-bottom: 1px solid #e5e5e5; flex-shrink: 0; }
.rf-profile-tab {
  flex: 1; text-align: center; padding: 10px 0;
  cursor: pointer; font-size: 12px; color: #666;
  border: none; background: none; border-bottom: 2px solid transparent;
  font-family: inherit;
}
.rf-profile-tab.active { color: #000; font-weight: 700; border-bottom-color: #000; }

/* ── settings ── */
.rf-settings-item {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 16px; border-bottom: 1px solid #f0f0f0; cursor: pointer;
}
.rf-settings-item:hover { background: #fafafa; }
.rf-settings-label { font-size: 14px; }
.rf-settings-value { color: #999; font-size: 13px; }

/* ── form ── */
.rf-form-group { padding: 10px 16px; border-bottom: 1px solid #f0f0f0; }
.rf-form-label { font-size: 12px; color: #666; margin-bottom: 5px; }
.rf-form-input {
  width: 100%; border: 1px solid #e5e5e5; border-radius: 6px;
  padding: 8px 10px; font-size: 14px; outline: none; font-family: inherit;
}
.rf-form-input:focus { border-color: #000; }
.rf-worldview-text {
  width: 100%; border: 1px solid #e5e5e5; border-radius: 6px;
  padding: 8px 10px; font-size: 13px; outline: none;
  font-family: inherit; resize: none; min-height: 280px; line-height: 1.6;
}
.rf-worldview-text:focus { border-color: #000; }

/* ── worldbook ── */
.rf-worldbook-item {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 16px; border-bottom: 1px solid #f0f0f0;
}
.rf-worldbook-item input[type=checkbox] { width: 16px; height: 16px; cursor: pointer; }
.rf-worldbook-item label { flex: 1; font-size: 14px; cursor: pointer; }

/* ── states ── */
.rf-empty { text-align: center; color: #999; padding: 56px 24px; font-size: 14px; line-height: 1.8; }
.rf-loading { text-align: center; color: #888; padding: 32px; font-size: 13px; }
.rf-wip {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; height: 100%; color: #aaa; gap: 12px; font-size: 14px;
}
`

// ═══════════════════════════════════════════════════════════
//  SVG icons（简笔线条风）
// ═══════════════════════════════════════════════════════════
const ICONS = {
  home:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`,
  section: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>`,
  message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  profile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
  close:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 018-8c2.2 0 4.2.9 5.7 2.3L21 9"/><path d="M20 12a8 8 0 01-8 8c-2.2 0-4.2-.9-5.7-2.3L3 15"/><polyline points="21 3 21 9 15 9"/><polyline points="3 21 3 15 9 15"/></svg>`,
  menu:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  back:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><polyline points="12 5 5 12 12 19"/></svg>`,
  heart:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/></svg>`,
  comment: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  star:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/></svg>`,
}

function mkSvg(svgStr) {
  const d = document.createElement('div')
  d.innerHTML = svgStr
  return d.firstElementChild
}

// ═══════════════════════════════════════════════════════════
//  Helpers
// ═══════════════════════════════════════════════════════════
function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag)
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') e.className = v
    else if (k === 'style') {
      if (typeof v === 'string') e.setAttribute('style', v)
      else Object.assign(e.style, v)
    }
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
  return `${d.getMonth() + 1}月${d.getDate()}日`
}

function avatarEl(url, size = 40) {
  const wrap = el('div', { class: 'rf-avatar', style: `width:${size}px;height:${size}px` })
  if (url) {
    const img = el('img', { src: url, alt: '' })
    img.onerror = () => img.remove()
    wrap.appendChild(img)
  }
  return wrap
}

// ═══════════════════════════════════════════════════════════
//  State
// ═══════════════════════════════════════════════════════════
let roche = null

const state = {
  page: 'home',       // home | section | message | profile
  sectionTab: 0,      // 0=跨界  1=平行
  profileTab: 0,      // 0=动态  1=资料  2=收藏  3=更多
  loading: false,

  homePosts: [],
  crossPosts: [],
  parallelPosts: [],
  myPosts: [],
  savedPosts: [],

  userProfile: { handle: '', name: '', age: '', appearance: '', avatarUrl: '' },

  worldview: `这是一个论坛，发帖人是角色本人发帖。发帖前，请确认是什么角色，根据角色的官方世界观、官方人设、性格、人物关系、剧情等各个方面来决定发帖内容和评论。
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
}

// ═══════════════════════════════════════════════════════════
//  Storage
// ═══════════════════════════════════════════════════════════
const STORAGE_KEYS = [
  'homePosts', 'crossPosts', 'parallelPosts', 'myPosts', 'savedPosts',
  'userProfile', 'worldview', 'boundWorldbooks',
]

async function loadStorage() {
  for (const k of STORAGE_KEYS) {
    const v = await roche.storage.get(k)
    if (v !== null && v !== undefined) state[k] = v
  }
}

async function save(key) {
  await roche.storage.set(key, state[key])
}

// ═══════════════════════════════════════════════════════════
//  AI post generation
// ═══════════════════════════════════════════════════════════
async function generatePosts(mode) {
  // 1. 读取角色列表
  const chars = await roche.character.list()
  const charList = chars.slice(0, 30).map(c => ({
    id: c.id,
    name: c.name || c.handle || '未知',
    handle: c.handle || c.name || '未知',
    avatar: c.avatar || '',
    persona: c.persona || c.bio || '',
  }))

  // 2. 读取绑定世界书
  let wbContext = ''
  for (const catId of state.boundWorldbooks) {
    try {
      const entries = await roche.worldbook.getEntries({ categoryId: catId })
      if (entries?.length) {
        wbContext += entries.map(e => e.content || e.text || '').filter(Boolean).join('\n') + '\n'
      }
    } catch (_) {}
  }

  const userHandle = state.userProfile.handle || '用户'
  const userDesc = [
    state.userProfile.name,
    state.userProfile.age ? state.userProfile.age + '岁' : '',
    state.userProfile.appearance,
  ].filter(Boolean).join('，')

  const systemPrompt = `你是一个角色论坛AI内容生成器。
  
世界观规则：
${state.worldview}

${wbContext ? `世界书参考：\n${wbContext}` : ''}

可用角色列表：
${charList.map(c => `- ${c.name}（@${c.handle}）：${c.persona}`).join('\n')}

用户信息：论坛昵称 @${userHandle}，${userDesc || '女生'}。

⚠️ 输出格式：只输出 JSON，不要任何其他文字。`

  let userPrompt = ''

  if (mode === 'home') {
    userPrompt = `生成5条主页帖子。要求：
- 每条帖子选一个角色发出，内容是角色日常/剧情/小烦恼
- 每条帖子有2~4条评论，评论者也是角色
- 严格遵守世界观规则

JSON格式：
{"posts":[{"authorName":"角色名","authorHandle":"昵称","avatar":"","text":"帖子内容","likes":0,"worldTag":"作品名","comments":[{"name":"角色名","handle":"昵称","avatar":"","text":"评论","worldTag":"作品名"}]}]}`
  } else if (mode === 'cross') {
    userPrompt = `生成5条跨界板块帖子。要求：
- 发帖人可以来自不同作品
- 评论区必须有其他作品角色的跨界反应，充满趣味
- 严格遵守世界观规则

JSON格式：
{"posts":[{"authorName":"角色名","authorHandle":"昵称","avatar":"","text":"帖子内容","likes":0,"worldTag":"作品名","comments":[{"name":"角色名","handle":"昵称","avatar":"","text":"评论","worldTag":"作品名"}]}]}`
  } else {
    userPrompt = `生成5条平行板块帖子。要求：
- 帖子内容是角色与用户（@${userHandle}）在一起后的日常动态
- 内容温馨乙女向，充满恋爱感
- 评论可以是其他角色的祝福/羡慕/吐槽
- 严格遵守世界观规则

JSON格式：
{"posts":[{"authorName":"角色名","authorHandle":"昵称","avatar":"","text":"帖子内容","likes":0,"worldTag":"作品名","comments":[{"name":"角色名","handle":"昵称","avatar":"","text":"评论","worldTag":"作品名"}]}]}`
  }

  const result = await roche.ai.chat({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.92,
  })

  let parsed
  try {
    const raw = result.text.trim()
    const start = raw.indexOf('{')
    const end = raw.lastIndexOf('}')
    parsed = JSON.parse(raw.slice(start, end + 1))
  } catch (e) {
    throw new Error('AI 返回格式错误，请重试')
  }

  const charMap = {}
  charList.forEach(c => { charMap[c.name] = c })

  return (parsed.posts || []).map(p => ({
    id: crypto.randomUUID(),
    timestamp: Date.now() - Math.floor(Math.random() * 7200000),
    authorName: p.authorName || '未知角色',
    authorHandle: p.authorHandle || p.authorName || '未知',
    avatar: charMap[p.authorName]?.avatar || p.avatar || '',
    text: p.text || '',
    likes: p.likes || Math.floor(Math.random() * 80),
    worldTag: p.worldTag || '',
    comments: (p.comments || []).map(c => ({
      name: c.name,
      handle: c.handle || c.name,
      avatar: charMap[c.name]?.avatar || c.avatar || '',
      text: c.text || '',
      worldTag: c.worldTag || '',
    })),
  }))
}

// ═══════════════════════════════════════════════════════════
//  Post card
// ═══════════════════════════════════════════════════════════
function postCard(post, content, listKey) {
  const card = el('div', { class: 'rf-post' })
  card.appendChild(avatarEl(post.avatar, 40))

  const body = el('div', { class: 'rf-post-body' })

  // header
  const header = el('div', { class: 'rf-post-header' })
  header.appendChild(el('span', { class: 'rf-post-name' }, post.authorName))
  header.appendChild(el('span', { class: 'rf-post-handle' }, '@' + post.authorHandle))
  if (post.worldTag) header.appendChild(el('span', { class: 'rf-post-tag' }, post.worldTag))
  header.appendChild(el('span', { class: 'rf-post-time' }, fmtTime(post.timestamp)))
  body.appendChild(header)
  body.appendChild(el('div', { class: 'rf-post-text' }, post.text))

  // actions
  const actions = el('div', { class: 'rf-post-actions' })

  // comment toggle
  const commentCount = post.comments?.length || 0
  const commentBtn = el('button', { class: 'rf-post-action-btn' })
  commentBtn.appendChild(mkSvg(ICONS.comment))
  commentBtn.appendChild(document.createTextNode(' ' + commentCount))
  commentBtn.onclick = () => {
    const existing = content.querySelector(`[data-cmt="${post.id}"]`)
    if (existing) { existing.remove(); return }
    const cmtEl = buildComments(post)
    card.after(cmtEl)
  }
  actions.appendChild(commentBtn)

  // like
  const likeBtn = el('button', { class: 'rf-post-action-btn' })
  likeBtn.appendChild(mkSvg(ICONS.heart))
  const likeCount = el('span', {}, ' ' + (post.likes || 0))
  likeBtn.appendChild(likeCount)
  likeBtn.onclick = () => {
    post.likes = (post.likes || 0) + 1
    likeCount.textContent = ' ' + post.likes
    save(listKey)
  }
  actions.appendChild(likeBtn)

  // bookmark
  const bookmarkBtn = el('button', { class: 'rf-post-action-btn' })
  bookmarkBtn.appendChild(mkSvg(ICONS.star))
  bookmarkBtn.title = '收藏'
  bookmarkBtn.onclick = async () => {
    if (state.savedPosts.find(p => p.id === post.id)) {
      state.savedPosts = state.savedPosts.filter(p => p.id !== post.id)
      roche.ui.toast('已取消收藏')
    } else {
      state.savedPosts = [post, ...state.savedPosts]
      roche.ui.toast('✦ 已收藏')
    }
    await save('savedPosts')
  }
  actions.appendChild(bookmarkBtn)

  body.appendChild(actions)
  card.appendChild(body)
  return card
}

function buildComments(post) {
  const wrap = el('div', { class: 'rf-comments' })
  wrap.setAttribute('data-cmt', post.id)
  if (!post.comments?.length) {
    wrap.appendChild(el('div', { style: 'color:#aaa;font-size:12px;padding:8px 0' }, '暂无评论'))
    return wrap
  }
  for (const c of post.comments) {
    const row = el('div', { class: 'rf-comment' })
    const cav = el('div', { class: 'rf-comment-avatar' })
    if (c.avatar) { const img = el('img', { src: c.avatar }); img.onerror = () => img.remove(); cav.appendChild(img) }
    row.appendChild(cav)
    const cbody = el('div', { style: 'flex:1;min-width:0' })
    cbody.appendChild(el('div', { class: 'rf-comment-meta' }, (c.handle || c.name) + (c.worldTag ? ` ·【${c.worldTag}】` : '')))
    cbody.appendChild(el('div', { class: 'rf-comment-text' }, c.text))
    row.appendChild(cbody)
    wrap.appendChild(row)
  }
  return wrap
}

// ═══════════════════════════════════════════════════════════
//  Top bar builder
// ═══════════════════════════════════════════════════════════
function topBar(title, rightEl) {
  const bar = el('div', { class: 'rf-topbar' })
  const closeBtn = el('button', { class: 'rf-icon-btn', onclick: () => roche.ui.closeApp() })
  closeBtn.appendChild(mkSvg(ICONS.close))
  bar.appendChild(closeBtn)
  bar.appendChild(el('span', { class: 'rf-topbar-title' }, title))
  bar.appendChild(rightEl || el('div', { style: 'width:28px' }))
  return bar
}

function backTopBar(title, onBack, rightEl) {
  const bar = el('div', { class: 'rf-topbar' })
  const backBtn = el('button', { class: 'rf-icon-btn', onclick: onBack })
  backBtn.appendChild(mkSvg(ICONS.back))
  bar.appendChild(backBtn)
  bar.appendChild(el('span', { class: 'rf-topbar-title' }, title))
  bar.appendChild(rightEl || el('div', { style: 'width:28px' }))
  return bar
}

// ═══════════════════════════════════════════════════════════
//  Bottom nav
// ═══════════════════════════════════════════════════════════
function bottomNav(container) {
  const nav = el('div', { class: 'rf-bottomnav' })
  const tabs = [
    { label: '主页',  icon: 'home',    page: 'home' },
    { label: '板块',  icon: 'section', page: 'section' },
    { label: '私信',  icon: 'message', page: 'message' },
    { label: '我的',  icon: 'profile', page: 'profile' },
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
//  Pages
// ═══════════════════════════════════════════════════════════

// ── Home ──────────────────────────────────────────────────
function pageHome(container) {
  const wrap = el('div', { class: 'rf' })
  const refreshBtn = el('button', { class: 'rf-icon-btn' })
  refreshBtn.appendChild(mkSvg(ICONS.refresh))
  wrap.appendChild(topBar('✦ 论坛', refreshBtn))

  const content = el('div', { class: 'rf-content' })
  wrap.appendChild(content)
  wrap.appendChild(bottomNav(container))

  const fab = el('button', { class: 'rf-fab' }, '+')
  content.appendChild(fab)

  function drawPosts() {
    content.innerHTML = ''
    content.appendChild(fab)
    if (!state.homePosts.length) {
      content.appendChild(el('div', { class: 'rf-empty' }, '暂无帖子\n点击右上角刷新按钮生成帖子 ↑'))
      return
    }
    for (const p of state.homePosts) content.appendChild(postCard(p, content, 'homePosts'))
  }
  drawPosts()

  refreshBtn.onclick = async () => {
    if (state.loading) return
    state.loading = true; refreshBtn.disabled = true
    content.innerHTML = ''
    content.appendChild(el('div', { class: 'rf-loading' }, '⏳ AI 生成帖子中…'))
    try {
      const posts = await generatePosts('home')
      state.homePosts = [...posts, ...state.homePosts].slice(0, 60)
      await save('homePosts')
    } catch (e) { roche.ui.toast('生成失败：' + e.message) }
    state.loading = false; refreshBtn.disabled = false
    drawPosts()
  }

  // compose
  fab.onclick = () => {
    const overlay = el('div', { class: 'rf-modal-overlay' })
    const modal = el('div', { class: 'rf-modal' })
    modal.appendChild(el('div', { class: 'rf-modal-title' }, '✦ 发帖'))
    const ta = el('textarea', { class: 'rf-textarea', placeholder: '分享你的想法…' })
    modal.appendChild(ta)
    const btnRow = el('div', { style: 'display:flex;gap:8px;margin-top:10px;justify-content:flex-end' })
    btnRow.appendChild(el('button', { class: 'rf-btn rf-btn-ghost', onclick: () => overlay.remove() }, '取消'))
    btnRow.appendChild(el('button', {
      class: 'rf-btn rf-btn-primary',
      onclick: async () => {
        const text = ta.value.trim()
        if (!text) return
        const post = {
          id: crypto.randomUUID(),
          timestamp: Date.now(),
          authorName: state.userProfile.handle || '我',
          authorHandle: state.userProfile.handle || '我',
          avatar: state.userProfile.avatarUrl || '',
          text,
          likes: 0,
          worldTag: '',
          comments: [],
          isUserPost: true,
        }
        state.homePosts = [post, ...state.homePosts]
        state.myPosts = [post, ...state.myPosts]
        await save('homePosts')
        await save('myPosts')
        overlay.remove()
        drawPosts()
        roche.ui.toast('✦ 发布成功！')
      }
    }, '发布'))
    modal.appendChild(btnRow)
    overlay.appendChild(modal)
    overlay.onclick = e => { if (e.target === overlay) overlay.remove() }
    content.appendChild(overlay)
    setTimeout(() => ta.focus(), 50)
  }

  return wrap
}

// ── Section ───────────────────────────────────────────────
function pageSection(container) {
  const wrap = el('div', { class: 'rf' })
  const refreshBtn = el('button', { class: 'rf-icon-btn' })
  refreshBtn.appendChild(mkSvg(ICONS.refresh))
  wrap.appendChild(topBar('✦ 板块', refreshBtn))

  const tabsEl = el('div', { class: 'rf-section-tabs' })
  const tabNames = ['跨界', '平行']
  const tabEls = tabNames.map((name, i) => {
    const t = el('button', { class: 'rf-section-tab' + (state.sectionTab === i ? ' active' : ''), onclick: () => switchTab(i) }, name)
    return t
  })
  tabEls.forEach(t => tabsEl.appendChild(t))
  wrap.appendChild(tabsEl)

  const content = el('div', { class: 'rf-content' })
  wrap.appendChild(content)
  wrap.appendChild(bottomNav(container))

  const keyMap = ['crossPosts', 'parallelPosts']

  function drawPosts() {
    content.innerHTML = ''
    const posts = state[keyMap[state.sectionTab]]
    if (!posts.length) {
      content.appendChild(el('div', { class: 'rf-empty' }, `暂无「${tabNames[state.sectionTab]}」帖子\n点击刷新生成 ↑`))
      return
    }
    for (const p of posts) content.appendChild(postCard(p, content, keyMap[state.sectionTab]))
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
    content.innerHTML = ''
    content.appendChild(el('div', { class: 'rf-loading' }, '⏳ AI 生成帖子中…'))
    try {
      const mode = state.sectionTab === 0 ? 'cross' : 'parallel'
      const key = keyMap[state.sectionTab]
      const posts = await generatePosts(mode)
      state[key] = [...posts, ...state[key]].slice(0, 60)
      await save(key)
    } catch (e) { roche.ui.toast('生成失败：' + e.message) }
    state.loading = false; refreshBtn.disabled = false
    drawPosts()
  }

  return wrap
}

// ── Message ───────────────────────────────────────────────
function pageMessage(container) {
  const wrap = el('div', { class: 'rf' })
  wrap.appendChild(topBar('✦ 私信', null))
  const content = el('div', { class: 'rf-content' })
  const wip = el('div', { class: 'rf-wip' })
  wip.appendChild(el('span', { style: 'font-size:36px' }, '✉️'))
  wip.appendChild(el('span', {}, '私信功能开发中…'))
  content.appendChild(wip)
  wrap.appendChild(content)
  wrap.appendChild(bottomNav(container))
  return wrap
}

// ── Profile ───────────────────────────────────────────────
function pageProfile(container) {
  const wrap = el('div', { class: 'rf' })

  const menuBtn = el('button', { class: 'rf-icon-btn' })
  menuBtn.appendChild(mkSvg(ICONS.menu))
  menuBtn.onclick = () => pageSettings(container)
  wrap.appendChild(topBar('✦ 我的', menuBtn))

  // header
  const header = el('div', { class: 'rf-profile-header' })
  const av = el('div', { class: 'rf-profile-avatar' })
  if (state.userProfile.avatarUrl) {
    const img = el('img', { src: state.userProfile.avatarUrl, alt: '' })
    img.onerror = () => img.remove()
    av.appendChild(img)
  }
  header.appendChild(av)
  header.appendChild(el('div', { class: 'rf-profile-name' }, state.userProfile.handle || '未设置昵称'))
  header.appendChild(el('div', { class: 'rf-profile-handle' }, '@' + (state.userProfile.handle || 'user')))
  wrap.appendChild(header)

  // tabs
  const tabNames = ['我的动态', '资料', '收藏', '更多']
  const profTabsEl = el('div', { class: 'rf-profile-tabs' })
  const profTabEls = tabNames.map((name, i) => {
    const t = el('button', { class: 'rf-profile-tab' + (state.profileTab === i ? ' active' : ''), onclick: () => switchPTab(i) }, name)
    return t
  })
  profTabEls.forEach(t => profTabsEl.appendChild(t))
  wrap.appendChild(profTabsEl)

  const content = el('div', { class: 'rf-content' })
  wrap.appendChild(content)
  wrap.appendChild(bottomNav(container))

  function drawContent() {
    content.innerHTML = ''
    if (state.profileTab === 0) {
      if (!state.myPosts.length) content.appendChild(el('div', { class: 'rf-empty' }, '还没有发过帖子'))
      else for (const p of state.myPosts) content.appendChild(postCard(p, content, 'myPosts'))

    } else if (state.profileTab === 1) {
      const rows = [
        ['论坛昵称', state.userProfile.handle],
        ['姓名', state.userProfile.name],
        ['年龄', state.userProfile.age],
        ['外貌', state.userProfile.appearance],
      ]
      for (const [label, val] of rows) {
        const row = el('div', { class: 'rf-settings-item' })
        row.appendChild(el('span', { class: 'rf-settings-label' }, label))
        row.appendChild(el('span', { class: 'rf-settings-value' }, val || '—'))
        content.appendChild(row)
      }
      const editWrap = el('div', { style: 'padding:16px' })
      editWrap.appendChild(el('button', {
        class: 'rf-btn rf-btn-primary',
        style: 'width:100%',
        onclick: () => pageProfileEdit(container),
      }, '编辑资料'))
      content.appendChild(editWrap)

    } else if (state.profileTab === 2) {
      if (!state.savedPosts.length) content.appendChild(el('div', { class: 'rf-empty' }, '还没有收藏任何帖子'))
      else for (const p of state.savedPosts) content.appendChild(postCard(p, content, 'savedPosts'))

    } else {
      const wip = el('div', { class: 'rf-wip' })
      wip.appendChild(el('span', { style: 'font-size:30px' }, '🔧'))
      wip.appendChild(el('span', {}, '更多功能开发中…'))
      content.appendChild(wip)
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
//  Settings pages
// ═══════════════════════════════════════════════════════════

function pageSettings(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  wrap.appendChild(backTopBar('设置', () => renderMain(container)))
  const content = el('div', { class: 'rf-content' })
  const items = [
    { label: '🖼️  头像设置',   fn: () => pageAvatar(container) },
    { label: '👤  资料设置',   fn: () => pageProfileEdit(container) },
    { label: '🌏  世界观设定', fn: () => pageWorldview(container) },
    { label: '📖  绑定世界书', fn: () => pageWorldbook(container) },
    { label: '🗑️  清理数据',   fn: () => pageCleanup(container) },
  ]
  for (const item of items) {
    const row = el('div', { class: 'rf-settings-item', onclick: item.fn })
    row.appendChild(el('span', { class: 'rf-settings-label' }, item.label))
    row.appendChild(el('span', { class: 'rf-settings-value' }, '›'))
    content.appendChild(row)
  }
  wrap.appendChild(content)
  container.appendChild(wrap)
}

function pageProfileEdit(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  const saveBtn = el('button', { class: 'rf-btn rf-btn-primary', style: 'font-size:13px;padding:6px 14px' }, '保存')
  wrap.appendChild(backTopBar('编辑资料', () => pageSettings(container), saveBtn))

  const content = el('div', { class: 'rf-content' })
  const fields = [
    { key: 'handle',     label: '论坛昵称（被@的名字）', placeholder: '例如：小樱' },
    { key: 'name',       label: '姓名',         placeholder: '你的真实名字' },
    { key: 'age',        label: '年龄',         placeholder: '例如：18' },
    { key: 'appearance', label: '外貌描述',     placeholder: '例如：长黑发，琥珀色眼睛…' },
  ]
  const inputs = {}
  for (const f of fields) {
    const grp = el('div', { class: 'rf-form-group' })
    grp.appendChild(el('div', { class: 'rf-form-label' }, f.label))
    const inp = el('input', { class: 'rf-form-input', type: 'text', placeholder: f.placeholder })
    inp.value = state.userProfile[f.key] || ''
    inputs[f.key] = inp
    grp.appendChild(inp)
    content.appendChild(grp)
  }
  wrap.appendChild(content)

  saveBtn.onclick = async () => {
    for (const f of fields) state.userProfile[f.key] = inputs[f.key].value.trim()
    await save('userProfile')
    roche.ui.toast('✦ 资料已保存')
    pageSettings(container)
  }
  container.appendChild(wrap)
}

function pageAvatar(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  wrap.appendChild(backTopBar('头像设置', () => pageSettings(container)))
  const content = el('div', { class: 'rf-content', style: 'padding:20px 16px' })

  // preview
  const previewWrap = el('div', { style: 'display:flex;justify-content:center;margin-bottom:20px' })
  const av = el('div', { class: 'rf-profile-avatar', style: 'margin:0' })
  if (state.userProfile.avatarUrl) {
    const img = el('img', { src: state.userProfile.avatarUrl, alt: '' })
    img.onerror = () => img.remove()
    av.appendChild(img)
  }
  previewWrap.appendChild(av)
  content.appendChild(previewWrap)

  // URL input
  const g1 = el('div', { class: 'rf-form-group' })
  g1.appendChild(el('div', { class: 'rf-form-label' }, '粘贴图片链接（URL）'))
  const urlInput = el('input', { class: 'rf-form-input', type: 'url', placeholder: 'https://…' })
  urlInput.value = state.userProfile.avatarUrl || ''
  g1.appendChild(urlInput)
  content.appendChild(g1)

  // file picker
  const g2 = el('div', { class: 'rf-form-group' })
  g2.appendChild(el('div', { class: 'rf-form-label' }, '或从相册选择（自动转 Base64）'))
  const fileInput = el('input', { type: 'file', accept: 'image/*', style: 'margin-top:6px' })
  fileInput.onchange = e => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => {
      urlInput.value = ev.target.result
      av.innerHTML = ''
      const img = el('img', { src: ev.target.result, alt: '' })
      av.appendChild(img)
    }
    reader.readAsDataURL(file)
  }
  g2.appendChild(fileInput)
  content.appendChild(g2)

  const saveBtn = el('button', {
    class: 'rf-btn rf-btn-primary',
    style: 'margin:12px 16px;width:calc(100% - 32px)',
    onclick: async () => {
      state.userProfile.avatarUrl = urlInput.value.trim()
      await save('userProfile')
      roche.ui.toast('✦ 头像已保存')
      pageSettings(container)
    }
  }, '保存头像')
  content.appendChild(saveBtn)

  wrap.appendChild(content)
  container.appendChild(wrap)
}

function pageWorldview(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  const saveBtn = el('button', { class: 'rf-btn rf-btn-primary', style: 'font-size:13px;padding:6px 14px' }, '保存')
  wrap.appendChild(backTopBar('世界观设定', () => pageSettings(container), saveBtn))
  const content = el('div', { class: 'rf-content', style: 'padding:12px 16px' })
  const ta = el('textarea', { class: 'rf-worldview-text' })
  ta.value = state.worldview
  content.appendChild(ta)
  content.appendChild(el('div', { style: 'font-size:11px;color:#999;margin-top:8px;line-height:1.6' },
    '提示：修改世界观后，下次刷新帖子时生效。建议保留原有禁令规则。'))
  wrap.appendChild(content)
  saveBtn.onclick = async () => {
    state.worldview = ta.value.trim()
    await save('worldview')
    roche.ui.toast('✦ 世界观已保存')
    pageSettings(container)
  }
  container.appendChild(wrap)
}

async function pageWorldbook(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  wrap.appendChild(backTopBar('绑定世界书', () => pageSettings(container)))
  const content = el('div', { class: 'rf-content' })
  content.appendChild(el('div', { class: 'rf-loading' }, '加载世界书分类…'))
  wrap.appendChild(content)
  container.appendChild(wrap)

  try {
    const categories = await roche.worldbook.list()
    content.innerHTML = ''
    if (!categories?.length) {
      content.appendChild(el('div', { class: 'rf-empty' }, '暂无世界书分类\n请先在 Roche 中创建世界书'))
      return
    }
    const selected = new Set(state.boundWorldbooks)
    for (const cat of categories) {
      const item = el('div', { class: 'rf-worldbook-item' })
      const cb = el('input', { type: 'checkbox', id: 'wb-' + cat.id })
      cb.checked = selected.has(cat.id)
      cb.onchange = () => { cb.checked ? selected.add(cat.id) : selected.delete(cat.id) }
      const lbl = el('label', { for: 'wb-' + cat.id }, cat.name || cat.title || cat.id)
      item.appendChild(cb); item.appendChild(lbl)
      content.appendChild(item)
    }
    const saveBtn = el('button', {
      class: 'rf-btn rf-btn-primary',
      style: 'margin:12px 16px;width:calc(100% - 32px)',
      onclick: async () => {
        state.boundWorldbooks = [...selected]
        await save('boundWorldbooks')
        roche.ui.toast('✦ 绑定已保存')
        pageSettings(container)
      }
    }, '保存绑定')
    content.appendChild(saveBtn)
  } catch (e) {
    content.innerHTML = ''
    content.appendChild(el('div', { class: 'rf-empty' }, '加载失败：' + e.message))
  }
}

async function pageCleanup(container) {
  container.innerHTML = ''
  const wrap = el('div', { class: 'rf' })
  wrap.appendChild(backTopBar('清理数据', () => pageSettings(container)))
  const content = el('div', { class: 'rf-content' })

  const items = [
    { label: '清理主页全部帖子',   key: 'homePosts' },
    { label: '清理板块跨界帖子',   key: 'crossPosts' },
    { label: '清理板块平行帖子',   key: 'parallelPosts' },
    { label: '清理我发的帖子',     key: 'myPosts' },
    { label: '清理全部收藏帖子',   key: 'savedPosts' },
  ]
  for (const item of items) {
    const row = el('div', { class: 'rf-settings-item', onclick: async () => {
      const ok = await roche.ui.confirm({ title: '确认清理', message: `确定要${item.label}吗？此操作不可撤销。` })
      if (!ok) return
      state[item.key] = []
      await save(item.key)
      roche.ui.toast(`✦ 已${item.label}`)
    } })
    row.appendChild(el('span', { class: 'rf-settings-label', style: 'color:#c00' }, item.label))
    row.appendChild(el('span', { class: 'rf-settings-value' }, '›'))
    content.appendChild(row)
  }

  wrap.appendChild(content)
  container.appendChild(wrap)
}

// ═══════════════════════════════════════════════════════════
//  Main render
// ═══════════════════════════════════════════════════════════
function renderMain(container) {
  container.innerHTML = ''
  let wrap
  if (state.page === 'home')    wrap = pageHome(container)
  if (state.page === 'section') wrap = pageSection(container)
  if (state.page === 'message') wrap = pageMessage(container)
  if (state.page === 'profile') wrap = pageProfile(container)
  if (wrap) container.appendChild(wrap)
}

// ═══════════════════════════════════════════════════════════
//  Plugin registration
// ═══════════════════════════════════════════════════════════
let _styleEl = null

window.RochePlugin.register({
  id: 'roche-forum',
  name: '✦ 角色论坛',
  version: '1.0.0',
  apps: [
    {
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
    },
  ],
})

})()
