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
