# 腾讯云开发部署脚本
# 使用前请先安装 cloudbase cli: npm install -g @cloudbase/cli
# 并登录: cloudbase login

# 构建项目
npm run build

# 部署到腾讯云开发
cloudbase hosting:upload build/ --cloudPath /