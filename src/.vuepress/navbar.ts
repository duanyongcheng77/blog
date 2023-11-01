import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "博客主页",
    link: "/",
    icon:"mdi:home"
  },
  {
    text: "文章",
    link: "/article/",
    icon: "fa6-solid:pen-to-square",
  },
  {
    text: "工具",
    prefix: "/unraid/",
    icon: "mdi:tools",
    children: [
      {text:"frp",link:"frp/"},
      {text:"gitlab", prefix:"gitlab/",children:[
        {text:"install",link:"gitlab/"}
      ]}
    ],
  },
  {
    text: "文档",
    icon: "mdi:books",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
