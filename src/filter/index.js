import lifecycle from './mixins/lifecycle';

Component({
  mixins: [lifecycle],
  data: {
    maxHeight: 0,
    singleSelect: true
  },
  props: {
    className: '',
    onChange: () => {},
    max: 10000
  },
  didMount() {
    let { commonProps, singleSelect } = this.data;
    let { max } = this.props;
    commonProps.max = max;
    if (commonProps.max === 1) {
      singleSelect = false;
      this.setData({
        singleSelect
      });
    }

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