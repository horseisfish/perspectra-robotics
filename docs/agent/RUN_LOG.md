# Agent 執行紀錄

## 2026-10-14 — 簡約網站與 agent 文件

- 目標：精簡資訊與視覺，更新 README，建立每次執行後的記憶更新規則。
- 變更：首頁由七個介紹區塊收斂為三區塊；導覽保留 Research、About、Contact；研究、模型、公司頁移除重複內容。保留深入研究頁與 /models 網址。
- 視覺：中性背景、較窄版面、簡化首頁並減少裝飾。
- 文件：更新 README，新增 AGENTS.md、STATUS.md、MEMORY.md、RUN_LOG.md 及 alwaysApply 的 Cursor 規則。
- 依賴：安裝 npm 套件並新增 package-lock.json，固定本次解析版本。next-env.d.ts 由 Next.js 建置更新。
- 驗證：npm run lint 成功（既有 postcss.config.mjs 警告 1 項）；npm run typecheck 成功；npm run build -- --webpack 成功；git diff --check 成功；瀏覽器確認首頁內容與排版。
- 限制：預設 npm run build 的 Turbopack 建置未完成，已中止，改用 webpack 驗證。未設定 NEXT_PUBLIC_SITE_URL 時建置有 metadataBase 提示，README 已補設定說明。未完成手機各尺寸的全面視覺檢查。
- 文件檢視：README 與 MEMORY 已同步更新；本次工作完成，未部署。

## 2026-10-14 — 首頁施力與回應互動

- 目標：訪客透過小互動理解「You act. The world pushes back.」。
- 變更：新增 push-back.tsx client component 與 SVG 表面／探針、施力滑桿、三種剛度、反作用力箭頭、Release；首頁整合與響應式樣式。
- 物理設定：靜態平衡的理想線性彈簧，反作用力大小等於施力，變形由 F/k 決定；明確標示概念示意與數據限制。
- 驗證：lint 成功（既有警告 1 項）；typecheck 成功；webpack build 成功（既有 metadataBase 提示）；瀏覽器驗證 Soft 10 N → 66.7 mm、Firm 10 N → 8.3 mm、Release → 0 N / 0 mm、鍵盤 Right → 增加 0.5 N，確認排版並儲存預覽圖。
- 文件：README、AGENTS、STATUS、MEMORY 已同步檢視更新。
- 限制：未逐一檢查手機各尺寸；未部署。

## 2026-10-14 — Vercel public 輸出錯誤

- 問題：使用者回報 build 完成後找不到 public；錯誤指出部署正在使用不符合此 Next.js 專案的輸出目錄，尚未直接檢視 Vercel dashboard。
- 修正：新增 vercel.json，指定 framework=nextjs、buildCommand=npm run build、outputDirectory=.next；依據 Vercel 官方設定文件，此欄位可覆寫 Project Settings 輸出目錄。
- 驗證：JSON 解析與設定檢查成功；webpack production build 成功；.next/BUILD_ID、routes-manifest.json 存在；git diff --check 成功。此文件與部署設定改動不另跑 lint。
- 文件：README、STATUS、MEMORY 同步更新，AGENTS 已檢視。
- 限制：未操作 Vercel dashboard、未提交推送或確認線上部署；需部署包含新設定的新 commit，並確認 root directory。既有 metadataBase 提示不影響此次建置成功。

## 2026-10-14 — 深色研究室與創辦人

- 目標：依使用者授權更新整站神秘感版本，整合先前討論的未知表面與兩位 co-founder。
- 變更：深石墨色全站樣式、首頁主標、零施力未知表面及接觸揭露；新增 founders.tsx 與 public/team 原始照片，About 支援照片點擊展開介紹；研究圖、favicon 與 Open Graph 圖同步配色。
- 身分資料：使用者確認第一張為 Tom Yeh（Algorithms），第二張為 Shih-Yu Ma（Research & Development）；介紹採已討論的簡短草稿，不新增履歷。
- 驗證：lint 成功（既有警告 1 項）；typecheck 成功；最終 webpack build 成功（既有 metadataBase 提示）；瀏覽器驗證 unknown → Springy、切換重新未知、兩張照片載入、兩位介紹展開、Enter 收合；預覽已保存。
- 文件：README、STATUS、MEMORY 更新；AGENTS 已檢視。
- 限制：尚未全面測試各手機尺寸，尚未提交或部署。

