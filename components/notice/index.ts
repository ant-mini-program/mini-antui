Component({
  props: {
    className: '',
    mode: '', // closable,link
    action: '', // 文本按钮
    show: true, // 是否显示
    enableMarquee: false, // 是否开启marquee
    onClick: () => {},
    marqueeProps: {
      loop: false,
      leading: 500,
      trailing: 800,
      fps: 40,
    },
  },
  data: {
    animatedWidth: 0,
    overflowWidth: 0,
  },
  didMount() {
    if (this.props.enableMarquee) {
      this._measureText();
      this._startAnimation();
    }
  },
  didUpdate() {
    this._measureText();
    if (this.props.enableMarquee && !this._marqueeTimer) {
      this._measureText();
      this._startAnimation();
    }
  },
  didUnmount() {
    if (this._marqueeTimer) {
      clearTimeout(this._marqueeTimer);
      this._marqueeTimer = null;
    }
  },
  methods: {
    _measureText() {
      // 计算文本所占据的宽度，计算需要滚动的宽度
      my.createSelectorQuery()
        .select(`.am-notice-marquee-${this.$id}`)
        .boundingClientRect()
        .select(`.am-notice-content-${this.$id}`)
        .boundingClientRect()
        .exec((ret) => {
          const overflowWidth = (ret && ret[0] && ret[1] && (ret[0].width - ret[1].width)) || 0;
          this.setData({
            overflowWidth,
          });
        });
    },
    _startAnimation() {
      if (this._marqueeTimer) {
        clearTimeout(this._marqueeTimer);
      }

      const { loop, fps, trailing, leading } = this.props.marqueeProps;
      const TIMEOUT = 1 / fps * 1000;
      const isLeading = this.data.animatedWidth === 0;
      const timeout = isLeading ? leading : TIMEOUT;

      const animate = () => {
        const { overflowWidth } = this.data;
        let animatedWidth = this.data.animatedWidth + 1;
        const isRoundOver = animatedWidth > overflowWidth;

        if (isRoundOver) {
          if (loop) {
            animatedWidth = 0;
          } else {
            return;
          }
        }

        if (isRoundOver && trailing) {
          this._marqueeTimer = setTimeout(() => {
            this.setData({
              animatedWidth,
            });

            this._marqueeTimer = setTimeout(animate, TIMEOUT);
          }, trailing);
        } else {
          this.setData({
            animatedWidth,
          });

          this._marqueeTimer = setTimeout(animate, TIMEOUT);
        }
      };

      if (this.data.overflowWidth !== 0) {
        this._marqueeTimer = setTimeout(animate, timeout);
      }
    },
    
    onNoticeTap() {
      const { mode, onClick } = this.props;
      if (mode === 'link' && typeof onClick === 'function') {
        onClick();
      }
    },

    onOperationTap() {
      const { mode, onClick } = this.props;
      if (mode === 'closable' && typeof onClick === 'function') {
        onClick();
      }
    },
  },
});
