const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  base: '/sublime-distractionless/',
  dest: 'docs',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'distractionless',
      description: ''
    },
    '/de/': {
      lang: 'de-DE',
      title: 'distractionless',
      description: ''
    }
  },
  themeConfig: {
    repo: 'jrappen/sublime-distractionless',
    editLinks: true,
    docsDir: 'docs_source',
    locales: {
      '/': {
        label: 'English',
        selectText: '🌐 Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: 'auto',
        sidebarDepth: 2
      },
      '/de/': {
        label: 'Deutsch',
        selectText: '🌐 Sprachen',
        editLinkText: 'Ändere diese Seite auf GitHub',
        lastUpdated: 'Zuletzt aktualisiert',
        sidebar: 'auto',
        sidebarDepth: 2
      }
    }
  },
  plugins: [
    ['@vuepress/active-header-links'],
    ['@vuepress/back-to-top'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom']
  ]
})
