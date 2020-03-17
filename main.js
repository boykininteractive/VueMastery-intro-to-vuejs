var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    link: "https://vuemastery.com",
    image: "./assets/vmSocks-blue-onWhite.jpg",
    inStock: true,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    cart: 0,
    variants: [
      {
        variantID: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg"
      },
      {
        variantID: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg"
      }
    ]
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(color) {
      this.image = color;
    }
  }
});
