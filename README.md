# React SSR 单页源码搭建框架简易版

## 目录主要文件、文件夹说明

```bash
├── backend # 模拟服务端代码
├── server # SSR 服务端部分代码
├── src # 前端代码
│   ├── entry-client.js # 前端入口文件（该文件只在前端执行）
│   ├── entry-server.js # 服务端入口文件（该文件只在服务端执行）
│   ├── Solution.tsx # 解析入参，根据不同的入参，组合不同的组件，生成最终的页面内容（该文件在前端和服务端都会执行）
│   ├── App.tsx # 根组件（该文件在前端和服务端都会执行）
│   ├── schema-map.ts # schema 的 name 和组件的映射关系
└── └── schema.json # 物料数据信息配置，当有运营平台时，运营平台会读取该文件提供数据配置能力
```

## 运行步骤

1. 启动服务端

```bash
pnpm run server
```

2. 启动前端

```bash
pnpm run dev
```
## 观察效果
可以在控制台网络中，调低网络速度，并刷新页面，观察页面的加载效果。

观察流式效果时，需要注意客户端和服务端的缓存，可以通过改变 `cacheFetch` 的值来避免使用缓存。

## 其余说明
本项目是一个简易版的 React SSR 单页源码搭建框架，因此暂不支持多路由 SSR。

本项目的 SSR 实现了两种方式，其中 `main` 和 `ssr-react-streaming` 分支是使用 `react-dom/server` 的 `renderToPipeableStream` 方法实现的流式渲染，这两个分支的代码是相同的。`ssr-react` 分支是使用 `react-dom/server` 的 `renderToString` 方法实现的非流式渲染。此外，本项目没有 RSC 的实现。
