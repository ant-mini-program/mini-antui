Page({
  data: {
    value: '200',
  },
  onInputClear() {
    this.setData({
      value: '',
    });
  },
  onInputSubmit() {
    my.alert({
      content: 'submit',
    });
  },
  onInput(value) {
    this.setData({
      value,
    });
  },
});
