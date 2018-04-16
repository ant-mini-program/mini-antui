Component({
  props: {
    className: '',
    labelCls: '',
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    password: false,
    placeholder: '',
    placeholderClass: '',
    placeholderStyle: '',
    disabled: false,
    maxlength: 140,
    focus: false,
    onInput: () => {},
    onConfirm: () => {},
    onFocus: () => {},
    onBlur: () => {},
  },
  methods: {
    onBlur(e) {
      this.props.onBlur(e);
    },
    onConfirm(e) {
      this.props.onConfirm(e);
    },
    onFocus(e) {
      this.props.onFocus(e);
    },
    onInput(e) {
      this.props.onInput(e);
    }
  }
});
