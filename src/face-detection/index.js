Component({
  props: {
    facing: 'front',
    appName: '',
    serviceName: '',
  },
  didMount() {
    this.webViewContext = my.createWebViewContext('am-face-detection');
  },
  didUnMount() {
    this.webViewContext.postMessage({ action: 'releaseCamera' });
  },
  methods: {
    onMessage(e) {
      const { onFaceStatusChange, onFail } = this.props;
      const { action, data } = e.detail;

      if (action === 'captureImage') {
        if (onFaceStatusChange) {
          const promise = onFaceStatusChange({ imageBase64: data.imageBase64, faceRect: data.faceRect });

          if (promise instanceof Promise) {
            promise.then(() => {
              this.webViewContext.postMessage({ action: 'requestSuccess' });
            }).catch(() => {
              this.webViewContext.postMessage({ action: 'requestFailure' });
            });
          } else {
            this.webViewContext.postMessage({ action: 'requestSuccess' });
          }
        }
      } else {
        /* eslint-disable */
        if (onFail) {
          onFail({ code: data.code, message: data.message });
        }
      }
    },
  },
});
