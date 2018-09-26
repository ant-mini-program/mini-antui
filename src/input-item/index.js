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
    clear: false, // 是否带清除功能
    mode: 'input', // 模式，分为1.input表示输入框 2.select表示选择
    onInput: () => {},
    onConfirm: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClear: () => {},
    onSelect: () => {},
  },
  didMount() {
    this.dataset = {};
    for (const key in this.props) {
      if ((/data-/gi).test(key)) {
        this.dataset[key.replace(/data-/gi, '')] = this.props[key];
      }
    }
  },
  methods: {
    fmtEvent(e) {
      return Object.assign({}, e, {
        currentTarget: { dataset: this.dataset },
        target: { dataset: this.dataset, targetDataset: this.dataset },
      });
    },
    onBlur(e) {
      const event = this.fmtEvent(e);
      this.props.onBlur(event);
    },
    onConfirm(e) {
      const event = this.fmtEvent(e);
      this.props.onConfirm(event);
    },
    onFocus(e) {
      const event = this.fmtEvent(e);
      this.props.onFocus(event);
    },
    onInput(e) {
      const event = this.fmtEvent(e);
      this.props.onInput(event);
    },
    onClear(e) {
      const event = this.fmtEvent(e);
      this.props.onClear(event);
    },
    onSelect(e) {
      const event = this.fmtEvent(e);
      this.props.onSelect(event);
    },
  },
});
