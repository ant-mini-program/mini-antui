Component({
  props: {
    value: '',
    checked: false,
    disabled: false,
    onChange: () => {},
  },
  didMount() {
    this.dataset = {};
    for (const key in this.props) {
      if ((/data-/gi).test(key)) {
        this.dataset[key.replace(/data-/gi, '')] = this.props[key];
      }
    }
  },
  methods: {
    fmtEvent(e) {
      return Object.assign({}, e, {
        currentTarget: { dataset: this.dataset },
        target: { dataset: this.dataset, targetDataset: this.dataset },
      });
    },
    onChange(e) {
      const event = this.fmtEvent(e);
      this.props.onChange(event);
    },
  },
});
