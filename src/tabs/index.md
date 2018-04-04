# Tabs标签页

用于让用户在不同的视图中进行切换

## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| tabs | tab数据 | Array |  | true |
| onTabClick | tab 被点击的回调 | (index: number) => void | | false |
| onChange | tab变化时触发 | (index: number) => void | | false |
| tabBarBackgroundColor | tabBar背景色	| string | | false |
| tabBarActiveTextColor | tabBar激活Tab文字颜色	| string | | false |
| tabBarInactiveTextColor | tabBar非激活Tab文字颜色 | string | | false |
| tabBarUnderlineColor | tabBar下划线颜色 | string | | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "tabs":"@alipay/mini-antui/es/tabs/index",
  }
}
```

## tab-content

视图内容

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| index | 列表项的唯一索引 | string | | | |

## examples

```axml
<view>
  <tabs
    tabs="{{tabs}}"
    onTabClick="handleTabClick"
    onChange="handleTabChange"
  >
    <block a:for="{{tabs}}">
      <tab-content key="{{index}}">
        <view class="tab-content">content of {{item.title}}</view>
      </tab-content>
    </block>
  </tabs>
</view>
```
