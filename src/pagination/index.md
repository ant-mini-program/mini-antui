## Pagination 分页

分页

扫码体验：

| 属性名 | 描述 | 类型 | 默认值 |
|----|----|----|----|
| arrow | 箭头图标按钮类型 | Boolean |false|
| total | 总页数 | Number | 0 |
| current | 当前页数 | Number | 0 |
| prevText | 前翻分页说明 | String | '' |
| nextText | 后翻分页说明 | String | '' |
| showPage | 是否显示页数 | Boolean | true |
| btnClass | 分页按钮样式，限于文字类型按钮 | String | '' |
| onChange | 翻页回调函数 | Function | noop |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "notice": "mini-antui/es/pagination/index"
  }
}
```

```html
<view>
  <view class="demo-title">基础用法</view>
  <pagination total="{{20}}" current="{{1}}"/>
  <view class="demo-title">图标按钮</view>
  <pagination arrow total="{{20}}" current="{{1}}"/>
  <view class="demo-title">翻页说明</view>
  <pagination arrow prevText="左侧说明" nextText="右侧说明" showPage="{{false}}" total="{{20}}" current="{{1}}"/>  
  <view class="demo-title">隐藏页数</view>
  <pagination arrow showPage="{{false}}" total="{{20}}" current="{{1}}"/>
  <view class="demo-title">自定义文字按钮样式</view>
  <pagination showPage="{{false}}" total="{{20}}" current="{{1}}" btnClass="pagination-btn--disabled"/>
  <pagination className="pagination--actived" showPage="{{false}}" total="{{20}}" current="{{1}}" btnClass="pagination-btn--actived"/>
  <view class="demo-title">完整用法</view>
  <pagination arrow prevText="左侧说明" nextText="右侧说明文字过长测试" total="{{20}}" current="{{1}}"/>
  <pagination className="pagination--complete-usage" prevText="左侧说明文字过长测试" nextText="右侧说明文字过长测试" total="{{200}}" current="{{100}}"/>
</view>
```

```css
.demo-title {
  color: #333;
  padding: 15px;
  font-size: 14px;
}

.pagination--actived, .pagination--complete-usage {
  margin-top: 10px;
}

.pagination-btn--actived {
  color: #108ee9;
}

.pagination-btn--disabled {
  color: rgba(0, 0, 0, 0.25);
}
```

```javascript
Page({})
```
