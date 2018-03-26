Component({
  data: {
    X: null,
    leftPos: 0,
    swiping: false,
  },
  props: {
    className: '',
    right: [],
  },
  methods: {
    onSwipeTap(e) {
      if (!this.data.swiping) {
        this.setData({
          leftPos: 0,
          swiping: false,
        });
      }
    },
    onSwipeStart(e) {
      this.setData({
        X: e.touches[0].pageX,
      });
    },
    onSwipeMove(e) {
      const { leftPos } = this.data;
      // 滑动距离
      const direction = e.touches[0].pageX - this.data.X;
      let newLeftPos = leftPos;
      // 左划
      if (direction < 0) {
        newLeftPos = Math.max(direction, -this.props.right.length * 60);
      // 右划
      } else {
        newLeftPos = 0;
      }

      this.setData({
        leftPos: newLeftPos,
        swiping: direction < 0,
      });
    },
    onSwipeEnd(e) {
      const { leftPos } = this.data;
      const direction = e.changedTouches[0].pageX - this.data.X;
      let newLeftPos = leftPos;
      if (direction < 0) {
        if (Math.abs(direction + leftPos) > this.props.right.length * 60 * 0.7) {
          newLeftPos = (-this.props.right.length * 60);
        } else {
          newLeftPos = 0;
        }
      }
      this.setData({
        leftPos: newLeftPos,
        swiping: false,
        X: null,
      });
    },
    onItemClick(e) {
      const { onRightItemClick } = this.props;
      if (onRightItemClick) {
        const index = e.target.dataset.index;
        onRightItemClick({
          index,
          extra: this.props.extra,
          detail: this.props.right[index]
        });
      }

      if (!this.data.swiping) {
        setTimeout(() => {
          this.setData({
            leftPos: 0,
            swiping: false,
          });
        }, 300);
      }
    }
  }
});
