Page({
  data: {
    modalOpened: false,
    modalOpened2: false,
  },
  openModal() {
    this.setData({
      modalOpened: true,
    });
  },
  onModalClick() {
    this.setData({
      modalOpened: false,
    });
  },
  onModalClose() {
    this.setData({
      modalOpened2: false,
    });
  },
  openModal2() {
    this.setData({
      modalOpened2: true,
    });
  },
  onModalClick2() {
    this.setData({
      modalOpened2: false,
    });
  },
  onModalClose2() {
    this.setData({
      modalOpened2: false,
    });
  }
});
