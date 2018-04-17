export default {
  data: {
    confirmArry:[],
    itemArry:[],
    userProps:{
      max:10000,
    }
  },

  didUnmount(){
    let { itemArry, confirmArry } = this.data;
    confirmArry.splice(0, confirmArry.length);
    itemArry.splice(0, itemArry.length);
  },
};
