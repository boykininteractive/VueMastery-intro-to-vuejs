app.component("product-details", {
  /* html */
  template: `
  <ul>
  <li v-for="detail in details">{{detail}}</li>
</ul>`,
  data() {
    return {
      details: ["50% cotton", "30% wool", "20% polyester"],
    };
  },
  props: {
    details: {
      type: String,
      required: true,
    },
  },
});
