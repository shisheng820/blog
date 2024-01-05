import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'sixiang.world',
  title: 'SiXiang',
  subtitle: '用浆糊编写的博客',
  lang: 'zh-CN',
  description: '四象的世界',
  author: {
    avatar: '/assets/sixiang@512.png',
    name: 'Si·Xiang',
    status: '🐬',
    bio: '啥都不会，来自中国的高中生'
  },
  themeColor: '#BDCBD2'
}
