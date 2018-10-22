# Badge 徽标

红点、数字或文字。用于告诉用户待处理的事物或者更新数。

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| text | 展示的数字或文案 | string/number |  | false |
| dot | 不展示数字，只有一个小红点 | boolean |  | false |
| overflowCount | 展示封顶的数字值，超出部分用“+”号表示 | number | 99 | false |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index",
    "card": "mini-antui/es/badge/index"
  }
}
```

```html
<view>
  <list>
    <block a:for="{{items}}">
      <list-item
        arrow="{{true}}"
        index="{{index}}"
        key="items-{{index}}"
        last="{{index === (items.length - 1)}}"
      >
        <view>
          <badge a:if="{{item.isWrap}}" text="{{item.text}}" dot="{{item.dot}}">
            <view slot="extra" style="height: 26px; width: 26px; background-color: #ddd;"></view>
          </badge>
          <text style="margin-left: {{ item.isWrap ? '12px' : '0' }}">{{item.intro}}</text>
        </view>
        <view slot="extra">
          <badge a:if="{{!item.isWrap}}" text="{{item.text}}" dot="{{item.dot}}" overflowCount="{{item.overflowCount}}" /> 
        </view>
      </list-item>
    </block>
  </list>
</view>
```

```javascript
Page({
  data: {
    items: [
      {
        dot: true,
        text: '',
        isWrap: true,
        intro: 'Dot Badge',
      },
      {
        dot: false,
        text: 1,
        isWrap: true,
        intro: 'Text Badge',
      },
      {
        dot: false,
        text: 99,
        isWrap: false,
        intro: '数字',
      },
      {
        dot: false,
        text: 100,
        overflowCount: 99,
        isWrap: false,
        intro: '数字超过overflowCount',
      },
      {
        dot: false,
        text: 'new',
        isWrap: false,
        intro: '文字',
      },
    ],
  },
});
```