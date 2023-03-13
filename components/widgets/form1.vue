<template>
  <div>
    <section class="contact-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
              <h4>Контактная форма</h4>
            <form target="_blank" action="../../../form/mail.php" class="theme-form" @submit="checkForm" method="POST">
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
                    placeholder="Например, Владимир"
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
                    placeholder="Например, Анфалов"
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
                    placeholder="Например, +78482222209"
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
                    placeholder="Например, ******@rambler.ru"
                    name="email"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="message">Напишите здесь своё сообщение</label>
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
                  <p>Нажимая на кнопку, я соглашаюсь на
                    <a target="_blank"
                    href="https://u138056.test-handyhost.ru/courses/Politics.pdf"
                    style="color: green"
                  >обработку персональных данных </a>и c <a target="_blank"
                    href="https://u138056.test-handyhost.ru/courses/Rules.pdf"
                    style="color: green"
                  >правилами пользования Платформой </a>
                  </p><br />
                  <input type="reset" class="btn btn-solid" style="border: 1px solid white; border-radius: 40px; margin-left: 10px; min-width: 260px" value="Очистить форму" name="reset" accesskey="r" />
                  <input type="submit" class="btn btn-solid" style="border: 1px solid white; border-radius: 40px; margin-left: 10px; min-width: 260px" value="Отправьте своё сообщение" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data() {
      return {
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
      checkForm2: function(e) {
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
        if (!this.message) {
          this.errors.push("Требуется сообщение.");
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
