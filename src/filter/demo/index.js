Page({
  data: {
    items: [
      { id: 1, value: '衣服', selected: true },
      { id: 1, value: '橱柜' },
      { id: 3, value: '数码产品', selected: true },
      { id: 4, value: '防盗门' },
      { id: 5, value: '椅子' },
      { id: 7, value: '电脑显示器' },
      { id: 6, value: '最新款电子产品' },
      { id: 8, value: '某某某某某牌电视游戏底座' },
      { id: 9, value: '削皮器' },
      { id: 10, value: '电子掌机' },
      { id: 0, value: 'switch' },
      { id: 2, value: 'PS4' },
      { id: 1, value: '衣服', selected: true },
      { id: 1, value: '橱柜' },
      { id: 3, value: '数码产品', selected: true },
      { id: 4, value: '防盗门' },
      { id: 5, value: '椅子' },
      { id: 7, value: '电脑显示器' },
      { id: 6, value: '最新款电子产品' },
      { id: 8, value: '某某某某某牌电视游戏底座' },
    ]
  },

  handleCallBack(data) {
    my.alert({
      content: data
    })
  }
});
