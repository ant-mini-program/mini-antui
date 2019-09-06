## List 列表

列表。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/tAvsiCUfvPlAYSRQLHOs.jpeg" width="154" height="190" />

## list

| 属性名 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| className | 自定义class | String| |
| loadMore | 显示加载更多 item。`load`：显示加载更多；`over`：显示加载完成无更多 | String| |
| loadContent | 需结合 `loadMore` 属性使用，用于文案展示 | Array | ['加载更多...','-- 数据加载完了 --'] |

### loadMore 使用介绍
当需要使用无限循环列表时，可将 `list` 组件放置入到 [`scroll-view`](https://docs.alipay.com/mini/component/scroll-view) 中，根据需求对 [`scroll-view`](https://docs.alipay.com/mini/component/scroll-view) 添加相对应的属性，比如：
```xml
<scroll-view style="height: 80vh;" scroll-y onScrollToLower="onScrollToLower" enable-back-to-top="true">
  <list loadMore="{{loadMore}}" loadContent="{{loadContent}}">
    <list-item>...</list-item>
  </list>
</scroll-view>
```
```javascript
Page({
  data: {
    loadMore: '',
    loadContent: [
      '马不停蹄加载更多数据中...',
      '-- 已经到底了，加不了咯 --',
    ],
  },
  onScrollToLower() {
    // 根据实际数据加载情况设定 loadMore 的值即可，分别为 load 和 over
    this.setData({
      loadMore: 'load',
    })
  },
})
```

### slots

| slotName | 说明 |
| ---- | ---- |
| header | 可选，列表头部 |
| footer | 可选，用于渲染列表尾部 |

## list-item

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| className | 自定义的class | String | |
| thumb | 缩略图，图片地址 | String |  |
| arrow | 是否带剪头 | Boolean | false |
| align | 子元素垂直对齐，可选`top`,`middle`,`bottom` | String | middle |
| index | 列表项的唯一索引 | String | |
| onClick | 点击list-item时调用此函数 | ({index, target}) => void | |
| last | 是否是列表的最后一项 | Boolean |false |
| disabled | 不可点击，且无hover效果 | Boolean | false |
| multipleLine | 多行 | Boolean | false |
| wrap | 是否换行，默认情况下，文字超长会被隐藏 | Boolean | false |

### slots

| slotname | 说明 |
| ---- | ---- |
| extra | 可选，用于渲染列表项右边说明 |
| prefix | 可选，用于渲染列表左侧说明 |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index"
  }
}
```

```html
<view>
  <list>
    <view slot="header">
      列表头部
    </view>
    <block a:for="{{items}}">
      <list-item
        thumb="{{item.thumb}}"
        arrow="{{item.arrow}}"
        align="{{item.align}}"
        index="{{index}}"
        onClick="onItemClick"
        key="items-{{index}}"
        last="{{index === (items.length - 1)}}"
      >
      {{item.title}}
        <view class="am-list-brief">{{item.brief}}</view>
        <view slot="extra">
          {{item.extra}}
        </view>
      </list-item>
    </block>
    <view slot="footer">
      列表尾部
    </view>
  </list>
  <list>
    <view slot="header">
      列表头部
    </view>
    <block a:for="{{items2}}">
      <list-item
        thumb="{{item.thumb}}"
        arrow="{{item.arrow}}"
        onClick="onItemClick"
        index="items2-{{index}}"
        key="items2-{{index}}"
        last="{{index === (items2.length - 1)}}"
      >
       {{item.title}}
        <view class="am-list-brief">{{item.brief}}</view>
        <view a:if="{{item.extra}}" slot="extra">
          {{item.extra}}
        </view>
      </list-item>
    </block>
    <view slot="footer">
      列表尾部
    </view>
  </list>
</view>
````

```javascript
Page({
  data: {
    items: [
      {
        title: '单行列表',
        extra: '详细信息',
      },
    ],
    items2: [
      {
        title: '多行列表',
        arrow: true,
      },
      {
        title: '多行列表',
        arrow: 'up',
      },
      {
        title: '多行列表',
        arrow: 'down',
      },
      {
        title: '多行列表',
        arrow: 'empty',
      },
      {
        title: '多行列表',
      },
    ],
  },
  onItemClick(ev) {
    my.alert({
      content: `点击了第${ev.index}行`,
    });
  },
});
```