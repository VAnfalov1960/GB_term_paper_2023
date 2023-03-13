<template>
  <div>
    <Breadcrumbs />
    <section class="login-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>{{logintitle}}</h3>
            <div class="theme-card">
              <form class="theme-form" v-on:submit="checkForm" method="post">
                <div v-if="errors.length">
                  <ul class="validation-error mb-3">
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                  </ul>
                </div>
                <div class="form-group">
                  <label for="email">Введите ваш Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">Введите пароль</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                    placeholder="Введите свой пароль"
                    required
                  />
                </div>
                <a class="btn-solid btn" href="javascript:void(0)" @click="signUp">Авторизоваться</a>

                <!-- Social Media -->
                <div class="social mt-3">
                  <div class="form-group btn-showcase d-flex">
                    <button
                      type="button"
                      @click="socialLoginFacebook"
                      class="btn social-btn btn-fb d-inline-block"
                    >
                      <i class="fa fa-facebook"></i>
                    </button>
                    <button
                      type="button"
                      @click="socialLogin"
                      class="btn social-btn btn-twitter d-inline-block"
                    >
                      <i class="fa fa-google"></i>
                    </button>
                    <button
                      type="button"
                      @click="socialLoginTwitter"
                      class="btn social-btn btn-google d-inline-block"
                    >
                      <i class="fa fa-twitter"></i>
                    </button>
                    <button
                      type="button"
                      @click="socialLoginGit"
                      class="btn social-btn btn-github d-inline-block"
                    >
                      <i class="fa fa-github"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6 right-login">
            <h3>{{registertitle}}</h3>
            <div class="theme-card authentication-right">
              <h6 class="title-font">Создайте учетную запись</h6>
              <p>Подпишитесь на бесплатную учетную запись в нашем магазине. Регистрация проходит быстро и легко. Это позволяет вам иметь возможность делать заказы. Чтобы начать делать заказы, нажмите кнопку зарегистрироваться.</p>
              <nuxt-link :to="{ path: '/page/account/register'}" class="btn btn-solid">Создать учетную запись</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  import firebase from "firebase";
  import Footer from "../../../components/footer/footer";
  import Breadcrumbs from "../../../components/widgets/breadcrumbs";
  import Userauth from "./auth/auth";

  export default {
    components: {
      Footer,
      Breadcrumbs
    },
    data() {
      return {
        logintitle: "Авторизоваться",
        registertitle: "Новый клиент",
        errors: [],
        email: "",
        password: ""
      };
    },
    methods: {
      checkForm: function(e) {
        this.errors = [];
        if (!this.email) {
          this.errors.push("Напишите свой Email");
        } else if (!this.validEmail(this.email)) {
          this.errors.push("Требуется действительный Email");
        }
        if (!this.password) {
          this.errors.push("Требуется пароль");
        }
        if (!this.errors.length) return true;
        e.preventDefault();
      },
      validEmail: function(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },

      signUp: function() {
        if (this.email === "" && this.password === "") {
          this.email = "";
          this.password = "";
        } else {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
              result => {
                console.log("Result", result);
                Userauth.localLogin(result);
                this.$router.replace("/page/account/checkout");
              },
              err => {
                this.email = "";
                this.password = "";
                this.$toasted.show("Oops..." + err.message, {
                  theme: "bubble",
                  position: "bottom-right",
                  type: "error",
                  duration: 2000
                });
              }
            );
        }
      },
      socialLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            Userauth.localLogin(result);
            this.$router.replace("/page/account/checkout");
          })
          .catch(err => {
            alert("Oops. " + err.message);
          });
      },
      socialLoginFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            console.log("Result", result);
            Userauth.localLogin(result);
            this.$router.replace("/page/account/checkout");
          })
          .catch(err => {
            alert("Oops. " + err.message);
          });
      },
      socialLoginTwitter() {
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            console.log("Result", result);
            Userauth.localLogin(result);
            this.$router.replace("/page/account/checkout");
          })
          .catch(err => {
            alert("Oops. " + err.message);
          });
      },
      socialLoginGit() {
        const provider = new firebase.auth.GithubAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            console.log("Result", result);
            Userauth.localLogin(result);
            this.$router.replace("/page/account/checkout");
          })
          .catch(err => {
            alert("Oops. " + err.message);
          });
      }
    }
  };
</script>
