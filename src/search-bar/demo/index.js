Page({
  data: {
    value: '美食',
  },
  handleInput(value) {
    console.log(value, 'onInput');
    this.setData({
      value,
    });
  },
  handleClear(value) {
    console.log(value, 'onClear');
    this.setData({
      value: '',
    });
  },
  handleFocus() {
    console.log('onFocus');
  },
  handleBlur() {
    console.log('onBlur');
  },
  handleCancel() {
    this.setData({
      value: '',
    });
    console.log('onCancel');
  },
  handleSubmit(value) {
    my.alert({
      content: value,
    });
    console.log(value, 'onSubmit');
  },
});
