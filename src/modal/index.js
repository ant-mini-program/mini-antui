Component({
  props: {
    className: '',
    show: false, // 外部传入，同步到data
  },
  methods: {
    onModalClick() {
      const { onModalClick } = this.props;
      if (onModalClick) {
        onModalClick();
      }
    },
    onModalClose() {
      const { onModalClose } = this.props;
      if (onModalClose) {
        onModalClose();
      }
    }
  }
});
