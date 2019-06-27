# vuepress-theme-blog-official-style

这是一个基于 vuepress 官方文档主题风格的 blog 主题，暂不考虑多语言

## 主题示例

[https://eliot-ye.gitee.io/](https://eliot-ye.gitee.io/)

## 下载

```bash
npm i git://git@github.com/eliot-ye/vuepress-theme-blog-official-style.git -S
# or
npm i https://github.com/eliot-ye/vuepress-theme-blog-official-style.git -S
```

## 配置

```js
module.exports = {
  theme: "blog-official-style",
  themeConfig: {
    about: { // 主页侧边关于栏的配置
      portrait: "", // 头像
      msgList: [ // 信息
        {
          img: "", // 显示的图片，可选，至少三选一
          icon: "", // 显示的图片，接收 class name，可选，至少三选一
          text: "GitHub", //显示的文字，可选，至少三选一
          path: "https://github.com/eliot-ye" //链接地址
        }
      ]
    },
    directories: [ // 需要关联的目录
      {
        dirname: "", // 文件夹名称，必须
        path: "", //当前目录文章列表的路径，默认：`/${dirname}/`
        id: "", // 当前目录的id，默认：dirname
        layout: "", // 当前目录文章列表的布局组件，默认："Layout"
        itemLayout: "", // 当前目录文章的布局组件，默认："BlogContent"
        pagination:{} // 当前目录文章列表的分页设置
      },
    ],
    navbar: [ // navbar 的设置
      {
        title: "", // 显示的文字
        // 设置当前选项是否选中的判断条件，必填，判断条件默认: navbar[].id === directories[].id
        // 如果 navbar[].id === navbar[].path，判断条件为：navbar.path === $route.path
        id: "",
        path: "" // 路径链接，默认：`/${navbar[].id}/`
      }
    ],
    paginationText:{ // 分页按钮
      prevText: "", // 上一页的文字显示
      nextText: "" // 下一页的文字显示
    },
    comment:{ // 如果没有此字段，表示不使用评论系统
      platform: 'github', // 默认 github
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET'
    }
  }
}
```

## 评论系统

详见 [vssue](https://vssue.js.org/zh/guide/vuepress.html)
