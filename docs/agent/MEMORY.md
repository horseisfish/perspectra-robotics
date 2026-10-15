# 專案記憶

最後檢視：2026-10-14

- 使用者偏好：資訊精簡、簡約視覺，避免首頁重複堆疊研究介紹。
- 首頁維持核心介紹、施力與回應小互動、研究摘要與聯絡入口；深入內容放在研究詳情頁。
- 主要導覽為 Research、About、Contact；/models 保留直接存取。
- 現行網站為 Next.js App Router；legacy/ 不是部署來源。
- Haptic World Models 屬研究方向，white paper 尚在準備；未宣布公開模型或 API。
- 每次工作後更新進度、執行紀錄，檢視記憶與 README；入口規範在 AGENTS.md。

- 使用者希望首頁讓訪客理解「You act. The world pushes back.」，透過互動建立研究辨識度。
- 首頁互動採理想彈簧平衡示意，相同力在不同剛度下變形不同；不可描述為已驗證的 HWM 預測。

- Vercel 部署用根目錄 vercel.json 固定 framework=nextjs、buildCommand=npm run build、outputDirectory=.next，避免舊 public 輸出設定。

- 新視覺方向：深石墨色研究室、霧白文字與冷藍訊號；神秘感來自未知表面探索，公司與研究狀態維持清楚。
- 創辦人：Shih-Yu Ma（第二張照片），Co-founder / Research & Development；Tom Yeh（第一張照片），Co-founder / Algorithms。
- About 使用 button、aria-expanded 與 CSS grid 動畫展開介紹，姓名與分工直接可見，不新增未提供的履歷或成果。

- 創辦人照片維持自然色彩與亮度，避免黑白呈現；只輕降飽和度並統一頭肩比例，展開介紹不變色。

- 首頁每個表面的揭露狀態各自保留；切換與 Release 不把已知名稱重設成 Surface A/B/C。狀態維持於目前頁面，重新整理重置。

- 使用者希望介紹展開與收合有動畫、滑鼠移入照片有 zoom；保留自然色彩、各自裁切比例及 reduced-motion 支援。

- 頁面路徑切換後回到頁首，避免 Next.js 預設保留位置使頁面從第二區塊開始；明確 hash 錨點不重置。

- 對外電話顯示為 +886 2 22499912，撥號連結 tel:+886222499912。

- 頁面切換使用 420ms 小幅位移與阻尼回彈進場，表現 haptic 接觸感；導覽保持穩定、立即回到頁首，reduced-motion 停用動畫。

- Logo 使用非對稱幾何 P、錯位線段與冷藍接觸點；使用者不喜歡內凹雙曲線帶來的人體聯想，避免此輪廓。
