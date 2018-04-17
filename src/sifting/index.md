# sifting 

用作标签卡筛选。

## sifting

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|
| max | 可选数量最大值 | Number | 10000 | false |
| onChange | 提交回调 | function | | true |

## sifting-item

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|
| className | 自定义样式 | String | | false |
| value | 值 | String | | true |
| id | 自定义标识符 | number or String | | false |
| selected | 默认选中 | boolean |false | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "sifting":"@alipay/mini-antui/es/sifting/index",
    "sifting-item":"@alipay/mini-antui/es/sifting-item/index"
  }
}
```
## examples

```axml
<sifting onChange="callBackFn" max="{{6}}">
<sifting-item value="水果" id="1"/>
<sifting-item value="土豆" id="2"/>
</sifting>
```




