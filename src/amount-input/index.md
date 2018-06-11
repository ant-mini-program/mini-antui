# AmountInput 金额输入

金额输入

## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| title | 左上角标题 | String |  | false |
| extra | 左下角说明 | String |  | false |
| value | 输入框当前值 | String |  | false |
| btnText | 右下角按钮文案 | String |  | false |
| placeholder | placeholder | String | | false |
| focus | 自动获取光标 | Boolean | false | false |
| onInput | 键盘输入时触发 | (value: string) => void | | false |
| onClear | 点击 clear 图标触发 | (val: string) => void | | false |
| onSubmit | 点击右下角按钮时触发 | (val: string) => void | | false |
| maxLength | 最多允许输入的字符个数 | Number | | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "amount-input":"mini-antui/es/amount-input/index",
  }
}
```

## examples

```axml
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
    onSubmit="onInputSubmit" />
</view>
```
