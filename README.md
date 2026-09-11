# xinkouhe · 心口合

一个以 Astro 建立的中文静态博客，适合部署到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

构建与预览：

```bash
npm run build
npm run preview
```

## 写新文章

在 `src/content/posts/` 新增 Markdown 文件，使用以下 frontmatter：

```md
---
title: '文章标题'
description: '文章摘要'
date: 2026-09-11
category: '随笔'
tags: ['生活']
featured: false
readingTime: '5 分钟'
---
```

推送到 `main` 后，GitHub Actions 会自动构建并部署。首次使用时，请在 GitHub repository 的 Settings → Pages → Build and deployment 中将 Source 设为 GitHub Actions。

`astro.config.mjs` 会依照 `GITHUB_REPOSITORY` 自动处理 user page 与 project page 的路径。
