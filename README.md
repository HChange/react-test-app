# 此项目用于测试 React 功能、特性

## 功能清单

- [x] **升级至 react18**

> <https://zh-hans.reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html>

1、更新依赖

```bash
yarn add react react-dom
yarn add @types/react-dom @types/react -D
```

2、使用新 API 挂载 root

```tsx
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
```

3、修改代码

```txt
- React.FC中将移除默认的`children`属性，如果严格模式下会报错
React.FC => React.FC<{ children: React.ReactNode }>
```

- [x] **升级 react-router6**

> <https://juejin.cn/post/7052933770260938783>

1、移除`react-router-config`使用`useRoutes(routes)`代替

2、`<NavLink/>` 的 `activeClass`被移除了使用`classNames={(isActive:boolean)=>string}` 代替

3、`routes` 数据格式变动，`conponent(React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType | undefined)` =>`element(ReactNode)`

4、`<Redirect />` => `<Navigate/>`

5、子路由页面渲染`<Outlet />`

6、页面懒加载，代码分割

```tsx
const Test = lazy(() => import('@/pages/test/index'));

{
 path:'/test',
 element:<Suspense fallback={<>loading</>}><Test/></Suspense>
}
```

- [x] **国际化**

1、依赖安装

```bash
# npm
yarn add react-i18next i18next -S
# 如果需要检测当前浏览器的语言或者从服务器获取配置资源可以安装下面依赖
yarn add i18next-browser-languagedetector -S
```

2、配置

```tsx
// locales.ts
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import i18n from 'i18next'; // i18n 的主要模块
import { initReactI18next } from 'react-i18next';
import resources from '../locales';

i18n
  .use(Backend) // 检测当前浏览器的语言或者从服务器获取配置资源,不过也没有什么用处
  .use(LanguageDetector) //嗅探当前浏览器语言
  .use(initReactI18next) //init i18next
  .init({
    //引入资源文件
    resources,
    //选择默认语言，选择内容为上述配置中的key，即en/zh
    fallbackLng: 'zh',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;

// index.tsx
// 引入
import './config/locales';
```

- [ ] 主题切换

- [ ] storybook

- [ ] 首页白屏

- [ ] 登录界面

- [x] 升级至 react18

## 问题清单

**git cz 不生效**

```bash
commitizen init cz-conventional-changelog --save --save-exact
```

**设置 git 对大小写感知敏感**

```bash
git config core.ignorecase false
```

**当想给 index.html 注入其他环境变量时**

可以 `REACT_APP_*`，或者直接修改 env.js 的 getClientEnvironment 函数

**给 Window 添加属性**

```javascript
declare interface Window {
  IS_GITHUB: 'true' | 'false';
}
```

**windows 全局命令执行不了？ 如 yarn**

```bash
set-ExecutionPolicy RemoteSigned
```
