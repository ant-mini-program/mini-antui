# footer 页脚

显示页面页脚。

## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| copyright | 版权信息 | string |  | false |
| links | 页脚链接 | Array<text, url> |  | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "footer": "mini-antui/es/footer/index",
  }
}
```


## examples

```axml
<view>
  <footer
    copyright="{{copyright}}"
    links="{{links}}" />
</view>
```

```javascript
Page({
 data: {
    copyright: '© 2004-2017 Alipay.com. All rights reserved.',
    links: [
      { text: '底部链接', url: '../../list/demo/index' },
      { text: '底部链接', url: '../../card/demo/index' },
    ],
 },
});
```
