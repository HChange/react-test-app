export const mockRequest = (id?: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randNum = Math.random() * 10;
      if (randNum > 0) {
        resolve({
          data: [
            {
              name: 'change',
              age: 23,
            },
            {
              name: 'ad',
              age: '22',
            },
          ],
          code: 'Success',
        });
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          code: 'Failed',
          msg: '请求失败！',
          data: [],
        });
      }
    }, 3000);
  });
};
