# xinkouhe · 心口合

一個以 Astro 建立的中文靜態博客，適合部署到 GitHub Pages。

## 本地開發

```bash
npm install
npm run dev
```

建置與預覽：

```bash
npm run build
npm run preview
```

## 寫新文章

在 `src/content/posts/` 新增 Markdown 檔案，使用以下 frontmatter：

```md
---
title: '文章標題'
description: '文章摘要'
date: 2026-09-11
category: '隨筆'
tags: ['生活']
featured: false
readingTime: '5 分鐘'
---
```

推送到 `main` 後，GitHub Actions 會自動建置並部署。首次使用時，請在 GitHub repository 的 Settings → Pages → Build and deployment 中將 Source 設為 GitHub Actions。

`astro.config.mjs` 會依照 `GITHUB_REPOSITORY` 自動處理 user page 與 project page 的路徑。
