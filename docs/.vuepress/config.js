module.exports = {
  title: '3D案例',
  description: '3D案例学习',
  base: '/',
  sidebar: 'auto',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    nav: [
      {
        text: '知识点',
        link: '/points/'
      },
      {
        text: '案例',
        link: '/project/'
      },
      {
        text: '其他',
        link: '/other/'
      },
      {
        text: '关于',
        link: '/about/'
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: ''
}
