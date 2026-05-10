# 企業學習平台首頁

_Started 2026-05-10 03:06 UTC_

---

## User

這是一個企業內部學習平台的首頁
白色這張是舊有網站首頁

請依照我給的參考圖
設計成暗色底的風格
把舊友網站有得資訊都要設計
導覽列改成側邊選單 並用icon 設計
卡片是課程 請幫我圖片封面做一點濾鏡看起來更和諧
並且滑鼠移動過去卡片時顯示一點動畫效果以及詳細內容

## Assistant

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: update_todos]_

_[tool: copy_starter_component]_

Plan: building a dark, polished e學院 dashboard with an icon side nav, profile/stats panel, animated hover course cards (desaturate→full-color image, lift, reveal description/CTA), and the to-do/message/history panels from the original. Original design — not copying the johnson-system UI verbatim, just preserving the information architecture.

**Aesthetic system:**
- Deep charcoal background `#0b0d12`, raised panels `#161922`, hairline borders `oklch(0.28 0.01 260 / 0.6)`
- Type: Inter (Latin) + Noto Sans TC (Chinese), 1 weight family
- Accents: brand-warm red `oklch(0.66 0.18 25)`, soft cyan `oklch(0.78 0.10 200)` for status pings
- Sidebar 72px icon rail with active-pill, tooltip on hover
- Course cards: image desaturates by default for harmony, restores on hover with lift + meta reveal
- Tweaks: accent color, density, image treatment

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

設計完成 — e學院 已重做為暗色介面，原網站所有資訊都保留下來：

- **側邊 icon 導覽列**（72px）：Home / e-Courses / Activities / Exams / Survey / Library / Messages，hover 顯示 tooltip，未讀有紅點
- **左欄**：個人資料卡（含升等進度條）、待辦事項（漸層強調）、訊息中心、學習軌跡（時間軸）
- **必修課程區**：主卡 + Q2 升等進度提示與截止日期
- **最新課程**：分類 chips 篩選 + 8 張課程卡
- **卡片動畫**：預設封面套用 `saturate(0.55) brightness(0.85)` 濾鏡讓畫面和諧；hover 時封面淡入彩度＋微縮放、卡片浮起、紅色 glow 邊框，並覆蓋顯示課程描述、時長、單元數與「開始學習」按鈕
- **Tweaks**：可切換 accent 色（紅 / 琥珀 / 綠 / 紫）、圖片風格（harmonized / vivid / mono）、密度、Q2 卡片顯示

