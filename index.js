module.exports = (themeConfig, ctx) => {
  const {
    directories = [],
    container = [],
    tag = {},
    comment
    // pwa
  } = themeConfig;

  /** 默认的分页配置 */
  const pagination = {
    // sorter(prev, next) {
    //   const prevTime = new Date(prev.frontmatter.date).getTime()
    //   const nextTime = new Date(next.frontmatter.date).getTime()
    //   return prevTime - nextTime > 0 ? 1 : -1
    // }
  };

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
    ['container', { type: 'tip', defaultTitle: '提示' }],
    ['container', { type: 'warning', defaultTitle: '注意' }],
    ['container', { type: 'danger', defaultTitle: '警告' }],
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
    ['@vuepress/search', { searchMaxSuggestions: 10 }]
  ];

  if(comment){
    plugins.push(['@vssue/vuepress-plugin-vssue', {
      platform: comment.platform || 'github',
      owner: comment.owner,
      repo: comment.repo,
      clientId: comment.clientId,
      clientSecret: comment.clientSecret,
    }])
  }

  // if (pwa) {
  //   plugins.push(['@vuepress/pwa', {
  //     serviceWorker: true,
  //     popupComponent: pwa.popupComponent || 'TheSWUpdatePopup',
  //     updatePopup: {
  //       message: pwa.message || "发现内容有更新",
  //       buttonText: pwa.buttonText || "刷新"
  //     }
  //   }])
  // }

  return { plugins };
}