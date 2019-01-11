# Popup 弹出菜单

弹出菜单。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/JcqZNhoOVOHVrdDqQevk.jpeg" width="154" height="190" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| className | 自定义class | string | | false |
| show | 是否显示菜单 | boolean | false | false |
| animation | 是否开启动画 | boolean | true | false |
| mask | 是否显示mask，不显示时点击外部不会触发onClose | boolean| true | true |
| position | 控制从什么方向弹出菜单，bottom表示底部，left表示左侧，top表示顶部，right表示右侧 | string | 'bottom' | false |
| disableScroll | 展示mask时是否禁止页面滚动 | boolean | true | false |
| zIndex | 定义popup的层级 | number | 0 | false |

## slots

可以在popup组件中定义要展示部分，具体可参看下面示例。

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "popup": "mini-antui/es/popup/index"
  }
}
```

```html
<view>
  <view class="btn-container">
    <button onTap="onTopBtnTap">弹出popup</button>
  </view>
  <popup show="{{showTop}}" position="top" onClose="onPopupClose">
    <view style="height: 200px; background: #fff; display: flex; justify-content: center; align-items: center;">hello world</view>
  </popup>
</view>
```

```javascript
Page({
  data: {
    showTop: false,
  },
  onTopBtnTap() {
    this.setData({
      showTop: true,
    });
  },
  onPopupClose() {
    this.setData({
      showTop: false,
    });
  },
});
```
