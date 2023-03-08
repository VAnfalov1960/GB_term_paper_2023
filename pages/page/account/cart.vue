<template>
  <div>
    <Breadcrumbs title="Корзина" />
    <section class="cart-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <table class="table cart-table table-responsive-xs" v-if="cart.length">
              <thead>
                <tr class="table-head">
                  <th scope="col">Изображение</th>
                  <th scope="col">Название продукта</th>
                  <th scope="col">Цена</th>
                  <th scope="col">Количество</th>
                  <th scope="col">Действие</th>
                  <th scope="col">К оплате</th>
                </tr>
              </thead>
              <tbody v-for="(item,index) in cart" :key="index">
                <tr>
                  <td>
                    <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                      <img :src="getImgUrl(item.images[0].src)" alt />
                    </nuxt-link>
                  </td>
                  <td>
                    <nuxt-link :to="{ path: '/product/sidebar/'+item.id}"><h4>{{item.title}}</h4></nuxt-link>
                    <div class="mobile-cart-content row">
                      <div class="col-xs-3">
                        <div class="qty-box">
                          <div class="input-group">
                            <span
                              class="input-group-prepend">
                              <button
                                type="button"
                                class="btn quantity-left-minus"
                                data-type="minus"
                                data-field
                                :disabled="item.quantity == 1"
                                @click="decrement(item)"
                              >
                                <i class="ti-angle-left"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              name="quantity"
                              class="form-control input-number"
                              v-model="item.quantity"
                            />
                            <span class="input-group-prepend">
                              <button
                                type="button"
                                class="btn quantity-right-plus"
                                data-type="plus"
                                data-field
                                :disabled="item.quantity > (item.stock - 1)"
                                @click="increment(item)"
                              >
                                <i class="ti-angle-right"></i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-3">

                        <h4 v-if="item.sale && item.discount > 0"
                      >{{ (item.price - (item.price * item.discount) / 100)* item.quantity }} руб.</h4>
                      <h4 v-if="!item.sale || item.discount == 0">{{ item.price * item.quantity }} руб.</h4>

                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">
                          <a href="#" class="icon">
                            <i class="ti-close"></i>
                          </a>
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td>
                      <h4
                        v-if="item.sale && item.discount > 0"
                      >{{ (item.price - (item.price * item.discount) / 100) }} руб.</h4>
                      <h4 v-if="!item.sale || item.discount == 0">{{ item.price }} руб.</h4>
                  </td>
                  <td>
                    <div class="qty-box">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <button
                            type="button"
                            class="btn quantity-left-minus"
                            data-type="minus"
                            data-field
                            :disabled="item.quantity == 1"
                            @click="decrement(item)"
                          >
                            <i class="ti-angle-left"></i>
                          </button>
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          class="form-control input-number"
                          v-model="item.quantity"
                        />
                        <span class="input-group-prepend" style="width: 10%">
                          <button
                            type="button"
                            class="btn quantity-right-plus"
                            data-type="plus"
                            data-field
                            :disabled="item.quantity > (item.stock - 1)"
                            @click="increment(item)"
                          >
                            <i class="ti-angle-right"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a class="icon" @click="removeCartItem(item)">
                      <i class="ti-close"></i>
                    </a>
                  </td>
                  <td>
                    <h4
                        v-if="item.sale && item.discount > 0"
                      >{{ (item.price - (item.price * item.discount) / 100)* item.quantity }} руб.</h4>
                      <h4 v-if="!item.sale || item.discount == 0">{{ item.price * item.quantity }} руб.</h4>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table cart-table table-responsive-md" v-if="cart.length">
              <tfoot>
                <tr>
                  <td><h4>Всего к оплате:</h4></td>
                  <td>
                    <h4>{{ cartTotal }} руб.</h4>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div class="col-sm-12 empty-cart-cls text-center" v-if="!cart.length">
              <img src="@/assets/images/icon-empty-cart.png" class="img-fluid" alt="empty cart" />
              <h3 class="mt-3">
                <strong>Ваша корзина пуста</strong>
              </h3>
              <h4 class="mb-3">Добавьте что-нибудь</h4>
              <div class="col-12">
                <nuxt-link :to="{ path: '/'}" class="btn btn-solid" style="border: 1px solid white; border-radius: 40px">Продолжить покупки</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row cart-buttons" v-if="cart.length">
          <div class="col-6">
            <nuxt-link :to="{ path: '/'}" class="btn btn-solid" style="border: 1px solid white; border-radius: 40px">Продолжить покупки</nuxt-link>
          </div>
          <div class="col-6">
            <nuxt-link
              :to="{ path: '/page/account/checkout'}"
              class="btn btn-solid"
              style="border: 1px solid white; border-radius: 40px"
            >Перейти к оплате</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  import Footer from "../../../components/footer/footer";
  import Breadcrumbs from "../../../components/widgets/breadcrumbs";
  export default {
    data() {
      return {
        counter: 1
      };
    },
    components: {
      Footer,
      Breadcrumbs
    },
    computed: {
      ...mapGetters({
        cart: "cart/cartItems",
        cartTotal: "cart/cartTotalAmount",
        curr: "products/changeCurrency"
      })
    },
    methods: {
      getImgUrl(path) {
        return require("@/assets/images/" + path);
      },
      removeCartItem: function(product) {
        this.$store.dispatch("cart/removeCartItem", product);
      },
      increment(product, qty = 1) {
        this.$store.dispatch("cart/updateCartQuantity", {
          product: product,
          qty: qty
        });
      },
      decrement(product, qty = -1) {
        this.$store.dispatch("cart/updateCartQuantity", {
          product: product,
          qty: qty
        });
      },
      discountedPrice(product) {
        const price = item.price - (item.price * item.discount) / 100;
        return price;
      },
    }
  };
</script>
