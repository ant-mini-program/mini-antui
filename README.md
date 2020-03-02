<h1 align="center">重要说明</h1>

鉴于支付宝整体设计规范升级，以及为了能够将提供更多的组件能力，支持主题切换等功能，我们对组件进行了一次深度改造，同时支付宝小程序能力在多端底层打通，我们的组件库也将支持多端接入，我们将品牌升级为 <a href="https://github.com/Alibaba-mp/mini-ali-ui">mini-ali-ui</a>。

<p>mini-antui 将不再继续维护，源码保留，如有 bug 会在 <a href="https://github.com/Alibaba-mp/mini-ali-ui">mini-ali-ui</a> 进行 fix 操作。因此后续所有的版本更新升级将转移到 <a href="https://github.com/Alibaba-mp/mini-ali-ui">mini-ali-ui</a>。品牌虽然改变，但我们的服务不会变，我们将继续为广大阿里小程序开发者服务，感谢各位的支持和鼓励。</p>

<p align="center">
  <img width="300" src="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*gWo-TLFGp38AAAAAAAAAAABkARQnAQ" >
</p>

## mini-ali-ui 特性
* 基于 **Alipay Design** 设计规范；
* 支持多端小程序（支付宝，淘宝，钉钉等）；
* 支持主题配置切换；
* 支持 `px` 与 `rpx`；

<p align="center">
  <img width="200" src="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original">
</p>


# Mini AntUI

[![npm package](https://img.shields.io/npm/v/mini-antui.svg?style=flat-square)](https://www.npmjs.com/package/mini-antui)
[![GitHub stars](https://img.shields.io/github/stars/ant-mini-program/mini-antui.svg)](https://github.com/ant-mini-program/mini-antui/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ant-mini-program/mini-antui.svg)](https://github.com/ant-mini-program/mini-antui/network/members)
[![NPM downloads](https://img.shields.io/npm/dm/mini-antui.svg?style=flat-square)](https://www.npmjs.com/package/mini-antui)
[![GitHub issues](https://img.shields.io/github/issues/ant-mini-program/mini-antui.svg)](https://github.com/ant-mini-program/mini-antui/issues)
[![GitHub license](https://img.shields.io/github/license/ant-mini-program/mini-antui.svg)](https://github.com/ant-mini-program/mini-antui/blob/master/LICENSE)

## 示例

<p align="left">
  <img width="250" src="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*xXX3TqsZimMwfA5KoKInYQBjAQAAAQ/original">
</p>

## 链接
- [mini-antui官网文档](https://docs.alipay.com/mini/component-ext/overview-ext-common)
- [支付宝小程序](https://mini.open.alipay.com/channel/miniIndex.htm)
- [开发工具](https://docs.alipay.com/mini/ide/overview)
- [开发规范](https://github.com/ant-mini-program/mini-antui/wiki/%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83)

## 特性

- 基于`Advance Design`设计规范
- 使用[支付宝小程序](https://mini.open.alipay.com/channel/miniIndex.htm)开发

## 安装

```bash
$ npm install mini-antui --save
```

## 使用

在页面json中文件中进行注册，如card组件的注册如下所示：

```json
{
  "usingComponents": {
    "card": "mini-antui/es/card/index",
  }
}
```

在axml文件中进行调用：
```html
<card
  thumb="{{thumb}}"
  title="卡片标题2"
  subTitle="副标题非必填2"
  onClick="onCardClick"
  info="点击了第二个card"
/>
```

详细使用说明请参照官方文档[使用自定义组件](https://docs.alipay.com/mini/framework/use-custom-component)

## 贡献

如果你有好的意见或建议，欢迎给我们提[issue](https://github.com/ant-mini-program/mini-antui/issues)。
