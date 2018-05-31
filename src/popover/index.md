# popover 气泡

气泡通用组件

## popover
| 属性 | 说明 | 类型 | 可选 | 默认值 | 必选 |
|----|----|----|----|----|----|
| show | 气泡是否展示 | boolean | - | false | true |
| showMask | 蒙层是否展示 | boolean | - | true | false |
| position | 气泡位置 | string | top / topRight / topLeft / bottom / bottomLeft / bottomRight / right / rightTop / rightBottom / left / leftBottom / leftTop | bottomRight | false |
| className | 最外层覆盖样式 | string | - | ' ' | false |

## popover-item
| 属性 | 说明 | 类型 | 可选 | 默认值 | 必选 |
|----|----|----|----|----|----|
| onItemClick | 单项点击事件 | function | - | null | false |
| className | 单项样式 | string | - | ' ' | false |

## using

```
// page.json
{  
  "usingComponents": {
    "popover": "mini-antui/es/popover/index",
    "popover-item": "mini-antui/es/popover/popover-item/index"
  }
}
```

## examples

```axml
<popover
  position="{{position}}"
  show="{{show}}"
  showMask="{{showMask}}"
  onMaskClick="onMaskClick"
>
  <view onTap="onShowPopoverTap">点击显示</view>
  <view slot="items">
    <popover-item onItemClick="itemTap1">
      <text>line1</text>
    </popover-item>
    <popover-item>
      <text>line2</text>
    </popover-item>
  </view>
</popover>
```
```javascript
Page({
  data: {
    position: 'bottomRight',
    show: false,
    showMask: true,
  },
  onMaskClick() {
    this.setData({
      show: false,
    });
  },
  onShowPopoverTap() {
    this.setData({
      show: true,
    });
  },
  itemTap1() {
    my.alert({
      content: '点击1',
    });
  },
});
```