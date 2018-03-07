Page({
  data: {
    list: [
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "121212"
      },
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "2"
      },
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "3"
      },
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "4"
      },
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "5"
      },
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "6"
      },
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "7"
      },
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "8"
      },
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "9"
      },
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "10"
      },
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "11"
      },
      {
        "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
        "text": "12"
      }
    ]
  },
  onItemClick: function(ev) {
    my.alert({
      content: ev.target.dataset.index,
    });
  }
});
