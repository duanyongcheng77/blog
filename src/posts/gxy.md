---
icon: ant-design:cloud-server-outlined
date: 2023-12-07 14:09:12
category:
  - server
tag:
  - 云服务器
  - linux
---

# 记录一下自己拿到一个云服务器后需要做的事情 ubuntu

## 1. 更新一下

```bash
apt update
```

## 2. 获取dotfile

```bash
git clone https://github.com/duanyongcheng77/dotfile.git
```

## 3. install fish

```bash
apt-add-repository ppa:fish-shell/release-3
apt update
apt install fish
```

## 4. install rust & lsd & bob

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh #install rust
source "$HOME/.cargo/env" # 临时先加入环境,后续需要增加到config.fish
# install lsd
apt-get install build-essential
cargo install lsd
# install bob, this is a versiom manager for neovim
cargo install --git https://github.com/MordechaiHadad/bob.git
```

## 5. install nvm

如果想要安装在跟目录,需要在跟目录执行
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

## 6. install pip3 & neofetch

```bash
sudo apt install python3-pip neofetch
# link dotfile config, confirm your dotfile path
# if .config is not exist 
cd
mkdir ~/.config
ln -s ~/dotfile/fish ~/.config
ln -s ~/dotfile/neofetch ~/.config
# use fish as default shell
chsh -s (command -s fish)
```

## 7. use root login

云服务器的镜像一般已经安装好了ssh server,如没有的话可以使用 `sudo apt install openssh-server` 安装.

然后就是需要修改配置,支持root 登录和 相关的端口`sudo nvim /etc/ssh/sshd_config`找到以下配置

```config
#LoginGraceTime 2m
#PermitRootLogin prohibit-password
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10
```

修改为:

```config
LoginGraceTime 2m
PermitRootLogin yes
StrictModes yes
#MaxAuthTries 6
#MaxSessions 10
```

- Port是端口

重启 ssh service

```bash
sudo service ssh restart
```
