Page({
  onFaceStatusChange(data, context) {
    return new Promise(async (resolve) => {
      console.log('data', data);
      const leftResult = await context.doLeftFaceCheck();
      const rightResult = await context.doRightFaceCheck();
      // 左右脸都检测一遍
      if (leftResult && rightResult) {
        resolve();
      }
    });
  },

  onFail(error) {
    console.log('error', error);
  },
});
