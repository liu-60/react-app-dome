# 模板使用说明

## react_antd 模板说明

### 1. 打包 dll 文件

```Shell
npm run build:dll
```

### 2. 运行

```Shell
npm start
```

```js
├── common
│   ├── constant.js     // 常量
│   ├── fetch.js        // 请求封装
│   └── utils.js        // 工具
├── config
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.dll.js
│   └── webpack.prod.js
├── env-config.json     // 环境配置
├── src
│   ├── AuthorizedRoute.js
│   ├── app.js
│   ├── components      // 组件
│   │   ├── Icon
│   │   │   ├── index.js
│   │   │   └── index.less
│   │   └── index.js
│   ├── index.js
│   ├── layouts         // 布局
│   │   └── BasicLayout.js
│   ├── services        // api
│   │   └── init.js
│   ├── store
│   │   ├── actions.js
│   │   ├── index.js    // reducers
│   │   └── init.js     // 处理 api 返回数据存 reducers
│   ├── style
│   │   ├── index.less   // 公共 css
│   │   └── theme.less
│   └── views            // 页面
│       ├── Home.js
│       └── home.less
└── tree.text

```
