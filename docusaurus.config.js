// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '太空编程',
  tagline: '分享硬核的前端编程知识。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://spacexcode.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fan Tingsheng', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: '博客',
          blogDescription: '前端开发知识总结分享',
          blogSidebarTitle: '最近文章',
          showReadingTime: true,
          postsPerPage: 8,
          blogSidebarCount: 15
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: '太空编程, 前端, React, Vue, 教程, 案例, 学习路径, 动态演示'
        },
        {
          name: 'author',
          content: 'Timfan'
        }
      ],
      image: 'img/share.png',
      navbar: {
        title: '太空编程',
        logo: {
          alt: '太空编程',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'knSidebar',
            position: 'left',
            label: '知识库'
          },
          {
            type: 'docSidebar',
            sidebarId: 'snipSidebar',
            position: 'left',
            label: '代码片段'
          },
          {
            label: '专题',
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'topicSidebar'
          },
          { to: '/blog', label: '博客', position: 'left' },
          { label: '实战', position: 'right', items: [
            { to: '/visitor', label: '统计工具' },
            { to: '/shapedivider', label: '分隔线工具' },
            { to: '/handraw', label: '手绘做图工具' },
            { to: '/codeimage', label: '代码图片生成' },
            { to: '/lifebalence', label: '高效的生物钟' }
          ] },
          { to: '/about', label: '关于', position: 'right' }
        ],
      },
      footer: {
        style: 'dark',
        logo: { src: "/" },
        links: [
          {
            title: '其它站点',
            items: [
              {
                label: '前端开发笔记',
                to: 'https://i-fanr.com/',
              },
              {
                label: '个人主页',
                to: 'https://blog.i-fanr.com/'
              },
              {
                label: '悦己工作室',
                to: 'http://yugere.com'
              }
            ],
          },
          {
            title: '作品集',
            items: [
              {
                label: '站点统计工具',
                to: '/visitor',
              },
              {
                label: '优美的分隔线',
                to: '/shapedivider',
              },
              {
                label: '手绘白板工具',
                to: '/handraw',
              },
              {
                label: '代码图片',
                to: '/codeimage',
              },
              {
                label: '城市印象',
                to: '/photo'
              }
            ],
          },
          {
            title: '知识平台',
            items: [
              {
                label: '简书',
                href: 'https://www.jianshu.com/u/0d4441e81795',
              },
              {
                label: '知乎',
                href: 'https://www.zhihu.com/people/timfan',
              },
              {
                label: '掘金',
                href: 'https://juejin.cn/user/1372604177862088',
              },
              {
                label: '开发者头条',
                href: 'https://toutiao.io/u/578387',
              },
              {
                label: 'CSDN',
                href: 'https://blog.csdn.net/u013919171',
              },
            ],
          },
          {
            title: '常用技术',
            items: [
              {
                label: 'Vue',
                href: 'https://cn.vuejs.org/',
              },
              {
                label: 'React',
                href: 'https://zh-hans.react.dev/',
              },
              {
                label: 'Svelte',
                href: 'https://www.svelte.cn/'
              },
              {
                label: 'Next.js',
                href: 'https://nextjs.org/'
              },
              {
                label: 'Nuxt',
                href: 'https://nuxt.com/'
              }
            ],
          },
          {
            title: '友链',
            items: [
              {
                label: 'Raycast',
                href: 'https://www.raycast.com/'
              },
              {
                label: 'Alan',
                href: 'https://www.alanwang.site/'
              },
              {
                label: 'Macin',
                href: 'https://www.macin.org/'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spacexcode Owner. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
        additionalLanguages: ['powershell']
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      mermaid: {
        theme: { light: 'default', dark: 'dark' },
      }
    }),
  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true
  },
  scripts: [
    { src: 'https://hm.baidu.com/hm.js?ed54759479dfa9517f230a4aa834059c', async: true },
    { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1398727179052429', async: true }
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 860,
        min: 300,
        steps: 3,
        disableInDev: false
      }
    ],
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en', 'zh'],
        indexBaseUrl: true
      }
    ],
    'docusaurus-plugin-sass'
  ]
};

module.exports = config;
