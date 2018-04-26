# tips 

小提示

## tips-dialog

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|
|className| 自定义class | String| | false |
| title | 标题文本 | String | | false |
| onClose | 回调并关闭提示框 | function | (): void | false |

## tips-plain

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|
|className| 自定义class | String| | false |
| time | 自动关闭时间 | Number | 5000毫秒| false |
| onClose | 回调并关闭提示框 | function | (): void | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "tips-dialog":"@alipay/mini-antui/es/tips/tips-dialog/index",
    "tips-plain":"@alipay/mini-antui/es/tips/tips-plain/index"
  }
}
```
## examples

```axml
  <tips-dialog onClose="onClose" title="{{title}}">很高兴为你服务</tips-dialog>
```
```axml
  <tips-plain onClose="onClose" time="{{time}}">我知道了</tips-plain>
```






