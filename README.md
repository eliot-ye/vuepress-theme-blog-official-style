# vuepress-theme-blog-official-style

这是一个基于 vuepress 官方文档主题风格的blog主题

## 配置

```js
{
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
      pagination:{ // 当前目录文章列表的分页设置
        perPagePosts: 20 // 当前目录文章列表的分页条数
      }
    },
  ],
  navbar: [ // navbar 的设置
    {
      title: "技术", // 显示的文字
      id: "", // 设置当前选项是否选中的判断条件: directories[].id
      path: "" // 路径链接，默认：`/${navbar[].id}/`
    }
  ]
}
```
