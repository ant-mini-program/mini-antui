Component({
  props: {
    className: '',
    loadMore: false,
    loadContent: [
      '',
      '',
    ],
  },
  data: {
    loadContent: [
      '加载更多...',
      '-- 数据加载完了 --',
    ],
  },
  didMount() {
    const loadTxt = this.props.loadContent[0] ? this.props.loadContent[0] : this.data.loadContent[0];
    const overTxt = this.props.loadContent[1] ? this.props.loadContent[1] : this.data.loadContent[1];
    this.setData({
      loadContent: [loadTxt, overTxt],
    });
  },
  didUpdate() {
    const loadTxt = this.props.loadContent[0] ? this.props.loadContent[0] : this.data.loadContent[0];
    const overTxt = this.props.loadContent[1] ? this.props.loadContent[1] : this.data.loadContent[1];
    this.setData({
      loadContent: [loadTxt, overTxt],
    });
  },
});
