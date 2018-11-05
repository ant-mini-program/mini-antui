# Tabs 标签页

用于让用户在不同的视图中进行切换。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/QrAcpDwscNMUBvtQtVEm.jpeg" width="154" height="190" />

## tabs

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| className | 自定义class | string | | false |
| activeCls | 自定义激活tabbar的class | string | | |
| tabs | tab数据，其中包括选项标题`title`，徽标类型`badgeType`分为圆点`dot`和文本`text`，徽标文本`badgeText`在`badgeType`为`text`时生效 | Array<title, badgeType, badgeText> |  | true |
| activeTab | 当前激活Tab索引	| number |  | true |
| showPlus | 是否显示‘+’icon | Boolean | false | false |
| onPlusClick | ‘+’icon被点击时的回调 | () => {} |  | false |
| onTabClick | tab 被点击的回调 | (index: number) => void | | false |
| onChange | tab变化时触发 | (index: number) => void | | false |
| swipeable | 是否可以滑动内容切换 | boolean | true | false |
| tabBarBackgroundColor | tabBar背景色	| string | | false |
| tabBarActiveTextColor | tabBar激活Tab文字颜色	| string | | false |
| tabBarInactiveTextColor | tabBar非激活Tab文字颜色 | string | | false |
| tabBarUnderlineColor | tabBar下划线颜色 | string | | false |
| tabBarCls | tabBar自定义样式class | string | | false |


## tab-content

视图内容

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| index | 列表项的唯一索引 | string | | | |

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
  >
    <block a:for="{{tabs}}">
      <tab-content key="{{index}}">
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
  height: 300px;
}
```