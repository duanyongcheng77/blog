import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as p,a as n,b as e,d as l,w as s,e as c}from"./app-003c4313.js";const m={},v=c('<h1 id="fpr内网穿透" tabindex="-1"><a class="header-anchor" href="#fpr内网穿透" aria-hidden="true">#</a> fpr内网穿透</h1><h2 id="为什么我会需要一个frp" tabindex="-1"><a class="header-anchor" href="#为什么我会需要一个frp" aria-hidden="true">#</a> 为什么我会需要一个frp</h2><p>开始在家办公以后,受限与笔记本的性能的性能,需要的另外一个机器上安装mysql,redis,minio等基础的服务.但是这些服务都是在家里的nas上,有时又会有需要外出的情况,所以需要一个内网穿透的工具,frp就是一个不错的选择.</p><h2 id="使用的环境" tabindex="-1"><a class="header-anchor" href="#使用的环境" aria-hidden="true">#</a> 使用的环境</h2>',4),b=n("li",null,"国内的服务器又贵带宽又低,所以选择了一个国外的vps,虽然线路不好但是胜在便宜.",-1),f=n("li",null,"客户端安装在unraid下的一个虚拟机上.",-1),k=n("li",null,"服务端安装在国外的vps上.",-1),h={href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"},_=c(`<p>文件目录如下:<br><mark>frpc.service</mark> <mark>frps.service</mark> 为服务的启动文件,可能没有需要自己创建.</p><div class="language-tree line-numbers-mode" data-ext="tree"><pre class="language-tree"><code>frp_0.51.3_linux_386
├── LICENSE
├── commond.sh
├── frpc
├── frpc.ini
├── frpc.service
├── frpc_full.ini
├── frps
├── frps.ini
├── frps.service
└── frps_full.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装和配置" tabindex="-1"><a class="header-anchor" href="#安装和配置" aria-hidden="true">#</a> 安装和配置</h2><h3 id="服务端的配置文件如下" tabindex="-1"><a class="header-anchor" href="#服务端的配置文件如下" aria-hidden="true">#</a> 服务端的配置文件如下</h3><p>需要注意的点:</p><ul><li>配置token的时候,请使用复杂的密码,不然会被别人盗用.同时在设置的token后面不要加注释.</li><li><strong>bind_port</strong> frp服务器端的监听端口.客户端会用到</li><li><strong>dashboard_port</strong> frp管理后台的端口,可以不设置,但是如果设置了,请设置用户名和密码,不然会被别人盗用.</li><li><mark>dashboard_user</mark> <strong>dashboard_pwd</strong> frp管理后台的用户名和密码.</li><li>配置日志目录的时候,记得给拥有权限的目录,避免frp无法写入日志.</li></ul>`,6),g=n("div",{class:"language-ini line-numbers-mode","data-ext":"ini"},[n("pre",{class:"language-ini"},[n("code",null,[n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"common"),n("span",{class:"token punctuation"},"]")]),e(`
`),n("span",{class:"token comment"},"# frp监听的端口，默认是7000，可以改成其他的"),e(`
`),n("span",{class:"token key attr-name"},"bind_port"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"7000"),e(`
`),n("span",{class:"token comment"},"# 授权码，请改成更复杂的"),e(`
`),n("span",{class:"token key attr-name"},"token"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"123456"),e(`

`),n("span",{class:"token comment"},"# frp管理后台端口，请按自己需求更改"),e(`
`),n("span",{class:"token key attr-name"},"dashboard_port"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"7500"),e(`
`),n("span",{class:"token comment"},"# frp管理后台用户名和密码，请改成自己的"),e(`
`),n("span",{class:"token key attr-name"},"dashboard_user"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"admin"),e(`
`),n("span",{class:"token key attr-name"},"dashboard_pwd"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"pwd"),e(`
`),n("span",{class:"token key attr-name"},"enable_prometheus"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"true"),e(`

`),n("span",{class:"token comment"},"# frp日志配置"),e(`
`),n("span",{class:"token key attr-name"},"log_file"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"/root/frp/log/frps.log"),e(`
`),n("span",{class:"token key attr-name"},"log_level"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"info"),e(`
`),n("span",{class:"token key attr-name"},"log_max_days"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"3"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-service line-numbers-mode","data-ext":"service"},[n("pre",{class:"language-service"},[n("code",null,`[Unit]
Description=frps server daemon
Documentation=https://github.com/fatedier/frp
After=network-online.target

[Service]
ExecStart=/usr/local/bin/frps -c /usr/local/etc/frps.ini
Type=simple
User=nobody
Group=nogroup
WorkingDirectory=/tmp
Restart=on-failure
RestartSec=60s

[Install]
WantedBy=multi-user.target
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 复制frps到/usr/local/bin目录下"),e(`
`),n("span",{class:"token function"},"cp"),e(` frps /usr/local/bin/frps
`),n("span",{class:"token comment"},"# 复制配置文件"),e(`
`),n("span",{class:"token function"},"cp"),e(` frps.ini /usr/local/etc/frps.ini
`),n("span",{class:"token comment"},"# 复制启动文件"),e(`
`),n("span",{class:"token function"},"cp"),e(` frps.service /lib/systemd/system/frps.service
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h3",{id:"客户端的配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#客户端的配置","aria-hidden":"true"},"#"),e(" 客户端的配置")],-1),S=n("div",{class:"language-ini line-numbers-mode","data-ext":"ini"},[n("pre",{class:"language-ini"},[n("code",null,[n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"common"),n("span",{class:"token punctuation"},"]")]),e(`
`),n("span",{class:"token key attr-name"},"server_addr"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"your remote ip"),e(`
`),n("span",{class:"token key attr-name"},"server_port"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"7000"),e(`
`),n("span",{class:"token key attr-name"},"token"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token value attr-value"},"your token"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-service line-numbers-mode","data-ext":"service"},[n("pre",{class:"language-service"},[n("code",null,`[Unit]
Description=frpc server daemon
Documentation=https://github.com/fatedier/frp
After=network-online.target

[Service]
ExecStart=/usr/local/bin/frpc -c /usr/local/etc/frpc.ini
Type=simple
User=nobody
Group=nogroup
WorkingDirectory=/tmp
Restart=on-failure
RestartSec=60s

[Install]
WantedBy=multi-user.target
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 复制frpc到/usr/local/bin目录下"),e(`
`),n("span",{class:"token function"},"cp"),e(` frpc /usr/local/bin/frpc
`),n("span",{class:"token comment"},"# 复制配置文件"),e(`
`),n("span",{class:"token function"},"cp"),e(` frpc.ini /usr/local/etc/frpc.ini
`),n("span",{class:"token comment"},"# 复制启动文件"),e(`
`),n("span",{class:"token function"},"cp"),e(` frpc.service /lib/systemd/system/frpc.service
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function D(B,C){const o=r("ExternalLinkIcon"),t=r("CodeTabs");return d(),p("div",null,[v,n("ol",null,[b,f,k,n("li",null,[e("frp地址"),n("a",h,[e("github"),l(o)]),e(".使用的是最新的版本.")])]),_,l(t,{id:"74",data:[{id:"frps.ini"},{id:"frps.service"},{id:"some commons"}]},{title0:s(({value:a,isActive:i})=>[e("frps.ini")]),title1:s(({value:a,isActive:i})=>[e("frps.service")]),title2:s(({value:a,isActive:i})=>[e("some commons")]),tab0:s(({value:a,isActive:i})=>[g]),tab1:s(({value:a,isActive:i})=>[y]),tab2:s(({value:a,isActive:i})=>[x]),_:1},8,["data"]),A,l(t,{id:"88",data:[{id:"frps.ini"},{id:"frpc.service"},{id:"some commons"}]},{title0:s(({value:a,isActive:i})=>[e("frps.ini")]),title1:s(({value:a,isActive:i})=>[e("frpc.service")]),title2:s(({value:a,isActive:i})=>[e("some commons")]),tab0:s(({value:a,isActive:i})=>[S]),tab1:s(({value:a,isActive:i})=>[w]),tab2:s(({value:a,isActive:i})=>[E]),_:1},8,["data"])])}const T=u(m,[["render",D],["__file","frp.html.vue"]]);export{T as default};
