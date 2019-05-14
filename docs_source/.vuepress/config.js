module.exports = ctx => ({
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
        lastUpdated: 'Last Updated'
      },
      '/de/': {
        label: 'Deutsch',
        selectText: '🌐 Sprachen',
        editLinkText: 'Ändere diese Seite auf GitHub',
        lastUpdated: 'Zuletzt aktualisiert'
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true]
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/de.js',
  ]
})
