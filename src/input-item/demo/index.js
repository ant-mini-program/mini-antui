Page({
  data: {
    value: 'hello world',
    inputFocus: true,
  },
  onAutoFocus() {
    this.setData({
      inputFocus: true,
    });
  },
  onExtraTap() {
    this.setData({
      value: '',
    });
  },
  onItemInput(e) {
    this.setData({
      value: e.detail.value,
    });
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
