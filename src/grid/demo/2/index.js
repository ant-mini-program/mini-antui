Page({
  data: {
    list2: [
      {
        "icon": "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        "text": "标题文字"
      },
      {
        "icon": "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        "text": "标题文字"
      },
      {
        "icon": "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        "text": "标题文字"
      },
      {
        "icon": "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        "text": "标题文字"
      },
      {
        "icon": "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        "text": "标题文字"
      },
    ]
  },
  onItemClick: function(ev) {
    my.alert({
      content: ev.detail.index,
    });
  }
});
