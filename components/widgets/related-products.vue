<template>
  <div>
    <section class="ratio_asos">
      <div class="container">
        <div class="col-12 product-related">
          <h2>{{ title }}</h2>
        </div>
        <div class="row m-0">
          <div
            class="col-xl-2 col-md-4 col-sm-6"
            v-for="(product,index) in productslist.slice(1, 7)"
            :key="index"
          >
            <div class="product-box">
              <productBox1
                :product="product"
                :index="index"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import productBox1 from "../product-box/product-box1";
  export default {
    props: ["productTYpe", "productId"],
    components: {
      productBox1
    },
    data() {
      return {
        title: "Сопутствующие товары",
        products: [],
        dismissSecs: 5,
        dismissCountDown: 0
      };
    },
    computed: {
      ...mapState({
        productslist: state => state.products.productslist
      })
    },
    mounted() {
      this.productsArray();
    },
    methods: {
      relatedProducts() {
        this.$store.dispatch('products/relatedProducts', {
          productTYpe: this.productTYpe,
          productId: this.productId
        })
      },
      productsArray: function() {
        this.productslist.map(item => {
          if (item.type === this.productTYpe) {
            if (item.id !== this.productId) {
              this.products.push(item);
            }
          }
        });
      },
      alert(item) {
        this.dismissCountDown = item;
      },
      showQuickview(item, productData) {
        this.showquickviewmodel = item;
        this.quickviewproduct = productData;
      },
      showCoampre(item, productData) {
        this.showcomparemodal = item;
        this.comapreproduct = productData;
      },
      closeCompareModal(item) {
        this.showcomparemodal = item;
      },
      showCart(item, productData) {
        this.showcartmodal = item;
        this.cartproduct = productData;
      },
      closeCartModal(item) {
        this.showcartmodal = item;
      }
    }
  };
</script>
