Component({
  props: {
    value: '',
    placeholder: '',
    onSelect: () => {},
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
    onPickerTap(e) {
      const event = this.fmtEvent(e);
      this.props.onPickerTap(event);
    },
  },
});
