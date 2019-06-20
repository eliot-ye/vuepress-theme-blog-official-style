module.exports = (themeConfig, ctx) => {
  const {
    directories = [],
    container = [],
    tag = {}
  } = themeConfig;

  /** 默认的分页配置 */
  const pagination = { perPagePosts: 100 };

  /** 纳入目录导航栏的目录 */
  const directoriesList = directories.map(item => {
    return {
      id: item.id || item.dirname,
      dirname: item.dirname,
      path: item.path || `/${item.dirname}/`,
      layout: item.layout || "Layout",
      itemLayout: item.itemLayout || "BlogContent",
      pagination: Object.assign({}, pagination, item.pagination)
    }
  });

  /** tag 配置 */
  const tagObj = {
    id: "tag",
    keys: ['tag', 'tags'],
    path: '/tag/',
    layout: 'Tags',
    pagination
  };

  /** 自定义容器 */
  const containerList = [
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/zh/': '提示'
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/zh/': '注意'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/zh/': '警告'
      }
    }],
    ...container
  ];

  const plugins = [
    ['@vuepress/blog', {
      directories: directoriesList,
      frontmatters: [Object.assign({}, tagObj, tag)]
    }],
    ...containerList,
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    ['@vuepress/search',{searchMaxSuggestions: 10}]
  ];

  return { plugins };
}