<template>
  <div>
    <div class="icon-nav">
      <ul>
        <li class="onhover-div mobile-search">
          <div>
            <i class="ti-search" @click="openSearch()"></i>
            <nuxt-link :to="{ path: '/page/search'}"  title="Поиск услуг">
              <img alt src="@/assets/images/icon/layout4/search.png" class="img-fluid" />
            </nuxt-link>
          </div>
          <div id="search-overlay" class="search-overlay" :class="{ opensearch:search }">
            <div>
              <span class="closebtn" @click="closeSearch()" title="Удалить">×</span>
              <div class="overlay-content">
                <div class="container">
                  <div class="row">
                    <div class="col-xl-12">
                      <form>
                        <div class="form-group mb-0">
                          <input
                            type="text"
                            class="form-control"
                            v-model="searchString"
                            @keyup="searchProduct"
                            placeholder="Введите название"
                          />
                        </div>
                      </form>
                      <ul class="search-results" v-if="searchItems.length">
                        <li v-for="(product,index) in searchItems" :key="index" class="product-box">
                          <div class="img-wrapper">
                            <img
                              :src="getImgUrl(product.images[0].src)"
                              class="img-fluid bg-img"
                              :key="index"
                            />
                          </div>
                          <div class="product-detail">
                            <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                              <h6>{{ product.title }}</h6>
                            </nuxt-link>
                            <h4>{{ product.price }} руб.</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="onhover-div mobile-cart">
          <div>
            <img alt src="@/assets/images/icon/layout4/cart.png" class="img-fluid" />
            <i class="ti-shopping-cart"></i>
            <span v-if="!cart.length" class="cart_qty_cls">{{cart.length}}</span>
            <span v-if="cart.length" class="cart_qty_cls" style="background: green">{{cart.length}}</span>
          </div>
          <ul class="show-div shopping-cart" v-if="!cart.length">
            <li>Ваша корзина в данный момент пуста</li>
          </ul>
          <ul class="show-div shopping-cart" v-if="cart.length">
            <li v-for="(item,index) in cart" :key="index">
              <div class="media">
                <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                  <img alt class="mr-3" :src="getImgUrl(item.images[0].src)" />
                </nuxt-link>
                <div class="media-body">
                  <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                    <h4>{{item.title}}</h4>
                  </nuxt-link>
                  <h4>
                    <span>{{item.quantity}} x {{item.price - (item.price * item.discount) / 100}} руб.</span>
                  </h4>
                </div>
              </div>
              <div class="close-circle">
                <a href="javascript:void(0)" @click="removeCartItem(item)">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </a>
              </div>
            </li>
            <li>
              <div class="total">
                <h4>
                  Итого:
                  <span>{{ cartTotal }} руб.</span>
                </h4>
              </div>
            </li>
            <li>
              <div class="buttons">
                <nuxt-link
                  :to="{ path: '/page/account/cart'}"
                  class="btn btn-solid btn-xs view-cart"
                  style="border: 1px solid white; border-radius: 40px;"
                >Просмотр корзины</nuxt-link>
                <nuxt-link
                  :to="{ path: '/page/account/checkout'}"
                  class="btn btn-solid btn-xs checkout"
                  style="border: 1px solid white; border-radius: 40px;"
                >Оплата</nuxt-link>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  export default {
    data() {
      return {
        currencyChange: {},
        search: false,
        searchString: ""
      };
    },
    computed: {
      ...mapState({
        searchItems: state => state.products.searchProduct
      }),
      ...mapGetters({
        cart: "cart/cartItems",
        cartTotal: "cart/cartTotalAmount",
        curr: "products/changeCurrency",
        wishlist: "products/wishlistItems"
      })
    },
    methods: {
      getImgUrl(path) {
        return require('@/assets/images/' + path);
      },
      openSearch() {
        this.search = true;
      },
      closeSearch() {
        this.search = false;
      },
      searchProduct() {
        this.$store.dispatch("products/searchProduct", this.searchString);
      },
      removeCartItem: function(product) {
        this.$store.dispatch("cart/removeCartItem", product);
      },
      updateCurrency: function(currency, currSymbol) {
        this.currencyChange = { curr: currency, symbol: currSymbol };
        this.$store.dispatch("products/changeCurrency", this.currencyChange);
      }
    }
  };
</script>
