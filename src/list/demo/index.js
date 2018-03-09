
const newitems = [
  {
    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/KXDIRejMrRdKlSEcLseB.png',
    title: '固定到头部',
    arrow: 'horizontal',
    sticky: true,
  },
  {
    title: '标题文字不换行很长很长很长很长很长很长很长很长很长很长',
    arrow: 'horizontal',
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: 'horizontal',
    textMode: 'wrap'
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap'
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top'
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: 'horizontal',
    textMode: 'wrap'
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap'
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top'
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: 'horizontal',
    textMode: 'wrap'
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap'
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top'
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: 'horizontal',
    textMode: 'wrap'
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap'
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top'
  },
];
Page({
  data: {
    items: [
      {
        title: '单行列表',
        extra: '详细信息'
      },
    ],
    items2: [
      {
        title: '多行列表',
        arrow: 'horizontal',
      },
      {
        title: '多行列表',
        arrow: 'horizontal',
      },
      {
        title: '多行列表',
        arrow: 'horizontal',
      },
    ],
    items3: [
      {
        title: '双行列表',
        extra: '描述信息',
        arrow: 'horizontal',
      },
    ],
    items4: [
      {
        title: '双行列表',
        brief: '描述信息',
        extra: '描述信息',
        arrow: 'horizontal',
      },
      {
        title: '双行列表',
        extra: '描述信息',
        arrow: 'horizontal',
      },
      {
        title: '双行列表',
        extra: '描述信息',
        arrow: 'horizontal',
      },
    ],
    items5: [
      {
        thumb: 'https://gw.alipayobjects.com/zos/rmsportal/KXDIRejMrRdKlSEcLseB.png',
        title: '固定到头部',
        arrow: 'horizontal',
        sticky: true,
      },
      {
        title: '标题文字不换行很长很长很长很长很长很长很长很长很长很长',
        arrow: 'horizontal',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: 'horizontal',
        textMode: 'wrap'
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
        textMode: 'wrap'
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        textMode: 'wrap',
        align: 'top'
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: 'horizontal',
        textMode: 'wrap'
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
        textMode: 'wrap'
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        textMode: 'wrap',
        align: 'top'
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: 'horizontal',
        textMode: 'wrap'
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
        textMode: 'wrap'
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        textMode: 'wrap',
        align: 'top'
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: 'horizontal',
        textMode: 'wrap'
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
        textMode: 'wrap'
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        textMode: 'wrap',
        align: 'top'
      },
    ]
  },
  onItemClick: function(ev) {
    my.alert({
      content: `点击了第${ev.index + 1}行`,
    });
  },
  onCardClick: function(ev) {
    my.alert({
      content: ev.e2 || '3131',
    });
  },
  onTapHeader(ev) {
    my.alert({
      content: 'onTapHeader',
    });
  },
  onScrollToLower() {
    const { items5 } = this.data;
    const newItems = items5.concat(newitems);
    console.log(newItems.length);
    this.setData({
      items5: newItems,
    });
  }
});
