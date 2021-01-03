module.exports = {
  title: 'AutoMapper TypeScript',
  tagline: 'An object-object mapping solution by convention in TypeScript',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'nartc', // Usually your GitHub org/user name.
  projectName: 'mapper', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'AutoMapper TypeScript',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction/what-why',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'doc',
          position: 'left',
          label: 'API',
          docId: 'api/create-mapper',
        },
        {
          href: 'https://github.com/nartc/mapper',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/getting-started/installation',
            },
            {
              label: 'What and why?',
              to: 'docs/getting-started/introduce-to-automapper',
            },
            {
              label: 'NestJS',
              to: 'docs/nestjs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/automapper',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nartc/mapper',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nartc1410',
            },
            {
              label: 'Blog',
              href: 'https://nartc.me',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @automapper, Inc. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['csharp'],
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    hideableSidebar: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
