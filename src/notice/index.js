/**
 * NoticeBar通告栏
 */
Component({
  props: {
    mode: "", //closable,link
    action: "", //文本按钮
    show: true, //是否显示
  },
  methods: {
    onTap() {
      if (this.props.onClick) {
        this.props.onClick()
      }
    }
  }
});