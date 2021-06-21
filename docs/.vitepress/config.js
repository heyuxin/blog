module.exports = {
  lang: 'zh-cn',
  title: '何裕新的记录',
  description: '何裕新的记录',

  themeConfig: {
    repo: 'heyuxin/blog',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [{ text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' }],

    sidebar: {
      '/guide/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: '个人博客',
      children: [
        { text: 'html', link: '/guide/html' },
        { text: 'css', link: '/guide/css' },
        { text: 'cli', link: '/guide/cli' },
        { text: 'sql', link: '/guide/sql' },
        { text: 'resume', link: '/guide/resume' }
      ]
    }
  ]
}
