# 模板使用说明

## react_antd 模板说明

### 1. 打包

```Shell
npm run build
```

### 2. 运行

```Shell
npm start
```

```js
├── common
│   ├── constant.js     // 常量
│   ├── fetch.js        // 请求 fetch 封装
│   ├── http.js         // 请求 axios 封装 有处理mock的地方
│   └── utils.js        // 工具
├── docker
│   ├── **.yml          // 镜像文件
│   └── nginx.conf      // 单页配置文件
├── config
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.dll.js
│   └── webpack.prod.js
├── env-config.json     // 环境配置
├── src
│   ├── app.js
│   ├── components      // 组件
│   │   ├── Icon
│   │   │   ├── index.js
│   │   │   └── index.less
│   │   └── index.js
│   ├── index.js
│   ├── layouts          // 布局
│   │   └── BasicLayout.js
│   ├── services         // api
│   │   └── init.js
│   ├── store
│   │   ├── actions.js
│   │   ├── index.js     // reducers
│   │   └── init.js      // 处理 api 返回数据存 reducers
│   ├── style
│   │   ├── index.less   // 公共 css
│   │   └── theme.less
│   └── views            // 页面
│       ├── Home.js
│       └── home.less
└── REMADME.md  

```
