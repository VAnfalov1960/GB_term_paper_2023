<template>
  <div>
    <Breadcrumbs title="Профиль" />
    <!-- personal deatail section start -->
    <section class="contact-page register-page">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h3>{{title1}}</h3>
            <!-- form class="theme-form" v-on:submit="checkForm1" method="post"> -->
            <!-- ИЛИ -->
            <form class="theme-form" v-on:submit.prevent="checkForm1" method="post">
              <div v-if="errors.length">
                <ul class="validation-error mb-3">
                  <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <label for="fname">Имя</label>
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    v-model="fname"
                    placeholder="Имя"
                    name="fname"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="lname">Фамилия</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    v-model="lname"
                    placeholder="Фамилия"
                    name="lname"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="phone">Номер телефона</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    v-model="phone"
                    placeholder="Введите свой номер"
                    name="phone"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    v-model="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="message">Напишите своё сообщение</label>
                  <textarea
                    class="form-control"
                    placeholder="Напишите своё сообщение"
                    id="message"
                    v-model="message"
                    name="message"
                    rows="6"
                  ></textarea>
                </div>
                <div class="col-md-12">
                  <input type="submit" class="btn btn-solid" value="Сохранить" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->

    <!-- address section start -->
    <section class="contact-page register-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h3>{{title2}}</h3>
            <!-- <form class="theme-form" @submit="checkForm2" method="post"> -->
              <!-- ИЛИ -->
            <form class="theme-form" @submit.prevent="checkForm2" method="post">
              <div class="form-row">
                <div class="col-md-6">
                  <label for="zip-code">Почтовый индекс *</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip-code"
                    placeholder="Почтовый индекс"
                    required
                  />
                </div>
                <div class="col-md-6 select_input">
                  <label for="review">Страна *</label>
                  <select class="form-control" size="1">
                    <option value="Russia">Россия</option>
                    <option value="Ukraine">Украина</option>
                    <option value="Kazakhstan">Казахстан</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="region">Область *</label>
                  <input
                    type="text"
                    class="form-control"
                    id="region"
                    placeholder="Область"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="city">Город *</label>
                  <input type="text" class="form-control" id="city" placeholder="Город" required />
                </div>
                <div class="col-md-6">
                  <label for="address">Улица *</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="Улица"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="home-ploat">Дом / Квартира</label>
                  <input
                    type="text"
                    class="form-control"
                    id="home-ploat"
                    placeholder="Дом / Квартира"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <button class="btn btn-sm btn-solid" type="submit">Сохранить настройки</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
    <Footer />
  </div>
</template>

<script>
  import Footer from "../../../components/footer/footer";
  import Breadcrumbs from "../../../components/widgets/breadcrumbs";
  export default {
    components: {
      Footer,
      Breadcrumbs
    },
    data() {
      return {
        title1: "Личная информация",
        title2: "Адрес доставки",
        errors: [],
        fname: null,
        lname: null,
        email: null,
        phone: null,
        message: null
      };
    },
    methods: {
      checkForm1: function(e) {
        this.errors = [];
        if (!this.fname) {
          this.errors.push("First name required.");
        }
        if (!this.lname) {
          this.errors.push("Last name required.");
        }
        if (!this.email) {
          this.errors.push("Email required.");
        } else if (!this.validEmail(this.email)) {
          this.errors.push("Valid email required.");
        }
        if (!this.phone) {
          this.errors.push("Phone Number required.");
        }
        if (!this.message) {
          this.errors.push("Message required.");
        }
        if (!this.errors.length) return true;
        e.preventDefault();
      },
      validEmail: function(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  };
</script>
