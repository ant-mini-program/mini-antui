## input-item

| 属性 | 说明 | 类型 | 默认值 |
|----|----|----|----|
|className| 自定义的class | String| '' |
|labelCls| 自定义label的class | String | '' |
|inputCls| 自定义input的class | String | '' |
|last| 是否最后一行 | Boolean | `false` |
|value| 初始内容 | string | '' |
|name| 组件名字，用于表单提交获取数据	 | String | '' |
|type | input 的类型，有效值：`text`, `number`, `idcard`, `digit`	| String |`text` |
|password| 是否是密码类型	 | Boolean | `false` |
|placeholder | 占位符	 | String | '' |
|placeholderStyle | 指定 placeholder 的样式 | String | '' |
|placeholderClass | 指定 placeholder 的样式类 | String | '' |
|disabled | 是否禁用	 | Boolean | `false` |
|maxlength | 最大长度	 | Number | 140 |
|focus | 获取焦点	 | Boolean | `false` |
|onInput | 键盘输入时触发input事件，event.detail = {value: value}	 | EventHandle |  |
|onConfirm | 点击键盘完成时触发，event.detail = {value: value} | EventHandle |  |
|onFocus | 聚焦时触发，event.detail = {value: value} | EventHandle |  |
|onBlur | 失去焦点时触发，event.detail = {value: value} | EventHandle |  |

### examples

```axml
<list-item
  className="{{index === 0 ? 'am-list-sticky' : ''}}"
  thumb="{{item.thumb}}"
  arrow="{{item.arrow}}"
  align="{{item.align}}"
  index="{{index}}"
  onClick="onItemClick"
  key="items-{{index}}"
  multipleLine="{{true}}"
  wrap="{{true}}"
>
  {{item.title}}
  <view class="am-list-brief">{{item.brief}}</view>
  <view slot="extra">
    {{item.extra}}
  </view>
</list-item>

```
