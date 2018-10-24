# Grid 宫格

宫格。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/ebqnVPiuCCoOKXwioUUH.jpeg" width="154" height="190" />

## Screenshot

<img src="https://gw.alipayobjects.com/zos/rmsportal/EISqEeuYXaUNMVPvrAAj.png" width="308" height="305" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| list | 宫格数据,[{'icon': 'imgUrl', 'text': '标题'}]	| Array | [] | true |
| onGridItemClick | 点击宫格项回调 | (index: number) => void | () => {} | false |
| columnNum | 每行显示几列 | `2`、`3`、`4`、`5` | `3` | false |
| circular | 是否圆角 | Boolean | `false` | false |
| hasLine | 是否有边框	| Boolean | `true` | false |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "grid": "mini-antui/es/grid/index"
  }
}
```

```html
<grid onGridItemClick="onItemClick" columnNum="{{3}}" list="{{list3}}" />
```

```javascript
Page({
  data: {
    list3: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
    ],
  },
  onItemClick(ev) {
    my.alert({
      content: ev.detail.index,
    });
  },
});
```