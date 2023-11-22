---
icon: skill-icons:git
date: 2023-11-22 14:24:45
category:
  - git
tag: 
  - tools
---

# 开始使用git

## 1. 在使用git前需要先配置好自己的密钥

首先需要检查自己有没有配置好 **user name** & **user email**

`git config user.name` `git config user.email`
如果没有值的话就是没有配置,需要配置一下
`git config --global user.name 'your name'`
`git config --global user.email 'your mail'`

**以上操作完成后就可以生成密钥了**
`ssh-keygen -t rsa -C 'your email'`

注意: name 和emial 需要单引号包裹

``` shell

[root@localhost ~]# ssh-keygen -t rsa       <== 建立密钥对，-t代表类型，有RSA和DSA两种
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):   <==密钥文件默认存放位置，按Enter即可
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase):     <== 输入密钥锁码，或直接按 Enter 留空
Enter same passphrase again:     <== 再输入一遍密钥锁码
Your identification has been saved in /root/.ssh/id_rsa.    <== 生成的私钥
Your public key has been saved in /root/.ssh/id_rsa.pub.    <== 生成的公钥
The key fingerprint is:
SHA256:K1qy928tkk1FUuzQtlZK+poeS67vIgPvHw9lQ+KNuZ4 root@localhost.localdomain
The key's randomart image is:
+---[RSA 2048]----+
|           +.    |
|          o * .  |
|        . .O +   |
|       . *. *    |
|        S =+     |
|    .    =...    |
|    .oo =+o+     |
|     ==o+B*o.    |
|    oo.=EXO.     |
+----[SHA256]-----+

```

之后就可以把生成的公钥`rsa.pub`配置在你的git服务上了.
