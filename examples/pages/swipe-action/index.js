Page({
  data: {
    swipeIndex: null,
    list: [
      { right: [{ type: 'delete', text: '删除', fColor: 'black' }], content: '更换文字颜色' },
      { right: [{ type: 'edit', text: '取消收藏', fColor: 'rgba(0,0,0,.5)' }, { type: 'delete', text: '删除', fColor: 'yellow' }], content: '改变文字颜色' },
      { right: [{ type: 'edit', text: '取消收藏', bgColor: '#333' }, { type: 'delete', text: '删除' }], content: '其中一个背景色变化' },
      { right: [{ type: 'edit', text: '取消收藏', bgColor: '#ccc', fColor: '#f00' }, { type: 'delete', text: '删除', bgColor: '#0ff', fColor: '#333' }], content: '文字和背景色同时改变' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '默认颜色样式' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '6BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '7BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '8BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '9BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '10BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '11BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '12BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '13BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '14BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '15BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '16BBB' },
      { right: [{ type: 'delete', text: '删除' }], content: 'CCC' },
    ],
  },
  onRightItemClick(e) {
    const { type } = e.detail;
    my.confirm({
      title: '温馨提示',
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        const { list } = this.data;
        if (result.confirm) {
          if (type === 'delete') {
            list.splice(this.data.swipeIndex, 1);
            this.setData({
              list: [...list],
            });
          }

          my.showToast({
            content: '确定 => 执行滑动删除还原',
          });
          e.done();
        } else {
          my.showToast({
            content: '取消 => 滑动删除状态保持不变',
          });
        }
      },
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  },
  onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index,
    });
  },
});
