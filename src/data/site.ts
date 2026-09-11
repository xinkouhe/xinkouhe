export const site = {
  name: 'xinkouhe',
  title: '心口合 · 一方清寂',
  description: '把日子写成风，把心事放进山水之间。',
  author: 'xinkouhe',
  nav: [
    { label: '首页', href: '' },
    { label: '文章', href: 'posts/' },
    { label: '关于', href: 'about/' },
  ],
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
