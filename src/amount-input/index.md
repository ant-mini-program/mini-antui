# AmountInput 金额输入

金额输入框。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/qZmlRHhFariKmpfXMsTC.jpeg" width="154" height="190" />

## Screenshot

<img src="https://gw.alipayobjects.com/zos/rmsportal/aLOCuwNVDPFcUFObYAxb.png" width="375" height="257" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| title | 左上角标题 | String |  | false |
| extra | 左下角说明 | String |  | false |
| value | 输入框当前值 | String |  | false |
| btnText | 右下角按钮文案 | String |  | false |
| placeholder | placeholder | String | | false |
| focus | 自动获取光标 | Boolean | false | false |
| onInput | 键盘输入时触发 | (value: string) => void | | false |
| onClear | 点击 clear 图标触发 | (val: string) => void | | false |
| onButtonClick | 点击右下角按钮时触发 | (val: string) => void | | false |
| onConfirm | 点击键盘确认按钮时触发 | (val: string) => void | | false |
| maxLength | 最多允许输入的字符个数 | Number | | false |


## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "amount-input": "mini-antui/es/amount-input/index"
  }
}
```

```html
<view>
  <amount-input
    title="转入金额"
    extra="建议转入¥100以上金额"
    placeholder="输入转入金额"
    value="{{value}}"
    maxLength="5"
    focus="{{true}}"
    btnText="全部提现"
    onClear="onInputClear"
    onInput="onInput"
    onConfirm="onInputConfirm" />
</view>
```

```javascript
Page({
  data: {
    value: '200',
  },
  onInputClear() {
    this.setData({
      value: '',
    });
  },
  onInputConfirm() {
    my.alert({
      content: 'confirmed',
    });
  },
  onInput(value) {
    this.setData({
      value,
    });
  },
  onButtonClick() {
    my.alert({
      content: 'button clicked',
    });
  },
  onInputFocus() {},
  onInputBlur() {},
});
```
