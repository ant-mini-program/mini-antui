Page({
  data: {
    tabs: [
      { title: '选项二', anchor: 'a', badgeType: 'dot' },
      { title: '选项', anchor: 'b', badgeType: 'text', badgeText: '6' },
      { title: '不超过五字', anchor: 'c' },
      { title: '选项四', anchor: 'd' },
      { title: '选项五', anchor: 'e' },
      { title: '选项六', anchor: 'f' },
    ],
  },
  handleChange(index) {
    console.log(index);
  },
});
