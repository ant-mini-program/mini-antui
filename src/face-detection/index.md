# face-detection 人脸检测

用于打开摄像头进行人脸检测

**注意：该组件所需要的客户端版本为10.1.22及以后，可使用my.getSystemInfo进行版本判断**

## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| facing | 使用的摄像头，front表示前置摄像头, back表示后置摄像头 | string | front | false |
| appName | 用于显示在界面上的小程序名称 | string |  | true |
| serviceName | 用于显示在界面上的服务名称 | string |  | true |
| onFaceStatusChange | 人脸图片数据返回，该方法返回值必须为promise，imageBase64表示图片内容，faceRect表示人脸范围 | ({ imageBase64: string, faceRect: array  }, { doLeftFaceCheck: function, doRightFaceCheck: function }) => void | | false |
| useLiveFaceCheck | 是否开启活体检测 | boolean | false | false |
| onFail | 人脸识别失败，code表示错误码，message表示错误信息 | ({ code: number, message: string }) => void |  | false |

**说明：useLiveFaceCheck为开启活体检测，支持检测左脸和右脸，业务如果有活体检测的需求就设置为true，相应的在onFaceStatusChange中进行左右脸的检测,可以只进行左脸检测或者有脸检测或者左右脸都检测**

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "face-detection": "mini-antui/es/face-detection/index",
  }
}
```


## examples

```axml
<view>
  <face-detection
    appName="demo小程序"
    serviceName="身份录入"
    onFaceStatusChange="onFaceStatusChange"
    onFail="onFail"
    useLiveFaceCheck="{{true}}"
  />
</view>
```

```javascript
Page({
  onFaceStatusChange(data, context) {
    return new Promise(async (resolve) => {
      // do something
      console.log('data', data);
      const leftResult = await context.doLeftFaceCheck();
      const rightResult = await context.doRightFaceCheck();
      // 左右脸都检测一遍
      if (leftResult && rightResult) {
        resolve();
      }
    });
  },

  onFail(error) {
    console.log('error', error);
  },
});
```
