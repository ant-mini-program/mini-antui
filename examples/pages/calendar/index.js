Page({
  data: {
    tagData: [
      { date: '2019-09-14', tag: '还房贷', tagColor: 5 },
      { date: '2019-09-28', tag: '公积金', tagColor: 2 },
      { date: '2019-09-18', tag: 'xx', disable: true },
    ],
  },
  handleSelect() {},
  onMonthChange() {},
  onYearChange() {},
  onSelectHasDisableDate() {
    my.alert({
      content: 'SelectHasDisableDate',
    });
  },
});
