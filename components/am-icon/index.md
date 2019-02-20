# AMIcon

图标。

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| type | icon类型 | String | | true |
| size | icon 大小，单位px | String | | false |
| color | icon 颜色，同css的color | String | | false |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "am-icon": "mini-antui/es/am-icon/index",
  }
}
```

```html
<view>
  <am-icon type="like" size="{{24}}" color="#333" />
</view>
```