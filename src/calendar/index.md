# Calendar日历

日历

## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| type | 选择类型 one: 单日 range: 日期区间 | 'one'/'range' | 'one'| false
| tagData | 标记数据，其中包括日期`date`，标记`tag`，标记颜色`tagColor`，tagColor有4个可选值，1.#f5a911，2.#e8541e 3.#07a89b 4.#108ee9，5.#b5b5b5 | Array<date, tag, tagColor> | | false
| onSelect | 选择区间回调 | ([startDate, endDate]) => void | | false
| onMonthChange | 点击切换月份时回调，带两个参数currentMonth切换后月份和prevMonth切换前月份 | (currentMonth, prevMonth) => void | | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "calendar":"mini-antui/calendar/index",
  }
}
```

## examples

```axml
<view>
  <calendar
    type="one"
    tagData="{{tagData}}"
    onSelect="handleSelect" />
</view>
```
