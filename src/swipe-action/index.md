## SwipeAction 可滑动单元格

可滑动单元格

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/AJKkYtCpuwuoaKTQijUB.jpeg" width="154" height="190" />

| 属性名 | 描述 | 类型 | 默认值 |
|----|----|----|----|
|className| 自定义class | String| |
|right| 滑动选项，最多两项 | Array[Object{type: `edit`/`delete`, text: string}]| `[]` |
|onRightItemClick| 点击滑动选项 | function({index, detail, extra, done}) ]| 调用done从而使swipe-action合上 |
| restore | 还原组件到初始状态，当有多个swipe-action组件时，当滑动其中一个时，需要将其他的组件的`restore`属性设置为`true`，避免一个页面同时存在多个swipeAction处于活动状态。 | Boolean | `false` |


## 示例

```json
{
  "defaultTitle": "SwipeAction",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index",
    "swipe-action": "mini-antui/es/swipe-action/index"
  }
}
```

```html
<list>
  <swipe-action right="{{right1}}" onRightItemClick="onRightItemClick" extra="item1">
    <list-item
      arrow="horizontal"
      index="1"
      key="items-1"
      onClick="onItemClick"
    >
      只有删除
    </list-item>
  </swipe-action>
  <swipe-action right="{{right2}}" data-some="ddd" onRightItemClick="onRightItemClick" extra="item2">
    <list-item
      arrow="horizontal"
      index="2"
      key="items-2"
      onClick="onItemClick"
      last="{{true}}"
    >
      修改 + 删除
    </list-item>
  </swipe-action>
</list>
```

```javascript
Page({
  data: {
    right1: [{'type': 'delete', 'text': '删除'}],
    right2: [{'type': 'edit', 'text': '修改'}, {'type': 'delete', 'text': '删除'}],
  },
  onRightItemClick(e) {
    my.alert({
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
    });
    e.done();
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  }
});
```
