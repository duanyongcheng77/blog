import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      "text": "首页",
      icon: "mdi:home",
      link: "/",
    },
    {
      text: "文章",
      icon: "mdi:books",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "NAS",
      icon: "mdi:nas",
      prefix: "unraid/",
      children: "structure",
    },
  ],
});
