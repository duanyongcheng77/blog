import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "博客主页",
    link: "/",
    icon: "mdi:home"
  },
  {
    text: "全部文章",
    link: "/article/",
    icon: "fa6-solid:pen-to-square",
  },
  {
    text: "posts",
    prefix: "/posts/",
    icon: "gridicons:posts",
    children: [],
  },
  {
    text: "tools",
    prefix: "/tools/",
    icon: "mdi:tools",
    children: [
      { text: "frp", link: "frp/" },
      {
        text: "gitlab", link: "gitlab/",
      },
      {text: "jenkins", link: "jenkins/"},
    ],
  },
  {
    text: "文档",
    icon: "mdi:books",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
