# Stepper 步进器

用作增加或者减少当前数值。

## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|---|
| min | 最小值 | Number | 0 | true |
| max | 最大值 | Number | 10000 | true |
| value | 初始值 | Number | 10 | true |
| step | 每次改变步数，可以为小数	| Number | 1 | false |
| onChange | 变化时回调函数 | Funtion(value) | ()=> {} | false |
| disabled | 禁用 | Boolean | false | false |
| readOnly | input 只读 | Boolean | false | false |
| showNumber | 是否显示数值，默认不显示 | Boolean | false | false |



## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "stepper":"mini-antui/es/stepper/index",
  }
}
```

## examples

```axml
	<list>
    <list-item disabled="{{true}}">
      Show number value
      <view slot="extra">
        <stepper onChange="callBackFn" step={{1}} showNumber readOnly="{{false}}" value={{9}} min={{2}} max={{12}} />
      </view>
    </list-item>
    <list-item disabled={{true}}>
      Disabled
      <view slot="extra">
        <stepper onChange="callBackFn" showNumber value={{11}} min={{2}} max={{12}} disabled />
      </view>
    </list-item>
  </list>
```
