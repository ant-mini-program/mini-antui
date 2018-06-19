Page({
  data: {
    value: '200',
  },
  onInputClear() {
    this.setData({
      value: '',
    });
  },
  onInputConfirm() {
    my.alert({
      content: 'confirmed',
    });
  },
  onInput(value) {
    this.setData({
      value,
    });
  },
  onButtonClick() {
    my.alert({
      content: 'button clicked',
    });
  },
});
