Component({
  props: {
    value: '',
    checked: false,
    disabled: false,
    onChange: () => {},
  },
  methods: {
    onChange(event) {
      this.props.onChange(event);
    },
  },
});