## 2026-10-14 — 創辦人自然色彩

- 使用者不喜歡黑白照片，依討論恢復自然膚色與亮度，以 saturate(.9) 輕降飽和度。
- 使用 CSS 調整 Shih-Yu 頭肩比例，移除 hover／展開的照片變色與縮放，减淡底部文字漸層；保留原始照片。
- 驗證：lint 通過（既有警告 1 項），webpack build 及其 TypeScript 檢查通過（既有 metadataBase 提示），瀏覽器確認照片構圖與介紹展開，保存預覽。
- README、MEMORY、STATUS 已同步更新；未部署，未全面測試手機各尺寸。

## 2026-10-14 — 保留已探索表面名稱

- 以每材質的 boolean 狀態陣列記住揭露，移除切換時重置知識的邏輯。
- Release 仍只重置施力；已揭露按鈕與目前表面說明維持名稱，頁面重新整理重置。
- 瀏覽器驗證 Springy → 未知 A 時 Springy 名稱保留；測試 A → Soft、Release、返回 Springy 時兩者名稱保留，未測試 C 仍為 Surface C。
- lint 通過（既有警告），webpack build 與其中的 TypeScript 檢查通過（既有 metadataBase 提示）。README、MEMORY、STATUS 更新；未部署。

## 2026-10-14 — 創辦人互動動畫

- 改為 client button + aria-expanded，CSS grid 0fr/1fr 與 opacity 處理介紹展開和收合；閉合內容 inert / aria-hidden。
- 滑鼠精準指標移入照片時放大 4.5%，以各照片原本的縮放值為基準，不改變色彩。
- 全站 reduced-motion 規則停用 transition；沒有新增測試檔。
- lint、webpack build 及內含 TypeScript 檢查通過，保留既有警告／metadata 提示；瀏覽器確認展開、鍵盤收合。
- README、MEMORY、STATUS 同步；尚未部署。

## 2026-10-14 — 切換頁面回到頁首

- Next.js Link 預設可能保留仍可見頁面的位置，導致新頁停留第二區塊。
- Navigation 監看 pathname，requestAnimationFrame 後 instant scrollTo(0,0)，保留顯式 hash 目的地。
- 瀏覽器驗證 About 頁尾 → Research、Research 頁尾 → Contact，兩次 scrollY=0。
- lint、webpack build 及其 TypeScript 檢查通過（既有警告／metadataBase 提示）；README、MEMORY、STATUS 更新。尚未部署。

## 2026-10-14 — 電話國碼

- 依使用者要求將共用公司電話與 README 改為 +886 2 22499912；tel 連結已有國碼，維持原值。
- 核對 Contact 使用 company.phone，顯示與 tel 號碼一致；git diff --check 通過。純文字變更，未另跑建置或 lint。MEMORY、STATUS 同步更新。

## 2026-10-14 — Haptic 頁面切換動畫

- 新增 client template，以 pathname 作為動畫容器 key，深層路徑切換亦重新播放。
- 420ms opacity 與微小位移的阻尼回彈，僅包覆頁面內容，不加入離場等待或延遲互動；reduced-motion 明確停用。
- 瀏覽器驗證 Contact 頁尾 → About，scrollY=0、動畫名稱與時長正確且有進場中的 transform。
- lint、webpack build 及 TypeScript 檢查通過（既有警告／metadataBase 提示），README、MEMORY、STATUS 同步；尚未部署。

## 2026-10-14 — 品牌 Logo 重設

- 新增共用 LogoMark 與 public/logo.svg，導覽、頁尾、favicon 及 Open Graph 配合更新。
- 根據使用者回饋改為非對稱幾何 P、接觸點與錯位線段，避免內凹雙曲線輪廓。
- lint 通過（既有警告）；webpack build 與 TypeScript 檢查通過（既有 metadataBase 提示）。README、MEMORY、STATUS 同步更新；尚未部署。
