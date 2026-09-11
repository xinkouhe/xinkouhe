export const site = {
  name: 'xinkouhe',
  title: '心口合 · 一方清寂',
  description: '把日子寫成風，把心事放進山水之間。',
  author: 'xinkouhe',
  nav: [
    { label: '首頁', href: '' },
    { label: '文章', href: 'posts/' },
    { label: '關於', href: 'about/' },
  ],
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
