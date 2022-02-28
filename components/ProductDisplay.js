app.component("product-display", {
  template:
    /*html*/
    `
    <div class="product">
      <div class="product-image">
        <a :href="link" target="_blank">
          <img v-bind:src="image" />
        </a>
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="onSale">{{saleMessage}}</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
    
        <p>Shipping: {{ shipping }}</p>
        <product-details></product-details>
        <div
          v-for="(variant, index) in variants"
          :key="variant.variantID"
          class="color-circle"
          :style="{backgroundColor : variant.color}"
          @mouseover="updateVariant(index)"
        ></div>
        <div class="cart-btns">
          <button @click="addToCart" :disabled="!inStock">Add to Cart</button>
          <button v-on:click="removeFromCart">Remove from Cart</button>
        </div>
        </div>
        </div>`,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      link: "https://vuemastery.com",
      onSale: true,
      selectedVariant: 0,
      variants: [
        {
          variantID: 2234,
          color: "green",
          variantImage: "assets/vmSocks-green-onWhite.jpg",
          quantity: 50,
          shipping: "",
        },
        {
          variantID: 2235,
          color: "blue",
          variantImage: "assets/vmSocks-blue-onWhite.jpg",
          quantity: 0,
          shipping: "",
        },
      ],
    };
  },
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateImage(imageColor) {
      this.image = imageColor;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    saleMessage() {
      if (this.onSale && this.inStock) {
        return this.brand + " " + this.product + " is on sale.";
      }
      return "";
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
