Vue.component("product_details", {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
          <ul>
            <li v-for="detail in details">{{detail}}</li>
          </ul>
    `
});

Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
      <div class="product">
        <div class="product-image">
            <img v-bind:src="image" />
        </div>

        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else :class="{lineThroughText: !inStock}">Out of Stock</p>
          <p v-show="onSale">{{title}} - On Sale</p>
          <p>Shipping: {{shipping}}</p>


          <div
            v-for="(variant, index) in variants"
            :key="variant.variantID"
            class="color-box"
            :style="{backgroundColor: variant.variantColor}"
            @mouseover="updateProduct(index)"
          ></div>

          <button
            v-on:click="addToCart"
            :disabled="!inStock"
            :class="{disabledButton: !inStock}"
          >
            Add to Cart
          </button>

          <div class="cart">
            <p>Cart({{cart}})</p>
          </div>
        </div>
      </div>    
    `,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      selectedVariant: 0,
      cart: 0,
      variants: [
        {
          variantID: 2234,
          variantColor: "green",
          variantImage: "./assets/vmSocks-green-onWhite.jpg",
          variantQuantity: 10,
          onSale: true
        },
        {
          variantID: 2235,
          variantColor: "blue",
          variantImage: "./assets/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0,
          onSale: false
        }
      ]
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return 2.99;
      }
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"]
  }
});
