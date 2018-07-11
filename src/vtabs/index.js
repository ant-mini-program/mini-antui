Component({
  data: {
    tabTop: 0,
    current: 0,
    wrapScrollTop: 0,
  },
  props: {
    className: '',
    tabs: [],
    animated: false,
    swipeable: true,
    tabBarActiveTextColor: '#108ee9',
    tabBarInactiveTextColor: '#333333',
    tabBarActiveBgColor: '#ffffff',
    tabBarInactiveBgColor: '#f8f8f8',
    tabBarlineColor: '#108ee9',
  },
  didMount() {
    const { tabs } = this.props;
    this.isScrolling = false;
    this.anchorMap = {};
    this.timerId = null;
    this.wrapHeight = 0;
    this.scrollWrapHeight = 0;

    my.createSelectorQuery()
      .select('.am-vtabs-slides')
      .boundingClientRect()
      .exec((ret) => {
        this.wrapHeight = ret[0].height;
      });

    let cacheHeight = 0;
    for (let i = 0; i < tabs.length; i++) {
      const { anchor } = tabs[i];
      /* eslint-disable no-loop-func */
      my.createSelectorQuery()
        .select(`#am-vtab-slide-${anchor}`)
        .boundingClientRect()
        .exec((ret) => {
          this.anchorMap[anchor] = cacheHeight;
          cacheHeight += ret[0].height;
          this.scrollWrapHeight = cacheHeight;
        });
    }
  },
  didUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  },
  methods: {
    handleTabClick(e) {
      const { anchor, index } = e.target.dataset;

      if (!this.isScrolling || !this.props.swipeable) {
        this.setData({
          wrapScrollTop: this.anchorMap[anchor],
          current: index,
        });
        this.moveScrollBar(index);
      }
    },
    moveScrollBar(current) {
      let tabTop;

      if (current < 6) {
        tabTop = 0;
      } else {
        tabTop = (current - 5) * 55;
      }

      this.setData({
        tabTop,
        current,
      });
    },
    onScroll(e) {
      const { scrollTop } = e.detail;
      const keys = Object.keys(this.anchorMap);

      if (this.timerId) {
        clearTimeout(this.timerId);
      }

      this.timerId = setTimeout(() => {
        this.isScrolling = false;
      }, 300);

      const anchorLength = keys.length;
      for (let i = 0; i < anchorLength; i++) {
        if (i === anchorLength - 1) {
          // 如果是最后一个只需满足scrollTop高于当前vtab-content的高度
          if (scrollTop >= this.anchorMap[keys[i]]) {
            this.moveScrollBar(i);
            break;
          }
        }
        if (scrollTop >= this.anchorMap[keys[i]] && scrollTop < this.anchorMap[keys[i + 1]]) {
          // 如果没个vtab-content高度小于scroll-view高度，到达底部后就不需要根据scrollTop再去判断左侧的选择项
          if (scrollTop + this.wrapHeight < this.scrollWrapHeight) {
            this.moveScrollBar(i);
          }
          break;
        }
      }
    },
    onWrapTouchMove() {
      if (this.props.swipeable) {
        this.isScrolling = true;
      }
    },
  },
});
