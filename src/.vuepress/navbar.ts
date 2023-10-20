import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/unraid/",
    children: [
      {text:"frp",link:"frp/"},
      {text:"gitlab", prefix:"gitlab/",children:[
        {text:"install",link:"gitlab/"}
      ]}
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
