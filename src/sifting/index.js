import lifecycle from './mixins/lifecycle';

Component({
  mixins: [lifecycle],
  data: {
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