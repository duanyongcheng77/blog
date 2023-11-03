import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      "text": "首页",
      icon: "mdi:home",
      link: "/",
    },
    {
      text: "NAS",
      icon: "mdi:nas",
      prefix: "unraid/",
      children: "structure",
    },
    {
      text: "工具",
      icon: "mdi:tools",
      prefix: "tools/",
      children: "structure",
    },
    "intro",
    // "slides",
  ],
});
