## message组件

1. 显示某个操作的结果
2. 支持5种类型（success、cancel、info、waiting、warn）
3. 最多显示两个按钮，可以分别设置文本、是否可点击、及绑定tap函数

## API


属性 | 说明 | 类型 | 默认值 | 必选  
----- | ----- | ----- | ----|---- 
className| 自定义的class | String| 否 
title | 主标题 | String  | '' | 是
subTitle | 副标题 | String  | '' | 否
mainButton | 主按钮的文本和可用性相关 | Object, 如{buttonText: "确认",disabled: false}   |  | 否 
subButton | 副按钮的文本和可用性相关 | Object, {buttonText: "取消",disabled: false}  |  |  否 
onTapMain | 主按钮的点击函数 | Function  | ()=>{} | 否
onTapSub | 副按钮的点击函数 | Function  | ()=>{} | 否

## using
``` js
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "message":"mini-antui/es/message/index",
  }
}
```
## examples
```
<message
  className="test" 
  type="success" 
  mainButton="{{messageButton.mainButton}}" 
  onTapMain="goBack">
</message>

<message
  title="{{title}}" 
  type="cancel" 
  mainButton="{{messageButton.mainButton}}" 
  subButton="{{messageButton.subButton}}" 
  onTapMain="goBack"
  onTapSub="doNothing">
</message>
``` 