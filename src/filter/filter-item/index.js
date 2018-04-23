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
    let { confirmStyle, results, items } = this.data;
    let { selected, id, value } = this.props;
    if(selected){
      confirmStyle = 'am-filter-cick';
      results.push({ id, value });
      items.push(this);
      this.setData({
        confirmStyle,
      });
    } 
  },

  methods: {
    handleClick() {
      let { id, value } = this.props;
      let { confirmStyle, results, items, commonProps } = this.data;
        if (confirmStyle === '' && results.length < commonProps.max) {
          confirmStyle = 'am-filter-cick';
          results.push({ id, value });
          items.push(this);
        }
        else {
          confirmStyle = '';
          results.some(function (key, index) {
            if (JSON.stringify(key) === JSON.stringify({ id, value })) {
              results.splice(index, 1);
            }
          })
        }
        this.setData({
          confirmStyle,
        });
    }
  }
})