# Perspectra Robotics · 觀象科技

以簡約資訊架構介紹公司、Haptic World Models 研究方向與合作聯絡方式。
目前使用 Next.js App Router、React、TypeScript 與 Tailwind CSS。

## 本機開發

需要 Node.js 20.9 以上及 npm。

```sh
npm install
npm run dev
```

開啟 http://localhost:3000。主要檢查：

```sh
npm run lint
npm run typecheck
npm run build
```

## 網站結構

- `/`：核心定位、研究入口與合作聯絡。
- `/research`：研究摘要與主要方向。
- `/research/haptic-world-models`：深入研究說明。
- `/about`：公司使命與品牌背景。
- `/contact`：信箱、電話與地址。
- `/models`：保留的模型資訊頁，可直接透過網址存取。

頁面位於 `src/app/`，共用元件位於 `src/components/`，公司與研究資料集中於 `src/lib/content.ts`，樣式位於 `src/app/globals.css`。
`legacy/` 是舊版靜態網站，不是目前部署來源。

## 部署

```sh
npm run build
npm run start
```

正式部署請設定 `NEXT_PUBLIC_SITE_URL` 為網站完整網址（例如 `https://example.com`），以啟用搜尋索引、canonical 與 sitemap 網址。未設定時網站會關閉搜尋索引。

使用支援 Next.js 的 Node.js 主機或 Vercel。現有設定未啟用靜態匯出，不能直接將原始碼上傳 GitHub Pages 當作網站發布。

## Agent 工作與記憶

- `AGENTS.md`：開始、實作及結束工作規範。
- `docs/agent/STATUS.md`：目前進度、待辦與阻礙。
- `docs/agent/MEMORY.md`：長期決策與專案偏好。
- `docs/agent/RUN_LOG.md`：每次執行的變更與驗證紀錄。
- `.cursor/rules/agent-workflow.mdc`：每次工作套用的相同流程。

每次完成或中止工作都必須更新進度與執行紀錄、檢視記憶與 README；具體要求見 `AGENTS.md`。

## 公司資料

Perspectra Robotics Inc.／觀象科技股份有限公司
信箱：perspectrarobotics@gmail.com
電話：(02) 2249-9912
地址：新北市中和區安和路161號
