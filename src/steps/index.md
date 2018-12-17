# steps 步骤进度条

根据步骤显示的进度条

## steps

| 属性 | 说明 | 类型 | 可选 | 默认值 | 必选 |
|----|----|----|----|----|----|
| activeIndex | 当前激活步骤 | number | - | 1 | true |
| failIndex | 当前失败步骤(只在vertical模式下生效) | number | - | 0 | false |
| direction | 显示方向 | string | vertical/horizontal | horizontal | false |
| size | 统一的icon大小，单位为px | number | - | 0 | false |
| items | 步骤详情 | array[{title, description, icon, activeIcon, size}] | - | [] | true |
| items.title | 步骤详情标题 | string | - |  | true |
| items.description | 步骤详情描述 | string | - |  | true |
| items.icon | 尚未到达步骤的icon(只在vertical模式下生效) | string | - |  | true |
| items.activeIcon | 已到达步骤的icon(只在vertical模式下生效) | string | - |  | true |
| items.size | 已到达步骤icon的图标大小，单位为px(只在vertical模式下生效) | number | - |  | true |
| className | 最外层覆盖样式 | string | - | '' | false |

## using

```
// page.json
{
  "usingComponents":{
    "steps":"mini-antui/es/steps/index"
  }
}
```

## examples

```axml
<steps 
  activeIndex="{{activeIndex}}"
  items="{{items}}"
></steps>
```
```javascript
Page({
  data: {
    activeIndex: 1,
    items: [{
      title: '步骤1',
      description: '这是步骤1',
    }, {
      title: '步骤2',
      description: '这是步骤2',
    }, {
      title: '步骤3',
      description: '这是步骤3',
    }]
  }
});
```