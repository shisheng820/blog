import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'sixiang.world',
  title: 'SiXiang-Urara',
  subtitle: '',
  lang: 'zh-CN',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/sixiang@512.png',
    name: 'Si·Xiang',
    status: '🐬',
    bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  themeColor: '#BDCBD2'
}
