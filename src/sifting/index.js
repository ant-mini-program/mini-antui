import lifecycle from './mixins/lifecycle';

Component({
  mixins: [lifecycle],
  data: {
    maxHeight: 'auto',
    rePosition:'hidden',
    reBottom:'40rpx',
  },
  props: {
    className:'',
    onChange: () => {},
    clickLength: 10000
  },
  didMount() {
    let { userProps } = this.data;
    let { clickLength } = this.props;
    userProps.clickLength = clickLength;
    my.getSystemInfo({
      success: (res) => {
        my.createSelectorQuery()
          .select('#am-sifting-height').boundingClientRect().exec((ret) => {
            if (ret[0].height >= res.windowHeight) {
              this.setData({
                maxHeight: res.windowHeight +'px',
                rePosition:'fixed',
                reBottom:'150rpx'
              })
            }
          });
      }
    })
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