# 汉服分类系统

一个基于 Docusaurus 的汉服分类展示系统，支持多维度浏览和精细化分类。

## 项目结构

- `docs/` - 存放所有文档内容
  - `definitions/` - 分类规范和定义
  - `dynasties/` - 按朝代分类的汉服
  - `categories/` - 按形制分类的汉服

## 更新内容

### 本地更新
1. 编辑 Markdown 文件
2. 运行 `npm start` 预览
3. 提交更改到 GitHub

### 在线更新
- 点击页面上的"编辑此页"链接，直接在 GitHub 上编辑 Markdown 文件
- 保存后会自动创建 Pull Request

## 部署

### 自动部署
- 推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages
- 工作流配置在 `.github/workflows/deploy.yml`

### 手动部署
运行以下命令：
```bash
npm run build
npm run deploy
```

## 配置

- 项目配置：`docusaurus.config.ts`
- 侧边栏配置：`sidebars.ts`
- 主题样式：`src/css/custom.css`

## 技术栈

- [Docusaurus](https://docusaurus.io/) - 静态站点生成器
- [React](https://reactjs.org/) - UI 库
- [GitHub Pages](https://pages.github.com/) - 静态网站托管
- [GitHub Actions](https://github.com/features/actions) - CI/CD