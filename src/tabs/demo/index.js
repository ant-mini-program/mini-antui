Page({
  data: {
    tabs: [
      { title: '1 Tab' },
      { title: '2 Tab' },
      { title: '3 Tab' },
      { title: '4 Tab' },
      { title: '5 Tab' },
    ]
  },
  handleTabClick({ index }) {
    console.log(index, 'tab clicked');
  },
  handleTabChange({ index }) {
    console.log(index, 'tab changed');
  }
});
