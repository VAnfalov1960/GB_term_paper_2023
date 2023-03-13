<template>
  <div class="container-fluid layout-8">
    <h1 hidden="true">Страница Контакты</h1>
    <Breadcrumbs title="Контакты" />
    <section class="contact-page section-b-space">
      <div class="container">
        <div class="row section-b-space">
          <div class="col-lg-7 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.464710752585!2d49.46092121548938!3d53.47802607254135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41687f0763a38593%3A0x6cf61dbd8f2737b8!2z0YPQuy4g0JzRg9GA0YvRgdC10LLQsCwgNTUsINCi0L7Qu9GM0Y_RgtGC0LgsINCh0LDQvNCw0YDRgdC60LDRjyDQvtCx0LsuLCA0NDUwNDY!5e0!3m2!1sru!2sru!4v1664038676632!5m2!1sru!2sru"
              width="100%"
              height="450"
              style="border:1;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="col-lg-5">
            <div class="contact-right">
              <ul>
                <li>
                  <div class="contact-icon">
                    <img :src="phoneimage" alt="Общее изображение-заполнитель" />
                    <h6>Телефон</h6>
                  </div>
                  <div>
                    <p>
                      <a :href="phone1">{{phone2}}</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <h6>Адрес</h6>
                  </div>
                  <div class="media-body">
                    <p v-html="address"></p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <img :src="emailimage" alt="Generic placeholder image" />
                    <h6>Email</h6>
                  </div>
                  <div class="media-body">
                    <p>
                      <a href="mailto:admin@dmtgl.ru">admin@dmtgl.ru</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/footer/footer";
import Form from "../../components/widgets/form1";
import Breadcrumbs from "../../components/widgets/breadcrumbs";

export default {
  components: {
    Breadcrumbs,
    Footer
  },
  data() {
    return {
      phoneimage: require("@/assets/images/icon/phone.png"),
      emailimage: require("@/assets/images/icon/email.png"),
      phone1: "tel:+79967333324",
      phone2: "+7 (996) 733-33-24 (Теле2)",
      address:
        "445046, РФ, Самарская область, <br /> город Тольятти, ул. Мурысева, д.55",
      email1: "tltdtdm@mail.ru",
      email2: "anfalow_w@rambler.ru",
      errors: [],
      fname: null,
      lname: null,
      email: null,
      phone: null,
      message: null
    };
  },
  methods: {
    checkForm: function(e) {
      this.errors = [];
      if (!this.fname) {
        this.errors.push("Требуется имя.");
      }
      if (!this.lname) {
        this.errors.push("Требуется фамилия.");
      }
      if (!this.email) {
        this.errors.push("Электронная почта требуется.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Требуется действительный адрес электронной почты.");
      }
      if (!this.phone) {
        this.errors.push("Требуется номер телефона.");
      }
      if (!this.message) {
        this.errors.push("Требуется сообщение.");
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
