const noop = () => {};

Component({
  data: {
    totalPage: 0,
    current: 0
  },

  props: {
    arrow: false,
    showPage: true,
    current: 0,
    total: 0,
    prevText: '',
    nextText: '',
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
      if (current - 1 > 0) {
        this.setData({
          current: current - 1
        });
        this.props.onChange(this.data.current);
      }
    },
    onTapNext() {
      const { current, total } = this.data;
      if (current + 1 <= total) {
        this.setData({
          current: current + 1
        });
        this.props.onChange(this.data.current);
      }
    }
  }
});
