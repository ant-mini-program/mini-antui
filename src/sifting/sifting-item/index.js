import lifecycle from '../mixins/lifecycle';

Component({
  mixins: [lifecycle],
  data: {
    confirmStyle: '',
  },

  props: {
    className:'',
    item: '',
    id: '',
    value: '',
    selected:false
  },

  didMount(){
    let { confirmStyle, confirmArry, itemArry } = this.data;
    let { selected, id, value } = this.props;
    if(selected){
      confirmStyle = 'am-sifting-cick';
      confirmArry.push({ id, value });
      itemArry.push(this);
      this.setData({
        confirmStyle,
      });
    } 
  },

  methods: {
    clickFn() {
      let { id, value } = this.props;
      let { confirmStyle, confirmArry, itemArry, userProps } = this.data;
        if (confirmStyle === '' && confirmArry.length < userProps.clickLength) {
          confirmStyle = 'am-sifting-cick';
          confirmArry.push({ id, value });
          itemArry.push(this);
        }
        else {
          confirmStyle = '';
          confirmArry.some(function (key, index) {
            if (JSON.stringify(key) === JSON.stringify({ id, value })) {
              confirmArry.splice(index, 1);
            }
          })
        }
        this.setData({
          confirmStyle,
        });
    }
  }
})