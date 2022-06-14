/* eslint-disable react/no-this-in-sfc */
import { Page } from '@/components';
import React from 'react';

const JsonDownload = () => {
  const download = () => {
    const url = 'https://www.static.hellochange.cn/test/json/asset.json';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}?timestamp=${new Date().getTime()}`, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Cache-Control', 'no-cache');

    // 响应类型
    xhr.responseType = 'blob';
    // 监听onload事件
    xhr.onload = function () {
      if (this.status === 200) {
        const blob = this.response;
        const reader = new FileReader();
        // blob ==> base64
        reader.readAsDataURL(blob);
        reader.onload = function (e) {
          const a = document.createElement('a');
          a.download = 'test.json';
          a.href = e.target?.result as string;
          a.click();
          a.remove();
        };
      }
    };
    // 发送请求
    xhr.send();
  };
  return (
    <Page>
      <button onClick={download}>下载</button>
    </Page>
  );
};

export default JsonDownload;
