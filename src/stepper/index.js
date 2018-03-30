Component({
  opaReduce: 1,
  opaAdd: 1,
  data: {
    opaReduce: 1,
    opaAdd: 1,
    opaContent: 1,
    stateDisabled: false
  },
  props: {
    className: '',
    min: 0,
    max: 100000,
    disabled: false,
    defaultValue: 10,
    value: 10,
    readOnly: false,
    showNumber: false,
    step: 1
  },
  didMount() {
    const { disabled, readOnly } = this.props;
    if (disabled || readOnly) {
      this.setData({
        stateDisabled: true
      });
    }
  },
  methods: {

    changeFn(ev) {
      const props = this.props,
        { value, min, max, disabled, readOnly, step } = props,
        evType = ev.target.dataset.type,
        enable = disabled ? disabled : readOnly;
      if (!enable) {
        if (evType === "reduce") {
          this.opaAdd = 1;
          if (value > min) {
            props.value = props.value - step < min ? min : props.value - step;
            this.opaReduce = props.value - step < min ? 0.4 : 1;
          }
        } else {
          this.opaReduce = 1;
          if (value < max) {
            props.value = props.value + step > max ? max : props.value + step;
            this.opaAdd = props.value + step > max ? 0.4 : 1;
          }
        }
        this.setData({
          value: props.value,
          opaAdd: this.opaAdd,
          opaReduce: this.opaReduce,
        });
        props.onChange(props.value);
      }
    },

    resetFn(ev) {
      const props = this.props,
        { max, min } = props,
        value = ev.detail.value;
      if (value > max) {
        props.value = max;
        this.setData({
          value: max,
          opaAdd: 0.4
        });
      }
      else if (value < min) {
        props.value = min;
        this.setData({
          value: min,
          opaReduce: 0.4
        })
      }
      else {
        props.value = value;
        this.setData({
          value: props.value
        })
      }
    },

  }
})
