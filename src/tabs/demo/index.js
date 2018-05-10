Page({
  data: {
    tabs: [
      {
        title: '选项',
        badgeType: 'text',
        badgeText: '6',
      },
      {
        title: '选项二',
        badgeType: 'dot',
      },
      { title: '3 Tab' },
      { title: '4 Tab' },
      { title: '5 Tab' },
    ]
  },
  handleTabClick({ index }) {},
  handleTabChange({ index }) {},
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  }
});
