## Vue3 + TypeScript + Vite

[![Vite](https://img.shields.io/badge/Vite-2.9.5-blue.svg?style=flat-square)](https://cn.vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.5.5-blue.svg?style=flat-square)](https://www.typescriptlang.org/zh/)
[![Vue](https://img.shields.io/badge/Vue-3.2.45-blue.svg?style=flat-square)](https://cn.vuejs.org/)
[![Echarts](https://img.shields.io/badge/Echarts-5.2.2-blue.svg?style=flat-square)](https://echarts.apache.org/zh/index.html)
[![Pinia](https://img.shields.io/badge/Pinia-2.0.11-blue.svg?style=flat-square)](https://github.com/vuejs/pinia)
[![Element-plus](https://img.shields.io/badge/ElementPlus-2.2.25-blue.svg?style=flat-square)](https://element-plus.org/zh-CN/#/zh-CN)

[//]: # (>### A template of Vite-ts-vue3 [Demo]&#40;https://10.70.5.169&#41;)
>### A template of Vue3 + TypeScript + Vite [Demo](https://github.com/jesseying/Vite)

## 开始
首先安装 Node.js **[v14.19.1](https://nodejs.org/en/blog/release/v14.19.1/)** 或以上。

### Windows
```bash
pnpm install
# serve with hot reload at localhost:1818
pnpm run dev
# build
pnpm run build
```

## 系统目录
~~~
nsiForum
├── public    // 系统资源目录
├── src       // 主代码目录
│    └── api         // 接口目录 路由和类型控制
│    └── assets      // 静态资源存放目录
│    └── components      // 全局组件目录该路径下的组件会被全局注册
│    └── pages      // 视图层目录
│    └── router      // 页面路由，其中static.ts可以做动态路由
│    └── store      // 状态管理，pinia相关设置
│    └── styles      // styles设置，也可以设置全局共用样式（如loading.scss）
│    └── utils      // 全局工具方法设置
│    └── App.vue      // 视图层主入口
│    └── auto-imports.d.ts      // 全局生命周期设置，可以直接调
│    └── components.d.ts      // 该文件是运行时生成的，提供了全局的组件接口
│    └── main.ts      // 主配置，全局插件等
├── .env.production       // 生产环境配置
├── .env.development      // 开发环境
├── .editorconfig      // 代码样式设置
├── .eslintrc.cjs      // ESList配置
├── .prettierrc      // ESList配置
├── .eslintrc-auto-import.json      // 全局方法配置
├── .gitignore      // git配置
├── env.d.ts      // 环境配置
├── index.html      // 用户主入口
├── tsconfig.json      // ts项目编译配置
├── package.json      // 项目插件配置
~~~
---
