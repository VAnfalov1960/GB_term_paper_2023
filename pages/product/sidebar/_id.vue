<template>
  <div>
    <Breadcrumbs :title="getDetail.title" />
    <section class="section-b-space">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-xs-12 productdetail">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6">
                    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                      <div class="swiper-wrapper">
                        <div
                          class="swiper-slide"
                          v-for="(product,index) in getDetail.images"
                          :key="index"
                        >
                          <img v-if="!product.src_big"
                            :src="getImgUrl(product.src)"
                            :id="product.image_id"
                            class="img-fluid bg-img"
                            :alt="product.alt"
                            style="border:1px solid grey; border-radius: 10px; width: 100%"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="col-lg-6 rtl-text">
                    <div class="product-right">
                      <h3>{{ getDetail.title }}</h3>
                      <p>(Идентификационный номер: {{ getDetail.id }})</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script src="./vue-lazytube.umd.min.js"></script>
<script>
  import Vue from "vue";
  import Embed from "v-video-embed";
  import { mapState, mapGetters } from "vuex";
  import Footer from "../../../components/footer/footer";
  import Breadcrumbs from "../../../components/widgets/breadcrumbs";

  Vue.use(Embed);

  export default {
    components: {
      Footer,
      Breadcrumbs
    },

    data() {
      return {
        counter: 0,
        activeColor: "",
        selectedSize: "",
        qty: "",
        size: [],
        productTYpe: "",
        productId: "",
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 20,
          freeMode: true
        },
        swiperOption1: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          centeredSlides: false
        },
      };
    },
    computed: {
      // ...mapState({
      //   currency: state => state.products.currency
      // }),
      // ...mapGetters({
      //   curr: "products/changeCurrency"
      // }),
      getDetail: function() {
        return this.$store.getters["products/getProductById"](
          this.$route.params.id
        );
      },
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
    },
    methods: {
      handleClick(event) {
        this.$refs["lazyVideo"][event]();
      },
      priceCurrency: function() {
        this.$store.dispatch("products/changeCurrency");
      },
      addToWishlist: function(product) {
        this.$store.dispatch("products/addToWishlist", product);
      },
      discountedPrice(product) {
        const price = product.price - (product.price * product.discount) / 100;
        return price;
      },
      // Related Products display
      relatedProducts() {
        this.productTYpe = this.getDetail.type;
        this.productId = this.getDetail.id;
      },

      increment() {
        this.counter++;
      },
      decrement() {
        if (this.counter >= 1) this.counter--;
      },

      getImgUrl(path) {
        return require("@/assets/images/" + path);
      },
      slideTo(id) {
        this.swiper.slideTo(id, 1000, false);
      }
    }
  };
</script>
