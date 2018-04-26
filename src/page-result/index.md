# PageResult异常页面

异常页面

## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| type | 异常页面类型，可选，网络异常`network`,服务繁忙`busy`,服务异常`error`,空状态`empty`,用户注销`logoff` | String | network | false |
| local | 是否是局部异常内容 | Boolean | false | false |
| title | 错误提示标题 | String |  | false |
| brief | 错误提示简要 | String |  | false |

## using

```
// page.json
{
  "defaultTitle": "异常反馈",
  "usingComponents":{
    "page-result":"@alipay/mini-antui/page-result/index",
  }
}
```

## examples

```axml
<view>
  <page-result
    type="network"
    title="网络不给力"
    brief="事件上最遥远的距离莫过于此" />
</view>
```
