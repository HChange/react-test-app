export interface PageProps {
  title?: string;
  /**
   * 是否需要背景线条,出于性能考虑，内容高度 > 8000px的模块自动失效
   * @default true
   */
  backLine?: false | { color?: any; stepx?: number; stepy?: number; lineWidth?: number };
}
