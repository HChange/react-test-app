# 用于测试 React 功能、特性的项目

## 功能清单

- [ ] 国际化

---

- [ ] 主题切换

---

- [ ] storybook

---

- [ ] 首页白屏

---

- [ ] 升级至 react18

## 问题清单

### git cz 不生效

commitizen init cz-conventional-changelog --save --save-exact

### 设置 git 对大小写感知敏感

git config core.ignorecase false

### 当想给 index.html 注入其他环境变量时

可以 `REACT_APP_*`，或者直接修改 env.js 的 getClientEnvironment 函数

### 给 Window 添加属性

```javascript
declare interface Window {
  IS_GITHUB: 'true' | 'false';
}
```

### windows 全局命令执行不了？ 如 yarn

set-ExecutionPolicy RemoteSigned
