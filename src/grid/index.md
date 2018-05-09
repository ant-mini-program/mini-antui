# 宫格

## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| list | 宫格数据,[{'icon': 'imgUrl', 'text': '标题'}]	| Array | [] | true |
| onGridItemClick | 点击宫格项回调 | (index: number) => void | () => {} | false |
| columnNum | 每行显示几列 | `2`、`3`、`4`、`5` | `3` | false |
| circular | 是否圆角 | Boolean | `false` | false |
| hasLine | 是否有边框	| Boolean | `true` | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "grid":"mini-antui/es/grid/index"
  }
}
```


## examples

```js
Page({
  data: {
    list5: [
      {
        "icon": "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        "text": "标题文字"
      },
      ...
    ],
  },
  onItemClick: function(ev) {
    my.alert({
      content: ev.detail.index,
    });
  }
}
```

```axml
<grid onGridItemClick="onItemClick" columnNum="{{5}}" list="{{list5}}" />
```
