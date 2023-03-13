<template>
  <div>
    <Breadcrumbs title="Приборная панель" />
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <b-card no-body v-bind:class="dashboardtab">
            <b-tabs pills card vertical>
              <b-tab title="Информация об учетной записи" active>
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Моя приборная панель</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Привет, Владимир!</p>
                        <p>На панели управления "Моя учетная запись" у Вас есть возможность просмотреть моментальный снимок последних действий вашей учетной записи и обновить информацию о вашей учетной записи. Выберите ссылку ниже, чтобы просмотреть или отредактировать информацию.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Информация об учетной записи</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Контактная информация</h3>
                                <h6>
                                  <a href="#">Редактировать</a>
                                </h6>
                              </div>
                              <div class="box-content">
                                <h6>Владимир</h6>
                                <h6>anfalow_w@rambler.ru</h6>
                                <h6>
                                  <a href="#">Сменить пароль</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Информационные бюллетени</h3>
                                <h6>
                                  <a href="#">Редактировать</a>
                                </h6>
                              </div>
                              <div class="box-content">
                                <p>В настоящее время вы не подписаны ни на какую рассылку новостей.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>Адресная книга</h3>
                              <h6>
                                <a href="#">Управление адресами</a>
                              </h6>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>Платежный адрес по умолчанию</h6>
                                <address>
                                  Вы не установили платежный адрес по умолчанию.
                                  <h6>
                                    <a href="#">Изменить адрес</a>
                                  </h6>
                                </address>
                                <!-- <h6>
                                  <a href="#">Изменить адрес</a>
                                </h6>-->
                              </div>
                              <div class="col-sm-6">
                                <h6>Адрес доставки по умолчанию</h6>
                                <address>
                                  Вы не установили адрес доставки по умолчанию.
                                  <!-- <h6>
                                    <a href="#">Изменить адрес</a>
                                  </h6>-->
                                </address>
                                <h6>
                                  <a href="#">Изменить адрес</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Адресная книга">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Адресная книга</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Привет, Владимир!</p>
                        <p>Из своей адресной книги у Вас есть возможность изменить или отредактировать свой адрес доставки и выставления счетов.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Адресная информация</h2>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>Адресная книга</h3>
                              <h6>
                                <a href="#">Управление адресами</a>
                              </h6>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>Платежный адрес по умолчанию</h6>
                                <address>
                                  Вы не установили платежный адрес по умолчанию.
                                  <h6>
                                    <a href="#">Сменить адрес</a>
                                  </h6>
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>Адрес доставки по умолчанию</h6>
                                <address>
                                  Вы не установили адрес доставки по умолчанию.
                                  <h6>
                                    <a href="#">Сменить адрес</a>
                                  </h6>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Мои заказы">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Мои заказы</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Привет, Владимир!</p>
                        <p>Из ваших заказов у вас есть возможность просмотреть все ваши заказы и статус заказа.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Информация о заказе</h2>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title mb-3">
                              <h3>Список заказов</h3>
                              <p>Здесь реализовано в виде постоянного абзаца, заказы просто набиты в файле, связи не реализованы!!!</p>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h4>Заказ №: 2105</h4>
                                <h6>Облегающая хлопчатобумажная рубашка</h6>
                              </div>
                              <div class="col-sm-6">
                                <h4>Заказ №: 1032</h4>
                                <h6>Облегающая хлопчатобумажная рубашка</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box mt-2">
                            <div class="row">
                              <div class="col-sm-6">
                                <h4>Заказ №: 2105</h4>
                                <h6>Облегающая хлопчатобумажная рубашка</h6>
                              </div>
                              <div class="col-sm-6">
                                <h4>Заказ №: 1032</h4>
                                <h6>Облегающая хлопчатобумажная рубашка</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Новостная рассылка">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Новостная рассылка</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Привет, Владимир!</p>
                        <p>Абзац 1</p>
                        <p>Абзац 2</p>
                        <p>Абзац 3</p>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Сменить пароль">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Сменить пароль</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Привет, Владимир!</p>
                        <p>Абзац</p>
                        <p>Абзац</p>
                        <p>Абзац</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Информация об учетной записи</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Контактная информация</h3>
                                <h6>
                                  <a href="#">Редактировать</a>
                                </h6>
                              </div>
                              <div class="box-content">
                                <h6>Владимир Иванович</h6>
                                <h6>anfalow_w@rambler.ru</h6>
                                <h6>
                                  <a href="#">Сменить пароль</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Информационные бюллетени</h3>
                                <h6>
                                  <a href="#">Редактировать</a>
                                </h6>
                              </div>
                              <div class="box-content">
                                <p>В настоящее время вы не подписаны ни на какую рассылку новостей.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Выйти из системы">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Выйти из системы</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Привет, Владимир!</p>
                        <p>Выйдите из панели управления своей учётной записи. Выберите ссылку ниже, чтобы просмотреть или отредактировать информацию.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Информация об учетной записи</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Контактная информация</h3>
                                <h6>
                                  <a href="#">Редактировать</a>
                                </h6>
                              </div>
                              <div class="box-content">
                                <h6>Владимир Иванович</h6>
                                <h6>anfalow_w@rambler.ru</h6>
                                <h6>
                                  <a href="#">Сменить пароль</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Информационные бюллетени</h3>
                                <h6>
                                  <a href="#">Редактировать</a>
                                </h6>
                              </div>
                              <div class="box-content">
                                <p>В настоящее время вы не подписаны ни на какую рассылку новостей.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>Адресная книга</h3>
                              <h6>
                                <a href="#">Управление адресами</a>
                              </h6>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>Платежный адрес по умолчанию</h6>
                                <address>
                                  Вы не установили платежный адрес по умолчанию.
                                  <h6>
                                    <a href="#">Сменить адрес</a>
                                  </h6>
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>Адрес доставки по умолчанию</h6>
                                <address>
                                  Вы не установили адрес доставки по умолчанию.
                                  <h6>
                                    <a href="#">Изменить адрес</a>
                                  </h6>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
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
    }
  };
</script>
