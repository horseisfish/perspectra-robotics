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
