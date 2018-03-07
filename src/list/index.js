Component({
  methods: {
    onItemTap(ev) {
      console.log(ev);
      this.props.onItemClick(ev);
    },
  },
});
