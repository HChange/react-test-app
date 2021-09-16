// 匹配 ``` ```之间的内容 @ safair不支持
// export const reg = /(?<=```)([\w\W]*?)(?=```)/;

export const reg = /^[\w\W]*?```([\w\W]*?)```[\w\W]*$/;
