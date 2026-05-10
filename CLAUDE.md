# e學院 — Johnson e-Academy

企業內部學習平台首頁，暗色主題設計。

## 技術棧

- **框架**: React 19 + Vite 8
- **樣式**: 純 CSS（CSS custom properties，無 Tailwind 或 CSS-in-JS）
- **字型**: Inter（英文）+ Noto Sans TC（中文），由 Google Fonts 載入
- **無外部 UI 元件庫**，所有 icon 皆為內建 SVG

## 啟動方式

```bash
npm install
npm run dev      # 開發伺服器（http://localhost:5173）
npm run build    # 生產建置 → dist/
npm run preview  # 預覽生產建置
```

## 檔案結構

```
src/
├── main.jsx                  # 應用程式入口
├── App.jsx                   # 根元件，狀態管理（accent、filter、density）
├── styles.css                # 全域樣式，CSS custom properties 設計系統
├── data.js                   # 課程、訊息、導覽列資料
└── components/
    ├── Icons.jsx             # 內建 SVG icon 集（Icon 元件）
    ├── Covers.jsx            # 課程封面（主題漸層 SVG）
    ├── Sidebar.jsx           # 72px icon 側欄
    ├── Topbar.jsx            # 頂部列（搜尋、通知、使用者）
    ├── CourseCard.jsx        # 課程卡片（hover 動畫）
    └── LeftPanels.jsx        # 左欄面板群（個人資料、待辦、訊息、學習軌跡）
```

## 設計系統

所有設計 token 定義在 `src/styles.css` 的 `:root`：

| 變數 | 用途 |
|------|------|
| `--bg` / `--bg-2` | 頁面背景層 |
| `--panel` / `--panel-2` | 卡片 / 面板背景 |
| `--line` / `--line-2` | 邊框顏色 |
| `--txt` / `--txt-2` / `--txt-3` | 文字色階 |
| `--accent` | 主品牌色（可動態切換，預設暖紅） |
| `--gold` | 升等 / 徽章強調色 |
| `--green` | 在線狀態 / 完成標記 |

**Accent 切換**：`App.jsx` 透過 `document.documentElement.style.setProperty('--accent', ...)` 動態更新，所有用到 `var(--accent)` 的樣式會自動反應。

## 新增課程或內容

所有資料集中在 `src/data.js`：

- `LATEST` — 最新課程列表，新增一筆物件即可出現在格線
- `REQUIRED` — 必修課程（目前首頁固定顯示 index 0）
- `MESSAGES` — 訊息中心
- `HISTORY` — 學習軌跡

**課程封面主題**：在 `src/components/Covers.jsx` 的 `COVER_THEMES` 新增 key，然後在課程資料的 `cover` 欄位引用。

## 新增 Icon

在 `src/components/Icons.jsx` 的 `switch` 新增 case，回傳 SVG 標籤即可。規格：24×24 viewBox，`stroke="currentColor"`，`strokeLinecap="round"`，`strokeLinejoin="round"`。

## 卡片 Hover 動畫

邏輯全在 CSS，不需要 JS：
- `.card:hover .cover-svg` — 封面從 `saturate(0.55)` 恢復彩度 + 微縮放
- `.card:hover .card-overlay` — 黑色漸層 overlay 淡入，顯示描述 / CTA
- `.card:hover` — 卡片上移 6px + accent glow 邊框

若要調整動畫時間，修改 `.card` 的 `transition` 屬性。

## 圖片風格模式

在 `App.jsx` 的 `imageStyle` state 切換：
- `harmonized`（預設）— `saturate(0.55) brightness(0.85)`，降彩度讓畫面和諧
- `vivid` — `saturate(1) brightness(0.95)`，保留原色
- `mono` — `saturate(0) brightness(0.85)`，黑白

對應 CSS class：`.img-vivid` / `.img-mono` 掛在 `.app` 根元素上。

## 版型響應式斷點

| 斷點 | 課程格線 |
|------|---------|
| > 1400px | 4 欄 |
| 1100–1400px | 3 欄 |
| < 1100px | 2 欄 |

左欄（312px）與側欄（72px）目前為固定寬度，適合桌面使用。

## 待開發功能（建議優先順序）

1. **頁面路由**：使用 React Router，讓側欄各項目連結到對應子頁面（課程清單、活動、測驗）
2. **課程詳情頁**：點擊卡片進入課程播放或詳情頁面
3. **搜尋功能**：接通後端 API 或對 `LATEST` 做前端模糊搜尋
4. **認證 / 使用者資料**：目前硬編碼「莊佳燕」，需串接 SSO 或 API
5. **行動版響應式**：將左欄改為可收合 drawer，側欄改為底部導覽
6. **深色 / 淺色切換**：`:root[data-theme="light"]` 覆寫 token 即可
7. **課程進度持久化**：使用 localStorage 或後端 API 保存學習進度
