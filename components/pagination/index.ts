const noop = () => {};

Component({
  data: {
    totalPage: 0,
    current: 0
  },

  props: {
    mode: 'text',
    simple: false,
    disabled: false,
    current: 0,
    total: 0,
    prevText: '上一页',
    nextText: '下一页',
    onChange: noop,
    className: '',
    btnClass: ''
  },

  didMount() {
    const { current, total } = this.props;
    this.setData({
      current,
      total
    });
  },

  methods: {
    onTapPrev() {
      const { current } = this.data;
      const { disabled } = this.props;
      if (current - 1 > 0 && !disabled) {
        this.setData({
          current: current - 1
        });
        this.props.onChange(this.data.current);
      }
    },
    onTapNext() {
      const { disabled } = this.props;
      const { current, total } = this.data;
      if (current + 1 <= total && !disabled) {
        this.setData({
          current: current + 1
        });
        this.props.onChange(this.data.current);
      }
    }
  }
});
