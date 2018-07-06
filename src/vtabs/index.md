# vtabs 纵向选项卡

用于让用户在不同的视图中进行切换

## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| tabs | tab数据，其中包括选项标题`title`，列表唯一锚点值 | Array<title, anchor> |  | true |
| animated | 是否开启动画 | boolean| | false |
| swipeable | 是否可滑动切换 | boolean| | true |
| tabBarActiveBgColor | tabBar激活状态背景色	| string | | false |
| tabBarInactiveBgColor | tabBar非激活状态背景色	| string | | false |
| tabBarActiveTextColor | tabBar激活Tab文字颜色	| string | | false |
| tabBarInactiveTextColor | tabBar非激活Tab文字颜色 | string | | false |
| tabBarlineColor | tabBar侧划线颜色 | string | | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "vtabs": "mini-antui/es/vtabs/index",
    "vtab-content": "mini-antui/es/vtabs/vtab-content/index"
  }
}
```

## vtab-content

视图内容

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| anchor | 列表唯一锚点值 | string | | | |

## examples

```axml
<view>
  <vtabs
    tabs="{{tabs}}">
    <block a:for="{{tabs}}">
      <vtab-content anchor="{{item.anchor}}">
        <view style="height: 300px; border-bottom: 1px solid #000; box-sizing: border-box">
          <text class="sticky-title">content of {{item.title}}</text>
        </view>
      </vtab-content>
    </block>
  </vtabs>
</view>
```

```javascript
Page({
  data: {
    tabs: [
      { title: '选项一', anchor: 'a' },
      { title: '选项二', anchor: 'b' },
      { title: '不超过五字', anchor: 'c' },
      { title: '选项四', anchor: 'd' },
      { title: '选项五', anchor: 'e' },
    ],
  },
});
```
