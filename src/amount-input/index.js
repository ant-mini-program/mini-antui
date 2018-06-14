Component({
  data: {
    _value: '',
    focus: false,
  },
  props: {
    className: '',
    focus: false,
    placeholder: '',
  },
  didMount() {
    this.setData({
      _value: 'value' in this.props ? this.props.value : '',
      focus: this.props.focus,
    });
  },
  didUpdate() {
    if ((('value' in this.props)) && this.props.value !== this.data._value) {
      this.setData({
        _value: this.props.value,
      });
    }
  },
  methods: {
    onInput(e) {
      const { value } = e.detail;

      if (!('value' in this.props)) {
        this.setData({
          _value: value,
        });
      }

      if (this.props.onInput) {
        this.props.onInput(value);
      }
    },
    onConfirmTap() {
      if (this.props.onConfirm) {
        this.props.onConfirm();
      }
    },
    onClearTap() {
      this.setData({
        focus: true,
      });

      if (!('value' in this.props)) {
        this.setData({
          _value: '',
        });
      }

      if (this.props.onClear) {
        this.props.onClear('');
      }
    },
  },
});
