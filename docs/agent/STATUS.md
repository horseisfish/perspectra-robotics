# 工作狀態

更新日期：2026-10-14

## 本次目標
精簡網站資訊與視覺，更新 README，建立 agent 執行、記憶與持續更新規則。

## 已完成
- 首頁從七個內容區塊收斂為核心介紹、研究摘要及聯絡入口。
- 減少導覽項目與研究／公司頁重複內容，模型頁移除重複互動圖與發布聲明。
- 改為中性色背景、較窄內容寬度與更安靜的頁面樣式。
- 更新 Next.js 開發部署文件並建立 agent 工作規範與記憶檔案。

## 驗證與待辦
- lint 通過（既有 postcss.config.mjs 匿名匯出警告 1 項）。
- typecheck 通過；webpack 正式建置成功，所有頁面產生完成。
- git diff --check 通過；瀏覽器已確認首頁內容與排版。
- 預設 Turbopack 建置未完成，已中止並以 webpack 驗證。
- 正式部署前設定 NEXT_PUBLIC_SITE_URL；未設定時 build 提示 metadataBase 使用 localhost。
- 本次修改已完成，尚未部署。
