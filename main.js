const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    addCartItem(variantID) {
      this.cart.push(variantID);
    },
    removeCartItem(variantID) {
      if (this.cart.length > 0) {
        this.cart.pop(variantID);
      }
    },
  },
});
