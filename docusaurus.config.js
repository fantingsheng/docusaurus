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
          blogSidebarCount: 10
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
          content: 'timfan'
        }
      ],
      image: 'img/spacexcode.png',
      navbar: {
        title: '太空编程',
        logo: {
          alt: '太空编程',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '知识库',
          },
          { to: '/blog', label: '博客', position: 'left' },
          { label: '实战', position: 'right', items: [
            { to: '/snippet', label: '代码片段' },
            { to: '/visitor', label: '统计工具' },
            { to: '/shapedivider', label: '分隔线工具' },
            { to: '/handraw', label: '手绘做图工具' }
          ] },
          { to: '/about', label: '关于', position: 'right' }
        ],
      },
      footer: {
        style: 'dark',
        logo: { src: "/" },
        links: [
          {
            title: '相关站点',
            items: [
              {
                label: '前端开发笔记',
                to: 'https://i-fanr.com/',
              },
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
            title: '友链',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/fantingsheng',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spacexcode, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell']
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [
    { src: 'https://hm.baidu.com/hm.js?ed54759479dfa9517f230a4aa834059c', async: true }
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
    ]
  ]
};

module.exports = config;
