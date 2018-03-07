Component({
  data: {
    title22: 'test',
    subTitle22: 'test',
  },
  props: {
    title: '卡片标题22',
    subTitle: '副标题非必填22',
  },
  onReady() {
    console.log(this.props, 'dada');
    this.setData({
      title: this.props.title,
      subTitle: this.props.subTitle,
    });
  },
  onUpdate(prevProps,prevData){

  },
  onUnload(){

  },
  methods:{
    onCardClick(ev){
      this.props.onCardClick({ ...ev, e2:1});
    },
  },
})
