---
icon: pen-to-square
date: 2023-10-10
# 你可以自定义封面图片
cover: /assets/images/frpc.png
category:
  - unraid
tag:
  - nas
  - 内网穿透
---

# fpr内网穿透

## 为什么我会需要一个frp

开始在家办公以后,受限与笔记本的性能的性能,需要的另外一个机器上安装mysql,redis,minio等基础的服务.但是这些服务都是在家里的nas上,有时又会有需要外出的情况,所以需要一个内网穿透的工具,frp就是一个不错的选择.

## 使用的环境

1. 国内的服务器又贵带宽又低,所以选择了一个国外的vps,虽然线路不好但是胜在便宜.
2. 客户端安装在unraid下的一个虚拟机上.
3. 服务端安装在国外的vps上.
4. frp地址[github](https://github.com/fatedier/frp).使用的是最新的版本.

文件目录如下:
==frpc.service== ==frps.service== 为服务的启动文件,可能没有需要自己创建.

```tree
frp_0.51.3_linux_386
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
```

## 安装和配置

### 服务端的配置文件如下

需要注意的点:

- 配置token的时候,请使用复杂的密码,不然会被别人盗用.同时在设置的token后面不要加注释.
- **bind_port** frp服务器端的监听端口.客户端会用到
- **dashboard_port** frp管理后台的端口,可以不设置,但是如果设置了,请设置用户名和密码,不然会被别人盗用.
- ==dashboard_user== **dashboard_pwd** frp管理后台的用户名和密码.
- 配置日志目录的时候,记得给拥有权限的目录,避免frp无法写入日志.

::: code-tabs
@tab frps.ini

```ini
[common]
# frp监听的端口，默认是7000，可以改成其他的
bind_port = 7000
# 授权码，请改成更复杂的
token = 123456

# frp管理后台端口，请按自己需求更改
dashboard_port = 7500
# frp管理后台用户名和密码，请改成自己的
dashboard_user = admin
dashboard_pwd = 6CA81C04-593D-43C6-B89C-AB2F869B20A4
enable_prometheus = true

# frp日志配置
log_file = /root/frp/log/frps.log
log_level = info
log_max_days = 3
```

@tab frps.service

```service
[Unit]
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
```

@tab some commons

```bash
# 复制frps到/usr/local/bin目录下
cp frps /usr/local/bin/frps
# 复制配置文件
cp frps.ini /usr/local/etc/frps.ini
# 复制启动文件
cp frps.service /lib/systemd/system/frps.service
```

:::

### 客户端的配置

::: code-tabs
@tab frps.ini

```ini
[common]
server_addr = your remote ip
server_port = 7000
token = your token
```

@tab frpc.service

```service
[Unit]
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
```

@tab some commons

```bash
# 复制frpc到/usr/local/bin目录下
cp frpc /usr/local/bin/frpc
# 复制配置文件
cp frpc.ini /usr/local/etc/frpc.ini
# 复制启动文件
cp frpc.service /lib/systemd/system/frpc.service
```

:::
