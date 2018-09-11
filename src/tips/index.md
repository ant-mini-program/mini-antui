# tips 

小提示

## tips-dialog

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
|className| 自定义class | String| | false |
| show | 控制组件是否展示 | Boolean | true | false |
| type | `dialog`表示对话框的样式类型，`rectangle`表示矩形的样式类型。 | String | dialog | false |
| onCloseTap | 当`type`值为`rectangle`时，组件点击关闭icon的回调 | function | (): void | false |
| iconUrl | 展示icon的url地址 | String | | false |

### slots

|slotName | 说明 |
|----|----|
|content | 用于渲染提示的正文内容 |
|operation | 用于渲染右侧操作区域 |

## tips-plain

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
|className| 自定义class | String| | false |
| time | 自动关闭时间(单位毫秒) | Number | 5000毫秒| false |
| onClose | 回调并关闭提示框 | function | (): void | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "tips-dialog":"mini-antui/es/tips/tips-dialog/index",
    "tips-plain":"mini-antui/es/tips/tips-plain/index"
  }
}
```

## examples

### tips-dialog

```axml
<tips-dialog
    show="{{showDialog}}"
    className="dialog"
    type="dialog"
  >
  <view class="content" slot="content">
    <view>hello,</view>
    <view>欢迎使用小程序扩展组件库mini-antui</view>
  </view>
  <view slot="operation" class="opt-button" onTap="onDialogTap">知道了</view> 
</tips-dialog>
```

### tips-plain

```axml
<tips-plain onClose="onClose" time="{{time}}">我知道了</tips-plain>
```






