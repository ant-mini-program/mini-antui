Component({
  props: {
    className: '',
    topImageSize: 'md',
    showClose: true,
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
