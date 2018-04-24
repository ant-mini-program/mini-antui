Component({
  data: {
    show: true
  },
  props: {
    className: '',
    title: '',
    content: '',
    onTipsDialogClose: () => {}
  },
  methods: {
    onTipsDialogClose() {
      this.setData({
        show: false
      });
      this.props.onTipsDialogClose();
    }
  }
})