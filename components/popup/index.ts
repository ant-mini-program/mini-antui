Component({
  props: {
    className: '',
    show: false,
    position: 'bottom',
    mask: true,
    animation: true,
    disableScroll: true,
  },
  methods: {
    onMaskTap() {
      const { onClose, animation } = this.props;

      if (onClose) {
        if (animation) {
          onClose();
        } else {
          setTimeout(() => {
            onClose();
          }, 200);
        }
      }
    },
  },
});
