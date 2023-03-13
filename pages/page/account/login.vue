<template>
  <div>
    <Breadcrumbs title="Авторизоваться" />
    <section class="login-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>{{logintitle}}</h3>
            <div class="theme-card">
              <ValidationObserver v-slot="{ invalid }">
                <form class="theme-form" @submit.prevent="onSubmit">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <ValidationProvider rules="required|email" v-slot="{ errors }" name="email">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="email"
                        placeholder="Email"
                        name="email"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="password">Пароль</label>
                    <ValidationProvider rules="required" v-slot="{ errors }" name="password">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="password"
                        placeholder="Введите свой пароль"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <button type="submit" class="btn btn-solid" :disabled="invalid">Авторизоваться</button>
                </form>
              </ValidationObserver>
            </div>
          </div>
          <div class="col-lg-6 right-login">
            <h3>{{registertitle}}</h3>
            <div class="theme-card authentication-right">
              <h6 class="title-font">Создайте учетную запись</h6>
              <p>Регистрация проходит быстро и легко. Это позволяет вам иметь возможность получить... Чтобы начать делать заказы, нажмите кнопку зарегистрироваться.</p>
              <nuxt-link
                :to="{ path: '/page/account/register'}"
                class="btn btn-solid"
              >Создать учетную запись</nuxt-link>
            </div>
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
  import Footer from "../../../components/footer/footer";
  import Breadcrumbs from "../../../components/widgets/breadcrumbs";
  export default {
    components: {
      Footer,
      Breadcrumbs,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        logintitle: "Авторизоваться",
        registertitle: "Новый клиент",
        email: null,
        password: null
      };
    },
    methods: {
      onSubmit() {
        console.log("Форма была отправлена!");
      }
    }
  };
</script>
