

Page({
  data: {
    swipeIndex: null,
    right1: [{'type': 'delete', 'text': '删除'}],
    right2: [{'type': 'edit', 'text': '修改'}, {'type': 'delete', 'text': '删除'}],
  },
  onRightItemClick(e) {
    my.alert({
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  },
  onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index || null,
    });
  }
});
