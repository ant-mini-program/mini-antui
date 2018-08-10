Page({
  onFaceStatusChange(data, context) {
    console.log('data', data);
    return new Promise((resolve, reject) => {
      context.doLeftFaceCheck().then(() => {
        context.doRightFaceCheck().then(() => {
          resolve();
        }).catch(() => {
          reject();
        });
      }).catch(() => {
        reject();
      });
    });
  },
  onFail(error) {
    console.log('error', error);
  },
  onSuccessBtnTap() {
    my.alert({
      content: 'success',
    });
  },
});
