export default {
  data: {
    confirmArry:[],
    itemArry:[],
    userProps:{
      clickLength:10000,
    }
  },

  didUpdate(prevProps,prevData){
  //  console.log(prevData);
  },

  didUnmount(){
    let { itemArry, confirmArry } = this.data;
    confirmArry.splice(0, confirmArry.length);
    itemArry.splice(0, itemArry.length);
  },
};
