# 用于测试 React 功能、特性的项目

## 问题清单

### git cz 不生效

commitizen init cz-conventional-changelog --save --save-exact

### 设置 git 对大小写感知敏感

git config core.ignorecase false

### 当想给 index.html 注入其他环境变量时

可以`REACT_APP_* `，或者直接修改 env.js 的 getClientEnvironment 函数

### 给 Window 添加属性

```javascript
declare interface Window {
  IS_GITHUB: 'true' | 'false';
}
```
