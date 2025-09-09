# Vercel 部署说明

## 方法1：使用模板（推荐）

### 步骤1：选择模板
1. 在Vercel页面，点击右侧的 **"Vite + React 启动器"** 模板
2. 项目名称输入：`chuanghejuzhen`
3. 点击"创建"

### 步骤2：替换代码
1. 项目创建后，进入项目设置
2. 删除所有默认文件
3. 上传我们的项目文件

## 方法2：创建GitHub仓库（更简单）

### 步骤1：创建GitHub仓库
1. 访问：https://github.com/new
2. 仓库名：`chuanghejuzhen`
3. 选择"Public"
4. 点击"Create repository"

### 步骤2：上传代码
1. 下载GitHub Desktop：https://desktop.github.com/
2. 安装后，克隆仓库到本地
3. 将项目文件复制到仓库文件夹
4. 提交并推送代码

### 步骤3：连接Vercel
1. 回到Vercel页面
2. 点击"导入 Git 存储库"
3. 选择您的GitHub仓库
4. 自动部署

## 方法3：使用Vercel CLI

### 步骤1：安装Vercel CLI
1. 下载Node.js：https://nodejs.org/
2. 安装后，在命令行运行：
   ```bash
   npm install -g vercel
   ```

### 步骤2：部署
1. 在项目文件夹中运行：
   ```bash
   vercel
   ```
2. 按照提示完成部署

## 推荐操作

**最简单的方法**：
1. 先创建GitHub仓库
2. 上传代码到GitHub
3. 在Vercel中导入GitHub仓库
4. 自动部署完成

这样您就可以获得：
- 免费域名
- 自动HTTPS
- 全球CDN
- 自动部署
