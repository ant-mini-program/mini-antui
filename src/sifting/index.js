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
    let { userProps } = this.data;
    let { max } = this.props;
    userProps.max = max;
  },
  methods: {
    resetFn() {
      let { itemArry, confirmArry } = this.data;
      itemArry.forEach(element => {
        element.setData({
          confirmStyle: ''
        })
      });
      confirmArry.splice(0, confirmArry.length);
    },
    confirmFn() {
      const { onChange } = this.props;
      let { confirmArry } = this.data;
      onChange(confirmArry);
    },
  }
})