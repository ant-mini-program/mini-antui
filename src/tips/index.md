# tips 

小提示

## tips-dialog

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|
| title | 标题文本 | String | | false |
| onTipsDialogClose | 关闭提示框并回调 | function | (): void | false |


## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "tips":"@alipay/mini-antui/es/tips/index",
    "tips-dialog":"@alipay/mini-antui/es/tips/tips-dialog/index",
    "tips-plain":"@alipay/mini-antui/es/tips/tips-plain/index"
  }
}
```
## examples

```axml
<tips>
  <tips-dialog onTipsDialogClose="onClick" title="{{title}}">很高兴为你服务</tips-dialog>
</tips>
```
```axml
<tips>
  <tips-plain>我知道了</tips-plain>
</tips>
```






