# Calendar 日历

日历。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/DFLnQbhXIrEgpCAIIBOv.jpeg" width="154" height="190" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| type | 选择类型 `single`: 单日 `range`: 日期区间 | String | single | false
| haveYear | 是否展示年份控制箭头 | Boolean | false | false
| tagData | 标记数据，其中包括日期`date`，标记`tag`，是否禁用`disable`，标记颜色`tagColor`，tagColor有4个可选值，1.#f5a911，2.#e8541e 3.#07a89b 4.#108ee9，5.#b5b5b5 | Array<date, tag, tagColor> | | false
| onSelect | 选择区间回调 | ([startDate, endDate]) => void | | false
| onMonthChange | 点击切换月份时回调，带两个参数currentMonth切换后月份和prevMonth切换前月份 | (currentMonth, prevMonth) => void | | false |
| onSelectHasDisableDate | 选择区间包含不可用日期 | (currentMonth, prevMonth) => void | | false |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "calendar": "mini-antui/es/calendar/index"
  }
}
```

```html
<view>
  <calendar
    type="range"
    haveYear="{{true}}"
    tagData="{{tagData}}"
    onSelect="handleSelect"
    onMonthChange="onMonthChange"
    onYearChange="onYearChange"
    onSelectHasDisableDate="onSelectHasDisableDate" />
</view>
```

```javascript
Page({
  data: {
    tagData: [
      { date: '2019-09-14', tag: '还房贷', tagColor: 5 },
      { date: '2019-09-28', tag: '公积金', tagColor: 2 },
      { date: '2019-09-18', tag: 'xx', disable: true },
    ],
  },
  handleSelect() {},
  onMonthChange() {},
  onYearChange() {},
  onSelectHasDisableDate() {
    my.alert({
      content: 'SelectHasDisableDate',
    });
  },
});
```