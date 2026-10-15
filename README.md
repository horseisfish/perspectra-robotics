# Perspectra Robotics · 觀象科技

以深石墨色研究室風格與簡約資訊架構介紹公司、Haptic World Models 研究方向與合作聯絡方式。
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

- `/`：核心定位、施力／回應小互動、研究入口與合作聯絡。
- `/research`：研究摘要與主要方向。
- `/research/haptic-world-models`：深入研究說明。
- `/about`：公司使命、品牌背景與兩位 co-founder 的照片／可展開介紹。
- `/contact`：信箱、電話與地址。
- `/models`：保留的模型資訊頁，可直接透過網址存取。

頁面位於 `src/app/`，共用元件位於 `src/components/`，公司與研究資料集中於 `src/lib/content.ts`，樣式位於 `src/app/globals.css`。
`legacy/` 是舊版靜態網站，不是目前部署來源。

## 首頁互動

`src/components/push-back.tsx` 提供「You act. The world pushes back.」概念示意：先顯示未知的 Surface A／B／C；調整施力後揭露 Soft／Springy／Firm 性質，觀察變形與反作用力；Release 回復零施力。每個表面在本次頁面使用期間記住已揭露的名稱，切換或 Release 不隱藏；重新整理會重新開始探索。滑桿支援鍵盤操作，動畫遵循 reduced-motion 設定。

以理想線性彈簧的靜態平衡示意（變形 = 施力 / 剛度），作用力與反作用力大小相等、方向相反。數值為教學用設定，並非模型預測或實測材質資料。

頁面路徑切換時透過 `src/app/template.tsx` 播放 420ms 的微小位移、回彈與穩定進場動畫，遵循 reduced-motion，不延遲操作；同時立即回到頁首；明確的 `#` 區段連結保留錨點跳轉。

## 創辦人介紹

`src/components/founders.tsx` 使用可鍵盤操作的 button 與 aria-expanded，點照片或姓名可平順展開／收合介紹。Shih-Yu Ma 負責 Research & Development，Tom Yeh 負責 Algorithms，兩位皆為 Co-founder。照片位於 `public/team/`；保留自然膚色與亮度，以 CSS 輕降飽和度、調整頭肩構圖；展開介紹不改變照片色彩；滑鼠移入照片時輕微放大，原始照片保持完整。所有動畫遵循 reduced-motion 設定。

## 部署

```sh
npm run build
npm run start
```

正式部署請設定 `NEXT_PUBLIC_SITE_URL` 為網站完整網址（例如 `https://example.com`），以啟用搜尋索引、canonical 與 sitemap 網址。未設定時網站會關閉搜尋索引。

使用支援 Next.js 的 Node.js 主機或 Vercel。現有設定未啟用靜態匯出，不能直接將原始碼上傳 GitHub Pages 當作網站發布。

### Vercel 設定

根目錄的 `vercel.json` 明確指定 Next.js、`npm run build` 與 `.next` 輸出目錄，覆寫舊的 `public` 輸出設定。

在 Vercel Project Settings → Build and Deployment 確認：

- Framework Preset：Next.js。
- Root Directory：包含 package.json 與 vercel.json 的專案根目錄。
- Output Directory：取消手動 Override，或設定 `.next`；不要填 `public`。

將設定檔提交並推送至 Vercel 追蹤的分支，再建立新的部署；重新部署舊 commit 不會取得新設定。`public/` 是靜態資源來源目錄，並非 Next.js 建置輸出。

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
電話：+886 2 22499912
地址：新北市中和區安和路161號

## 品牌符號

Logo 採開放式幾何 P 與冷藍接觸點，呼應施力、接觸與回應。共用元件為 `src/components/logo.tsx`，可重用向量檔為 `public/logo.svg`；導覽、頁尾、favicon 與分享圖同步使用。

## npm 安裝警告

Vercel 安裝改用 `npm ci`，並在 install/build 指令啟動 npm 前移除環境注入的不支援設定 `npm_config_cache_dir` / `NPM_CONFIG_CACHE_DIR`。若自行設定 npm 快取，應使用 `npm_config_cache`。

`package.json` 的 `allowScripts` 僅核准已檢視的 `unrs-resolver@1.12.2` 原生綁定準備腳本；依賴版本更新時需重新檢視。

ESLint 保留 9：目前最新的 eslint-plugin-react 與 eslint-plugin-jsx-a11y peerDependencies 仍未支援 10。棄用警告仍可能出現，待插件支援後再升級，不使用強制 peer dependency 安裝。

## 字體排版

標題採自然字距，取消負字距壓縮，並增加單字間距；h1 行距 1.22、h2 行距 1.32，優先閱讀清晰度。

桌面頁尾上下兩排採相同三欄配置，中間描述與中文公司名稱共用中心線；窄螢幕維持換行排版。
