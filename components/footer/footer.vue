<template>
  <div>
    <footer class="footer-light">
      <div class="light-layout">
        <div class="container"></div>
      </div>
      <section class="section-b-space light-layout">
        <div class="container">
          <div class="row footer-theme partition-f">
            <div class="col offset-xl-1">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>Наши услуги</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <nuxt-link :to="{ path: '/shop/courses'}" title="Просмотр услуг">Онлайн курсы</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link
                        :to="{ path: '/shop/theatre'}"
                        title="Просмотр услуг"
                      >Познавательно-развлекательные программы</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col offset-xl-1">
              <div>
                <div class="sub-title">
                  <div class="footer-title">
                    <h4>О нас</h4>
                  </div>
                  <div class="footer-contant">
                    <ul class="contact-list">
                      <li>
                        <i class="fa fa-map-marker"></i>
                        <nuxt-link :to="{ path: '/page/about'}" title="О нас">О нас</nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="footer-title footer-mobile-title">
                <br />
                <h4>О нас в мобильной версии</h4>
                <p>Немного текстовой информации о нашей организации</p>
              </div>
              <div>
                <div class="sub-title">
                  <div class="footer-title">
                    <h4>Контакты</h4>
                  </div>
                  <div class="footer-contant">
                    <ul class="contact-list">
                      <li>
                        <i class="fa fa-address-card-o"></i>
                        <nuxt-link
                          :to="{ path: '/page/contact'}"
                          title="Контактная информация<"
                        >Контактная информация</nuxt-link>
                      </li>
                      <li>
                        <i class="fa fa-phone"></i>
                        <a href="tel:+79967333324" title="Позвоните нам">Позвоните нам</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div class="footer-contant">
                <h4>Мы в соцсетях</h4>
                <div class="footer-social">
                  <ul>
                    <li>
                      <a href="javascript:void(0)" title="Не подключено">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" title="Не подключено">
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" title="Не подключено">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" title="Не подключено">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" title="Не подключено">
                        <i class="fa fa-rss" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="sub-footer">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="footer-end">
                <p>
                  <i class="fa fa-copyright" aria-hidden="true"></i> 2023 год
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="payment-card-bottom">
                <ul>
                  <li>
                    <a href="javascript:void(0)" title="Не подключено">
                      <img src="@/assets/images/icon/visa.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" title="Не подключено">
                      <img src="@/assets/images/icon/mastercard.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" title="Не подключено">
                      <img src="@/assets/images/icon/paypal.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" title="Не подключено">
                      <img src="@/assets/images/icon/american-express.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" title="Не подключено">
                      <img src="@/assets/images/icon/discover.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>
