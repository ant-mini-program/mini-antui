# 卡片

## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| thumb | Card缩略图地址	| imgUrl |  | false |
| title | Card标题 | String | '' | true |
| subTitle | Card副标题 | String |  | false |
| footer | footer文字 | String |  | false |
| footerImg | footer图片地址 | imgUrl | | false |
| onCardClick | Card点击的回调 | Function({info}) | () => {} | false |
| info | 用于点击卡片时往外传递数据	| String | '' | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "card":"mini-antui/es/card/index"
  }
}
```


## examples

```js
Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
    footerImg: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
  },
  onCardClick: function(ev) {
    my.showToast({
      content: ev.info,
    });
  }
});
```

```axml
<card
  thumb="{{thumb}}"
  title="卡片标题"
  subTitle="副标题非必填"
  onClick="onCardClick"
  footer="描述文字"
  footerImg="{{footerImg}}"
  info="dadadadadada"
/>
```
