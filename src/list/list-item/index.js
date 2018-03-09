Component({
  props: {
    className: '',
    align: "middle",
    disabled: false,
  },
  methods: {
    onItemTap(ev) {
      const { onClick, disabled } = this.props;
      if (onClick && !disabled) {
        onClick({
          index: ev.target.dataset.index,
        });
      }
    },
  },
});
