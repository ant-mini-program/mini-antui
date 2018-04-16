Component({
    props: {
        className: "",
        type: "success",
        title: "操作成功",
        subTitle: "内容详情可折行，建议不超过两行",
        mainButton: {
            buttonText: "确认",
            disabled: false
        },
        subButton: {
            buttonText: "取消",
            disabled: false
        },
        onTapMain: null,
        onTapSub: null
    },
    methods: {
        tapMain() {
            this.props.onTapMain && this.props.onTapMain();
        },
        tapSub() {
            this.props.onTapSub && this.props.onTapSub();
        }
    }

});