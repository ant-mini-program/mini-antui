## Notice 引导

引导。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/DJfecsuPIyuOUHZtVFxG.jpeg" width="154" height="190" />

## Screenshot

<img src="https://gw.alipayobjects.com/zos/rmsportal/BunLlelWGUkvnqoyrxac.PNG" width="375" height="225" />

| 属性名 | 描述 | 类型 | 默认值 |
|----|----|----|----|
|mode| 提示类型,link,closable,'' | String|''|
|action| 提示显示文本| String|''|
|show| 是否显示通告栏| boolean|true|
|onClick| 点击按钮回调 | (): void| - |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "notice": "mini-antui/es/notice/index"
  }
}
```

```html
<view class="demo-title">NoticeBar 通告栏</view>
<view class="demo-item">
  <notice>因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡</notice>
</view>
<view class="demo-item">
  <notice mode="link" onClick="linkClick">因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡</notice>
</view>
<view class="demo-item">
  <notice mode="closable" onClick="closableClick" show="{{closeShow}}">因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡</notice>
</view>
<view class="demo-item">
  <notice mode="link" action="去看看" onClick="linkActionClick">因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡</notice>
</view>
<view class="demo-item">
  <notice mode="closable" action="不再提示" onClick="closableActionClick" show="{{closeActionShow}}">因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡</notice>
</view>
```

```javascript
Page({
  data:{
    closeShow:true,
    closeActionShow:true
  },
  linkClick() {
    my.showToast({
      content: '你点击了图标Link NoticeBar',
      duration: 3000
    });
  },
  closableClick() {
    this.setData({
      closeShow:false
    })
    my.showToast({
      content: '你点击了图标close NoticeBar',
      duration: 3000
    });
  },
  linkActionClick() {
    my.showToast({
      content: '你点击了文本Link NoticeBar',
      duration: 3000
    });
  },
  closableActionClick() {
    this.setData({
      closeActionShow:false
    })
    my.showToast({
      content: '你点击了文本close NoticeBar',
      duration: 3000
    });
  }
})
```
