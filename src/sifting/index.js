import lifecycle from './mixins/lifecycle';

Component({
  mixins: [lifecycle],
  data: {
    maxHeight:435
  },
  props: {
    className:'',
    onChange: () => {},
    max: 10000
  },
  didMount() {
    let { commonProps } = this.data;
    let { max } = this.props;
    commonProps.max = max;
    my.getSystemInfo({
      success: (res) => {
        this.setData({
          maxHeight: res.windowHeight-71
        })
      }
    })
  },
  methods: {
    resetFn() {
      let { items, results } = this.data;
      items.forEach(element => {
        element.setData({
          confirmStyle: ''
        })
      });
      results.splice(0, results.length);
    },
    confirmFn() {
      const { onChange } = this.props;
      let { results } = this.data;
      onChange(results);
    },
  }
})