# Tabs 标签页

用于让用户在不同的视图中进行切换。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/QrAcpDwscNMUBvtQtVEm.jpeg" width="154" height="190" />

## tabs

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| className | 自定义class | String | | false |
| activeCls | 自定义激活tabbar的class | String | | |
| tabs | tab数据，其中包括选项标题`title`，徽标类型`badgeType`分为圆点`dot`和文本`text`，不设置`badgeType`则不显示徽标。徽标文本`badgeText`在`badgeType`为`text`时生效 | Array<title, badgeType, badgeText> |  | true |
| activeTab | 当前激活Tab索引 | Number |  | true |
| showPlus | 是否显示‘+’icon | Boolean | false | false |
| onPlusClick | ‘+’icon被点击时的回调 | () => {} |  | false |
| onTabClick | tab 被点击的回调 | (index: Number) => void | | false |
| onChange | tab变化时触发 | (index: Number) => void | | false |
| swipeable | 是否可以滑动内容切换，同时可控制高度是否自适应 | Boolean | true | false |
| duration | 当swipeable为true时滑动动画时长，单位ms | Number | 500(ms) | false |
| tabBarBackgroundColor | tabBar背景色 | String | | false |
| tabBarActiveTextColor | tabBar激活Tab文字颜色 | String | | false |
| tabBarInactiveTextColor | tabBar非激活Tab文字颜色 | String | | false |
| tabBarUnderlineColor | tabBar下划线颜色 | String | | false |
| tabBarCls | tabBar自定义样式class | String | | false |


## tab-content

视图内容

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| index | 列表项的唯一索引 | String | | | |
| tabId | tab 内容序列索引 | Number | {{index}} | | |
| activeTab | 选项卡当前激活序列索引 | Number | {{activeTab}} | | |

## tab-content 高度自适应说明

tabs 组件内容区域高度是否能够自适应，需要注意 `swipeable` 的值：

* `swipeable='{{true}}'`：内容区域可滑动，且相对应 tab 标签卡；但**内容区域高度为固定值**，需要在 acss 文件中设定 `height` 值，否则高度会异常；
* `swipeable='{{false}}'`：内容区域不可滑动，此时高度表现形式有两种，且可以不需要在 acss 文件设定 `height` 值；
  * `<tab-content>` 中**无** `tabId` 和 `activeTab` 两个属性，此时的高度将以所有内容区域中最高的为基准展示；
  * `<tab-content>` 中**包含** `tabId` 和 `activeTab` 两个属性时 `tabId="{{index}}" activeTab="{{activeTab}}"`，内容区域所展示的高度将会随着不同模块的高度而改变；

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "tabs": "mini-antui/es/tabs/index",
    "tab-content": "mini-antui/es/tabs/tab-content/index"
  }
}
```

```html
<view>
  <tabs
    tabs="{{tabs}}"
    showPlus="{{true}}"
    onTabClick="handleTabClick"
    onChange="handleTabChange"
    onPlusClick="handlePlusClick"
    activeTab="{{activeTab}}"
    swipeable="{{false}}"
  >
    <block a:for="{{tabs}}">
      <tab-content key="{{index}}" tabId="{{index}}" activeTab="{{activeTab}}" a:if="{{index === 1}}">
        <view class="tab-content" style="height: 100px;">高度为 100px {{item.title}}</view>
      </tab-content>
      <tab-content key="{{index}}" tabId="{{index}}" activeTab="{{activeTab}}" a:elif="{{index === 2}}">
        <view class="tab-content" style="height: 200px;">改变 tab-content 高度为 200px {{item.title}}</view>
      </tab-content>
      <tab-content key="{{index}}" tabId="{{index}}" activeTab="{{activeTab}}" a:else>
        <view class="tab-content">content of {{item.title}}</view>
      </tab-content>
    </block>
  </tabs>
</view>
```

```javascript
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
    ],
    activeTab: 2,
  },
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
});
```

```css
.tab-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40rpx;
  /* 如果 swipeable="{{true}}"，需要增加 height */
  /* height: 350px; */
}
```