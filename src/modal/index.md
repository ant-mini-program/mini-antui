## modal
| 属性 | 说明 | 类型 | 默认值 |
|----|----|----|----|
|className| 自定义class | String| |
|show| 是否展示`modal` | Boolean| `false` |
|showClose| 是否渲染`关闭` | Boolean| `false` |
|onModalClick| 点击`footer`部分的回调 | function()|  |
|onModalClose| 点击`关闭`的回调, `showClose`为false时无需设置  | function()|  |

### slots
|slotName | 说明 |
|----|----|
|header | 可选，modal头部|
|footer | 可选，modal尾部 |

### using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "modal": "@alipay/mini-antui/es/modal/index"
  }
}
```

### examples

```axml
// page.axml
<view>
	<button onTap="openModal">打开modal</button>
	<modal show="{{modalOpened}}" onModalClick="onModalClick" onModalClose="onModalClose">
		<view style="text-align: center;">
			<text>让员工用支付宝扫一扫，添加为店员</text>
		</view>
		<image src="https://tfsimg.alipay.com/images/mobilecodec/TB1JjWmXkyEDuNjme6tXXXIKXXa" mode="widthFix" style="width: 100%;" />
		<view style="text-align: center;">
			<text>二维码每分钟自动更新</text>
		</view>
		<view slot="footer">关闭</view>
	</modal>
</view>
```

```js
// page.js
Page({
  data: {
    modalOpened: false,
  },
  openModal() {
    this.setData({
      modalOpened: true,
    });
  },
  onModalClick() {
    // other code
    this.setData({
      modalOpened: false,
    });
  },
  onModalClose() {
    this.setData({
      modalOpened2: false,
    });
  }
});
```
