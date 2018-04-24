Component({
  data: {
    show: true
  },
  props: {
    className: '',
    title: '',
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