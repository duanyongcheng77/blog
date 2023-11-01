import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "barry的博客",
  description: "barry 的博客演示",

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string | string[] | null,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as string | string[] | null,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});
