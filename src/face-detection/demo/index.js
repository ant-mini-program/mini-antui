Page({
  onFaceStatusChange(data) {
    return new Promise((resolve) => {
      // do something
      console.log(data);
      resolve();
    });
  },

  onFail(error) {
    console.log('error', error);
  },
});
