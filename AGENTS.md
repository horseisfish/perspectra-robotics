# Agent 工作規範

## 開始工作

1. 閱讀 README.md、docs/agent/MEMORY.md 與 docs/agent/STATUS.md。
2. 檢查 git status，保留使用者既有修改。
3. 在 docs/agent/STATUS.md 記錄本次目標與進行中的工作。

## 實作原則

- 網站保持簡約：首頁只呈現核心定位、研究入口與聯絡方式。
- 使用 src/lib/content.ts 中的公司資料；避免在多個頁面重複研究介紹。
- 維持鍵盤操作、行動版排版、語意標記與 reduced-motion 支援。
- 未正式發布的模型與論文必須標示研究階段；不得虛構成果或發布資訊。
- legacy/ 僅供歷史參考，不是目前部署來源。

## 每次工作結束前（包含未完成或受阻）

1. 更新 docs/agent/STATUS.md：完成內容、目前狀態、待辦與阻礙。
2. 追加 docs/agent/RUN_LOG.md：日期、目標、變更、實際驗證結果及未執行原因。
3. 檢視並更新 docs/agent/MEMORY.md：保留長期有效的決策、限制與使用者偏好；沒有新決策時更新檢視日期。
4. 檢視 README.md：操作、架構或部署有變更時同步內容；無變更則在執行紀錄註明已檢視。
5. 執行適用的 lint、typecheck、build；只能把實際通過的檢查記為通過。
6. 最終回覆說明結果、驗證與尚未解決的限制。

文件不得記錄密鑰、個資或未證實推測。記憶保持精簡，不複製整段對話。

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
