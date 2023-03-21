Component({
  props: {
    show: false,
    className: '',
    topImageSize: 'md',
    showClose: true,
    closeType: '0',
    disableScroll: true,
    onModalClick: () => {},
    onModalClose: () => {},
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
    },
  },
});
