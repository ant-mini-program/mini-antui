Component({
  data: {
    show: true
  },
  props: {
    className: '',
    title: '',
    onClose: () => {}
  },
  methods: {
    onClose() {
      this.setData({
        show: false
      });
      this.props.onClose();
    }
  }
});