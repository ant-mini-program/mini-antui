Page({
  data: {
    inputFocus: true,
  },
  onAutoFocus() {
    this.setData({
      inputFocus: true,
    });
  },
  onExtraTap(e) {
    my.showToast({
      content: 'dada',
    });
  },
  onItemInput(e) {
    console.log(e, 'onInput');
  },
  onItemFocus(e) {
    console.log(e, 'onFocus');
    this.setData({
      inputFocus: false,
    });
  },
  onItemBlur(e) {
    console.log(e, 'onBlur');
  },
  onItemConfirm(e) {
    console.log(e, 'onConfirm');
  },
});
