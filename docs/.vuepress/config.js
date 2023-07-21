import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({
    // set config here
     navbar: [       {
        text: 'Dev',
        link: '/dev/list.md',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // string - page file path
      '/README.md',
    ],
  }),
}

