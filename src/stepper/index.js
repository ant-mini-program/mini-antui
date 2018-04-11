Component({
  data: {
    opaReduce: 1,
    opaAdd: 1,
  },
  props: {
    className: '',
    min: 0,
    max: 100000,
    disabled: false,
    value: 10,
    readOnly: false,
    showNumber: false,
    step: 1,
    onChange: () => {},
  },
  didMount() {
    const { value, min, max } = this.props;
    this.setData({
      value: Math.min(Math.max(min, value), max),
    });
  },
  didUpdate(preProps, preData) {
    const { value, min, max } = this.props;
    if (preProps.value !== this.props.value) {
      this.setData({
        value: Math.min(Math.max(min, value), max),
      });
    }
  },
  methods: {
    changeFn(ev) {
      const { min, max, onChange, disabled, readOnly, step } = this.props;
      const evType = ev.target.dataset.type;
      let { opaReduce, opaAdd, value } =this.data;
      let enable = disabled ? disabled : readOnly;
      if (!enable) {
        if (evType === "reduce") {
          if (value > min) {
            opaAdd = 1;
            value = Math.max(min, value - step);
            opaReduce = value === min ? 0.4 : 1;
          }
        } else {
          if (value < max) {
            opaReduce = 1;
            value = Math.min(value + step, max);
            opaAdd = value === max ? 0.4 : 1;
          }
        }
        this.setData({
          value,
          opaAdd,
          opaReduce,
        });
        onChange(value);
      }
    },
    resetFn(ev) {
      const { max, min, onChange } = this.props;
      const value = ev.detail.value;
      let calculatedVal = value;
      let opaAdd = 1;
      let opaReduce = 1;
      if (value > max) {
        calculatedVal = max;
        opaAdd = 0.4;
      } else if (value < min) {
        calculatedVal = min;
        opaReduce = 0.4;
      }
      this.setData({
        value: calculatedVal,
        opaAdd,
        opaReduce,
      });
      onChange(calculatedVal);
    },
  }
})
