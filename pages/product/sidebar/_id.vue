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
                          <img
                            v-if="!product.src_big"
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
                      <br />
                      <div v-if="getDetail.price > 0">
                        <h4
                          v-if="getDetail.sale > 0"
                        >Ориентировочная цена: {{ discountedPrice(getDetail) }} руб.</h4>
                        <h4 v-else>Ориентировочная цена: {{ getDetail.price }} руб.</h4>
                        <h4 v-if="getDetail.sale && getDetail.discount > 0">
                          <del>{{ getDetail.price }} руб.</del>
                          - cкидка сайта {{ getDetail.discount }}%
                        </h4>

                        <div>
                          <br v-if="(getDetail.price ) == 0" />
                        </div>

                        <div class="pro_inventory" v-if="getDetail.allstudents || getDetail.stock">
                          <div class="inventory-scroll">
                            <span
                              :style="{width: (100/getDetail.allstudents*(getDetail.stock - counter)) +'%'}"
                            ></span>
                          </div>
                        </div>
                        <div class="pro_inventory" v-if="getDetail.allstudents">
                          <p
                            v-if="((getDetail.stock - counter) > 30)"
                            class="active"
                          >Осталось более 10 свободных мест</p>
                          <p
                            v-if="((getDetail.stock - counter) >= 5) && ((getDetail.stock - counter) <= 10)"
                            class="active"
                            style="color: green"
                          >Осталось {{getDetail.stock - counter}} свободных мест</p>
                          <p
                            v-if="((getDetail.stock - counter) < 5) && ((getDetail.stock - counter) > 1)"
                            class="active"
                            style="color: yellow"
                          >Осталось {{ getDetail.stock - counter}} свободных места</p>
                          <p
                            v-if="((getDetail.stock - counter) == 1)"
                            class="active"
                            style="color: orange"
                          >Осталось {{ getDetail.stock - counter}} свободное место</p>
                          <p
                            v-if="((getDetail.stock - counter) == 0)"
                            class="active avalibility"
                            style="color: red"
                          >Свободных мест нет</p>
                        </div>

                        <div class="product-description border-product">
                          <div v-if="(getDetail.stock > 0)" class="qty-box">
                            <h4 class="product-title">
                              Оплата за:
                              <span></span>
                            </h4>
                            <div class="input-group">
                              <span class="input-group-prepend">
                                <button
                                  type="button"
                                  class="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field
                                  @click="decrement()"
                                >
                                  <i class="ti-angle-left"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                name="quantity"
                                class="form-control input-number"
                                :disabled="counter > getDetail.stock"
                                v-model="counter"
                              />
                              <span class="input-group-prepend">
                                <button
                                  :disabled="counter >= getDetail.stock"
                                  type="button"
                                  class="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field
                                  @click="increment()"
                                >
                                  <i class="ti-angle-right"></i>
                                </button>
                              </span>
                            </div>
                            <h4 v-if="(counter >= 5 ) && (counter <= 30)" class="product-title">
                              <span></span>мест
                            </h4>
                            <h4 v-if="(counter > 1) && (counter < 5)" class="product-title">
                              <span></span>места
                            </h4>
                            <h4 v-if="counter == 1" class="product-title">
                              <span></span>место
                            </h4>
                            <h4 v-if="counter == 0" class="product-title">
                              <span></span>мест
                            </h4>
                          </div>
                        </div>
                        <div v-if="counter > 0">
                          <h3 v-if="getDetail.sale">{{ discountedPrice(getDetail) * counter}} руб.</h3>
                          <h3 v-else>{{ getDetail.price * counter}} руб.</h3>
                        </div>

                        <br v-if="(getDetail.price ) * counter == 0" />
                        <br v-if="(getDetail.price ) * counter > 0" />
                        <br v-if="(getDetail.price ) * counter > 0" />
                        <!-- <div class="product-buttons">
                            <nuxt-link :to="{ path: '/page/account/cart'}">
                              <a
                                v-if="(getDetail.stock > 0)"
                                class="btn btn-solid mr-3"
                                style="border: 1px solid white; border-radius: 40px; width: 38%; padding: 15px"
                                title="Добавить в корзину"
                                :disabled="counter > getDetail.stock"
                              >В корзину</a>
                            </nuxt-link>
                            <a
                              v-if="(getDetail.stock > 0)"
                              class="btn btn-solid mr-3"
                              style="border: 1px solid white; border-radius: 40px; width: 38%; padding: 15px"
                              title="Купить"
                              :disabled="counter > getDetail.stock"
                            >Оплатить
                          </a>
                        </div>-->
                        <div class="product-buttons">
                          <nuxt-link to="#">
                            <a
                              v-if="(getDetail.stock > 0)"
                              class="btn btn-solid mr-3"
                              style="border: 1px solid white; border-radius: 40px; width: 38%; padding: 15px"
                              title="Добавить в корзину"
                              :disabled="counter > getDetail.stock"
                            >Заказать</a>
                          </nuxt-link>
                        </div>
                      </div>
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
      }
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
  mounted() {},
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
