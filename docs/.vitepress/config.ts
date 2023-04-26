import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue 3 animated number",
  description: "Vue 3 animated number",
  base: '/vue-3-animated-number/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'View on Github', link: 'https://github.com/guiguiboy/vue-3-animated-number' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Get started', link: '/get-started' },
          { text: 'Examples', link: '/examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guiguiboy/vue-3-animated-number' }
    ]
  }
})
