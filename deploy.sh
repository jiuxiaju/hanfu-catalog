# GitHub Pages 部署脚本

# 安装依赖
npm install

# 构建站点
npm run build

# 部署到 GitHub Pages
# 这将创建一个 Git 提交并推送到 gh-pages 分支
npx gh-pages -d build -t true