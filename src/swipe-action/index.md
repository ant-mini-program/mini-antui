## swipe-action
| 属性 | 说明 | 类型 | 默认值 |
|----|----|----|----|
|className| 自定义class | String| |
|right| 滑动选项，最多两项 | Array[Object{type: `edit`/`delete`, text: string}]| `[]` |
|onRightItemClick| 点击滑动选项 | function({index, detail, extra}) ]|  |


### using

```
// page.json
{
  "defaultTitle": "SwipeAction",
  "usingComponents":{
    "swipe-action":"@alipay/mini-antui/swipe-action/index"
  }
}
```

### examples

```axml
// page.axml
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

```js
Page({
  data: {
    right1: [{'type': 'delete', 'text': '删除'}],
    right2: [{'type': 'edit', 'text': '修改'}, {'type': 'delete', 'text': '删除'}],
  },
  onRightItemClick(e) {
    my.alert({
      content: e.index,
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  }
});
```
