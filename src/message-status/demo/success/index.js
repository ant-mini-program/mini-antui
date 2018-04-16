Page({
    data: {
        title: "操作成功",
        messageButton: {
            mainButton: {
                buttonText: "返回首页"
            }
        }
    },
    goBack() {
        my.navigateBack();
    }
});