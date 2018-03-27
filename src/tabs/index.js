Component({
  props: {
    className: '',
    tabBarUnderlineColor: '#108ee9', // 选中选项卡下划线颜色
    tabBarActiveTextColor: '#108ee9', // 选中选项卡字体颜色
    tabBarInactiveTextColor: '#333333', // 未选中选项卡字体颜色
    tabBarBackgroundColor: '#ffffff', // 选项卡背景颜色
  },
  data: {
    scroll_init: 0,
    current: 0,
    windowWidth: 0,
    autoplay: true,
    tabWidth: 0.25,
    interval: 99999999,
  },
  didMount() {
    const { tabs } = this.props;
    my.getSystemInfo({
      success: (res) => {
        this.setData({
          windowWidth: res.windowWidth,
          tabWidth: tabs.length > 3 ? 0.25 : 1 / tabs.length,
        });
      }
    });
  },
  methods: {
    handleSwiperChange(e) {
      const current = e.detail.current;

      this.moveScrollBar(current);
      if (this.props.onChange) {
        this.props.onChange({ index: current })
      }
      this.setData({
        current,
      });
    },
    handleTabClick(e) {
      const { index } = e.target.dataset;

      this.moveScrollBar(index);
      if (this.props.onTabClick) {
        this.props.onTabClick({ index: index });
      }
      this.setData({
        current: index,
      });
    },
    moveScrollBar(current) {
      const { windowWidth, tabWidth }  = this.data;
      let scroll_init = current * windowWidth * tabWidth;

      if (current <= 2) {
        scroll_init = 0;
      } else {
        scroll_init = (current - 2) * windowWidth * tabWidth;
      }

      this.setData({
        scroll_init,
      })
    },
  }
});
