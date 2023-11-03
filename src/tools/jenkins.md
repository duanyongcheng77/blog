---
icon: devicon:jenkins
date: 2023-10-10
# 你可以自定义封面图片
# cover: /assets/images/frpc.png
category:
  - gitlab
tag:
  - tools
  - 技术
  - 持续集成
---

# ubuntu上使用jenkins持续集成部署

## 1. 安装jenkins LTS

[installInUbuntu](https://www.jenkins.io/doc/book/installing/#debianubuntu)

>With the release of Debian 12, OpenJDK 11 is no longer included. It has been replaced with OpenJDK 17, which is reflected in the instructions below.

### 1. 首先需要安装openJDK11

```bash
sudo apt-get install openjdk-11-jdk
```

### 2. 查看java版本

```bash
java -version
openjdk version "11.0.20.1" 2023-08-24
OpenJDK Runtime Environment (build 11.0.20.1+1-post-Ubuntu-0ubuntu120.04)
OpenJDK 64-Bit Server VM (build 11.0.20.1+1-post-Ubuntu-0ubuntu120.04, mixed mode, sharing)
```

### 3. 安装jenkins

```bash
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
```

### 4. 查看jenkins的启动脚本,配置环境变量

```bash
systemctl cat jenkins
systemctl edit jenkins
```

jenkins默认的端口为8080,如果端口被占用了,会启动失败,可以通过修改配置文件来修改端口
run `systemctl edit jenkins`

```bash
[Service]
Environment="JENKINS_PORT=8081"
```

jenkins的管理员密码默认生成在服务器的`/var/lib/jenkins/secrets/initialAdminPassword`文件中,可以通过`cat /var/lib/jenkins/secrets/initialAdminPassword`查看

![登录以后会安装必要的插件](</assets/images/jenkins-install.png>)

![create a root user](</assets/images/jenkins-create-user.png>)

### 5. jenkins的配置job

配置报错

```jenkinsScript
pipeline {
    agent any
    stages {
        stage('Git Pull') {
            steps {
                sh '''cd /root/blog
                    git pull'''
            }
        }
        stage('Build') {
            steps {
                sh '''cd /root/blog
                    npm run docs:build
                    '''
            }
        }
    }
}

```

```log
/var/lib/jenkins/workspace/blogetmp/durable-0dood3ab/script.sh: 1: cd: can't cd to /root/blog
```
