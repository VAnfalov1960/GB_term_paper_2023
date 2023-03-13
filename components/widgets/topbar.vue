<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact">
            <h4>САЙТ НАХОДИТСЯ В СТАДИИ РАЗРАБОТКИ</h4>
          </div>
        </div>
        <div class="col-lg-6 text-right">
          <ul class="header-dropdown">
            <li class="onhover-dropdown mobile-account" title="Личный кабинет">
              <i class="fa fa-user" aria-hidden="true"></i> Мой аккаунт
              <ul class="onhover-show-div">
                <li>
                  <a v-if="isLogin" @click="logout">Выход из системы</a>
                  <nuxt-link
                    v-if="!isLogin"
                    :to="{ path: '/page/account/login-firebase' }"
                  >Авторизоваться</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/page/account/dashboard' }">Приборная панель</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  import firebase from "firebase";
  import UserAuth from "../../pages/page/account/auth/auth";
  export default {
    data() {
      return {
        isLogin: false
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
    created() {
      if (process.client) {
        this.isLogin = localStorage.getItem("userlogin");
      }
    },
    methods: {
      logout: function() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            UserAuth.Logout();
            this.$router.replace("/page/account/login-firebase");
          });
      }
    }
  };
</script>
