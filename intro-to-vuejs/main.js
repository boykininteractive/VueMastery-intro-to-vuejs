var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-blue-onWhite.jpg",
    link: "https://vuemastery.com",
    inStock: true,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    variants: [
      {
        variantID: 2234,
        variantColor: "green"
      },
      {
        variantID: 2235,
        variantColor: "blue"
      }
    ]
  }
});
