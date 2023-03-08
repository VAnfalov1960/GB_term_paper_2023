<template>
  <div>
    <Breadcrumbs title="Оплата" />
    <section class="section-b-space">
      <div class="container">
        <div class="checkout-page">
          <div class="checkout-form theme-form">
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="onSubmit">
                <div class="row">
                  <div class="col-lg-6 col-sm-12 col-xs-12">
                    <div class="checkout-title">
                      <h3>Платежные реквизиты</h3>
                    </div>
                    <div class="row check-out">
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">Имя</div>
                        <ValidationProvider rules="required" v-slot="{ errors }" name="First name" >
                          <input type="text" v-model="user.firstName" name="First name" placeholder="Напишите своё имя" />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">Фамилия</div>
                        <ValidationProvider rules="required" v-slot="{ errors }" name="Last name">
                          <input type="text" v-model="user.lastName" name="Last name" placeholder="Напишите свою фамилию"/>
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <ValidationProvider
                          rules="required|digits:10"
                          v-slot="{ errors }"
                          name="phone Number"
                        >
                          <div class="field-label">Телефон</div>
                          <input type="text" v-model="user.phone" name="Phone" placeholder="Напишите номер своего телефона" />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">Адрес электронной почты</div>
                        <ValidationProvider rules="required|email" v-slot="{ errors }" name="Email">
                          <input type="text" v-model="user.email" name="Email Address" placeholder="Напишите Email"/>
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-12 col-sm-6 col-xs-12">
                        <div class="field-label">Почтовый индекс</div>
                        <ValidationProvider rules="required" v-slot="{ errors }" name="Postal Code">
                          <input type="text" v-model="user.pincode" name="Postal Code" placeholder="Напишите свой почтовый индекс"/>
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <div class="field-label">Страна</div>
                        <select>
                          <option selected>Россия</option>
                          <option>Беларусь</option>
                          <option>Украина</option>
                          <option>Казахстан</option>
                        </select>
                      </div>
                      <div class="form-group col-md-12 col-sm-6 col-xs-12">
                        <div class="field-label">Область</div>
                        <ValidationProvider rules="required" v-slot="{ errors }" name="State">
                          <input type="text" v-model="user.state" name="State" placeholder="Напишите область"/>
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <div class="field-label">Город</div>
                        <ValidationProvider rules="required" v-slot="{ errors }" name="City">
                          <input type="text" v-model="user.city" name="City" placeholder="Напишите город" />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <div class="field-label">Улица</div>
                        <ValidationProvider rules="required" v-slot="{ errors }" name="Address">
                          <input type="text" v-model="user.address" name="Address" placeholder="Напишите улицу, номер дома и номер квартиры"/>
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>

                      <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <nuxt-link :to="{ path: '/page/account/register'}">Создать учетную запись?</nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 col-xs-12">
                    <div class="checkout-details">
                      <div class="order-box">
                        <div class="title-box">
                          <div>
                            Товары и услуги
                            <span>К оплате</span>
                          </div>
                        </div>
                        <ul class="qty" v-if="cart.length">
                          <li v-for="(item, index) in cart" :key="index">
                            {{ item.title | uppercase }} X {{ item.quantity }}
                            <!-- <span>{{ (item.price * curr.curr) * item.quantity | currency(curr.symbol) }} руб.</span> -->
                            <span> <h4 class="td-color" v-if="item.sale && item.discount > 0">
                              {{ (item.price - (item.price * item.discount) / 100) * item.quantity * curr.curr }} руб.</h4>
                              <h4 class="td-color" v-if="!item.sale || item.discount == 0">{{ item.price * item.quantity * curr.curr }} руб.</h4>
                            </span>

                          </li>
                        </ul>
                        <ul class="sub-total">
                          <li>
                            Промежуточный итог:
                            <!-- <span
                              class="count"
                            >{{ cartTotal * curr.curr }} руб.</span> -->
                            <span
                              class="count"
                            >{{ cartTotal * curr.curr }} руб.</span>
                          </li>
                          <li>
                            Доставка
                            <div class="shipping">
                              <div class="shopping-option">
                                <input type="checkbox" name="free-shipping" id="free-shipping" />
                                <label for="free-shipping">Бесплатная доставка</label>
                              </div>
                              <div class="shopping-option">
                                <input type="checkbox" name="local-pickup" id="local-pickup" />
                                <label for="local-pickup">Самовывоз</label>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul class="sub-total">
                          <li>
                            За всё:
                            <span
                              class="count"
                            >{{ cartTotal * curr.curr }} руб.</span>
                          </li>
                        </ul>
                      </div>
                      <div class="payment-box">
                        <div class="upper-box">
                          <div class="payment-options">
                            <ul>
                              <li>
                                <div class="radio-option">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-1"
                                    checked="checked"
                                    v-model="payment"
                                    :value="false"
                                  />
                                  <label for="payment-1">
                                    Оплата наличными при получении
                                    <!-- <span class="small-text">Пожалуйста, отправьте чек</span> -->
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div class="radio-option paypal">
                                  <input
                                    type="radio"
                                    :value="true"
                                    v-model="payment"
                                    name="payment-group"
                                    id="payment-3"
                                  />
                                  <label for="payment-3">
                                    Оплата банковской картой
                                    <span class="image">
                                      <img src="../../../assets/images/paypal.png" alt />
                                    </span>
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="text-right">
                          <no-ssr>
                            <!-- Ниже -->
                            <!-- currency="USD" -->
                            <paypal-checkout
                              :amount="getamt()"
                              currency=""
                              :client="paypal"
                              :env="environment"
                              :button-style="button_style"
                              v-if="payment"
                              v-on:payment-authorized="onPaymentComplete"
                              v-on:payment-cancelled="onCancelled()"
                            ></paypal-checkout>
                          </no-ssr>
                          <button
                            type="submit"
                            @click="order()"
                            v-if="cart.length && !payment"
                            :disabled="invalid"
                            class="btn-solid btn"
                            style="border: 1px solid white; border-radius: 40px"
                          >Разместить заказ</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import {
    ValidationProvider,
    ValidationObserver
  } from "vee-validate/dist/vee-validate.full.esm";
  import { mapGetters } from "vuex";
  import Footer from "../../../components/footer/footer";
  import Breadcrumbs from "../../../components/widgets/breadcrumbs";

  export default {
    components: {
      Footer,
      Breadcrumbs,
      ValidationProvider,
      ValidationObserver
    },
    computed: {
      ...mapGetters({
        cart: "cart/cartItems",
        cartTotal: "cart/cartTotalAmount",
        curr: "products/changeCurrency"
      })
    },
    data() {
      return {
        user: {
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          city: "",
          state: "",
          pincode: ""
        },
        isLogin: false,
        paypal: {
          sandbox: "Your_Sendbox_Key"
        },
        payment: false,
        environment: "sandbox",
        button_style: {
          label: "checkout",
          size: "medium", // small | medium | large | responsive
          shape: "pill", // pill | rect
          color: "blue" // gold | blue | silver | black
        },
        amtchar: ""
      };
    },
    methods: {
      order() {
        this.isLogin = localStorage.getItem("userlogin");
        if (this.isLogin) {
          this.payWithStripe();
        } else {
          this.$router.replace("/page/account/login-firebase");
        }
      },
      payWithStripe() {
        const handler = window.StripeCheckout.configure({
          key: "PUBLISHBLE_KEY", // 'PUBLISHBLE_KEY'
          locale: "auto",
          closed: function() {
            handler.close();
          },
          token: token => {
            this.$store.dispatch("products/createOrder", {
              product: this.cart,
              userDetail: this.user,
              token: token.id,
              amt: this.cartTotal
            });
            this.$router.push("/page/order-success");
          }
        });
        handler.open({
          name: "Заголовок ",
          description: "Достигни своей мечты",
          amount: this.cartTotal * 1
        });
      },
      getamt() {
        return this.cartTotal.toString();
      },
      onPaymentComplete: function(data) {
        this.$store.dispatch("products/createOrder", {
          product: this.cart,
          userDetail: this.user,
          token: data.orderID,
          amt: this.cartTotal
        });
        this.$router.push("/page/order-success");
      },
      onCancelled() {
        console.log("Вы отменили окно");
      },
      onSubmit() {
        console.log("Форма была отправлена!");
      }
    }
  };
</script>
