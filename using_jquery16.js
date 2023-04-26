Vue.component("my-square", {
  template: '<div :style="style">{{msg}}</div',
  props: {
    width: Number,
    height: Number,
    msg: String,
  },
  data: function () {
    return {
      style: {
        width: this.width + "px",
        height: this.height + "px",
        "background-color": "green",
        "line-height": this.width + "px",
        "text-align": "center",
        color: "blue",
        "font-size": "20px",
        "font-weight": "bold",
      },
    };
  },
});

Vue.component("my-tag", {
  template: "<div>This is my tag</div>",
});

new Vue({
  el: "#app",
});
