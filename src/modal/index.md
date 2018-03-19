## modal
| 属性 | 说明 | 类型 | 默认值 |
|----|----|----|----|
|className| 自定义class | String| |
|show| 是否展示`modal` | Boolean| `false` |
|showClose| 是否渲染`关闭` | Boolean| `false` |
|onModalClick| 点击`footer`部分的回调 | function()|  |
|onModalClose| 点击`关闭`的回调 | function()|  |

### slots
|slotName | 说明 |
|----|----|
|header | 可选，modal头部|
|footer | 可选，modal尾部|

### using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "modal":"@alipay/mini-antui/modal/index"
  }
}
```

### examples

```axml
// page.axml
<list>
  <view slot="header">列表头部</view>
  <block a:for="{{items}}">
    <list-item
      key="item-{{index}}"
      last="{{index === (items.length - 1)}}"
    >
      {{item.title}}
      <view class="am-list-brief">{{item.brief}}</view>
    </list-item>
  </block>
  <view slot="footer">列表尾部</view>
</list>
```
