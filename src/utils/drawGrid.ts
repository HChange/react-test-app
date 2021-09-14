/**
 * @description 网格绘画函数
 * @param canvas HTMLCanvasElement
 * @param color 线条颜色
 * @param stepx 横坐标间隔
 * @param stepy 纵坐标间隔
 * @param lineWidth 线条宽度
 */
interface Params {
  canvas: HTMLCanvasElement;
  color: any;
  stepx: number;
  stepy: number;
  lineWidth?: number;
}
export const drawGrid = (params: Params) => {
  const { canvas, color, stepx, stepy, lineWidth = 0.15 } = params;
  const context = canvas.getContext('2d')!;
  context.save();
  context.fillStyle = 'transparent';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  context.lineWidth = lineWidth;
  context.strokeStyle = color;
  if (stepx > 0) {
    for (let i = stepx; i < context.canvas.width; i += stepx) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, context.canvas.height);
      context.closePath();
      context.stroke();
    }
  }
  if (stepy > 0) {
    for (let j = stepy; j < context.canvas.height; j += stepy) {
      context.beginPath();
      context.moveTo(0, j);
      context.lineTo(context.canvas.width, j);
      context.closePath();
      context.stroke();
    }
  }
  context.restore();
};
