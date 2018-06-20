# filter

用作标签卡筛选。

## filter

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| show | 是否显示 可选值 show or hide | String | hide | false |
| max | 可选数量最大值，1为单选 | Number | 10000 | false |
| onChange | 多选时提交选中回调 | function | (ev: arry): void | false |

## filter-item

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|
| className | 自定义样式 | String | | false |
| value | 值 | String | | true |
| id | 自定义标识符 | number or String | | false |
| selected | 默认选中 | boolean |false | false |
| onChange | 单选时提交选中回调 | function | (ev: arry): void | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "filter":"mini-antui/es/filter/index",
    "filter-item":"mini-antui/es/filter/filter-item/index"
  }
}
```
## examples
单选
```axml
<filter show="{{show}}" max="{{1}}">
  <block a:for="{{items}}">
    <filter-item value="{{item.value}}" id="{{item.id}}" onChange="handleCallBack" selected="{{item.selected}}"/>
  </block>
</filter>
```
多选
```axml
<filter show="{{show}}" max="{{5}}" onChange="handleCallBack">
  <block a:for="{{items}}">
    <filter-item value="{{item.value}}" id="{{item.id}}" selected="{{item.selected}}"/>
  </block>
</filter>
```
