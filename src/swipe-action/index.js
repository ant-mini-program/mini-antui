Component({
  data: {
    leftPos: 0,
    swiping: false,
    holdSwipe: true,
  },
  props: {
    className: '',
    right: [],
    restore: false,
    index: null,
  },
  didUpdate(_prevProps, prevData) {
    const { restore } = this.props;
    const { holdSwipe } = this.data;
    if (restore === true || (prevData.holdSwipe === true && holdSwipe === false)) {
      this.setData({
        leftPos: 0,
        swiping: false,
      });
    }
  },
  methods: {
    onSwipeTap() {
      if (!this.data.swiping) {
        this.setData({
          leftPos: 0,
          swiping: false,
        });
      }
    },
    onSwipeStart(e) {
      this.touchObject = {
        startX: e.touches[0].pageX,
        startY: e.touches[0].pageY,
      };
      const { index, onSwipeStart } = this.props;
      if (onSwipeStart) {
        onSwipeStart({ index });
      }
    },
    onSwipeMove(e) {
      const { touchObject } = this;
      const touchePoint = e.touches[0];
      const { leftPos } = this.data;

      touchObject.endX = touchePoint.pageX;

      // 首次触发时，计算滑动角度
      if (touchObject.direction === undefined) {
        let direction = 0;

        const xDist = touchObject.startX - touchePoint.pageX || 0;
        const yDist = touchObject.startY - touchePoint.pageY || 0;

        const r = Math.atan2(yDist, xDist);
        let swipeAngle = Math.round((r * 180) / Math.PI);

        if (swipeAngle < 0) {
          swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if (swipeAngle <= 45 && swipeAngle >= 0) {
          direction = 1;
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
          direction = 1;
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
          direction = -1;
        }

        touchObject.direction = direction;
      }

      // 通过角度判断是左右方向
      if (touchObject.direction !== 0) {
        let newLeftPos = leftPos;
        // 滑动距离
        const distance = touchObject.endX - touchObject.startX;
        // 左划
        if (distance < 0) {
          newLeftPos = Math.max(distance, -this.props.right.length * 60);
        // 右划
        } else {
          newLeftPos = 0;
        }
        if (Math.abs(distance) > 10) {
          this.setData({
            leftPos: newLeftPos,
            swiping: distance < 0,
          });
        }
      }
    },
    onSwipeEnd(e) {
      const { touchObject } = this;
      if (touchObject.direction !== 0) {
        const touchePoint = e.changedTouches[0];

        touchObject.endX = touchePoint.pageX;

        const { leftPos } = this.data;
        const distance = touchObject.endX - touchObject.startX;
        let newLeftPos = leftPos;
        if (distance < 0) {
          if (Math.abs(distance + leftPos) > this.props.right.length * 60 * 0.7) {
            newLeftPos = (-this.props.right.length * 60);
          } else {
            newLeftPos = 0;
          }
        }
        this.setData({
          leftPos: newLeftPos,
          swiping: false,
        });
      }
    },
    done() {
      this.setData({
        holdSwipe: false,
      }, () => {
        this.setData({
          holdSwipe: true,
        });
      });
    },
    onItemClick(e) {
      const { onRightItemClick } = this.props;
      const { holdSwipe } = this.data;
      if (onRightItemClick) {
        const { index } = e.target.dataset;
        onRightItemClick({
          index,
          extra: this.props.extra,
          detail: this.props.right[index],
          done: this.done.bind(this),
        });
      }

      if (!this.data.swiping && holdSwipe === false) {
        setTimeout(() => {
          this.setData({
            leftPos: 0,
            swiping: false,
          });
        }, 300);
      }
    },
  },
});
