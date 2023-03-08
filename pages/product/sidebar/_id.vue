<template>
  <div>
    <Breadcrumbs :title="getDetail.title" />
    <section class="section-b-space">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-xs-12 productdetail">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6">
                    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                      <div class="swiper-wrapper">
                        <div
                          class="swiper-slide"
                          v-for="(product,index) in getDetail.images"
                          :key="index"
                        >
                          <a
                            v-if="product.src_big"
                            :href="getImgUrl(product.src_big)"
                            target="_blank"
                          >
                            <img
                              :src="getImgUrl(product.src)"
                              :id="product.image_id"
                              class="img-fluid bg-img"
                              :alt="product.alt"
                              style="border:1px solid grey; border-radius: 10px; width: 100%"
                            />
                          </a>
                          <img
                            v-if="!product.src_big"
                            :src="getImgUrl(product.src)"
                            :id="product.image_id"
                            class="img-fluid bg-img"
                            :alt="product.alt"
                            style="border:1px solid grey; border-radius: 10px; width: 100%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 rtl-text">
                    <div class="product-right">
                      <h3>{{ getDetail.title }}</h3>
                      <div class="border-product">
                        <h5 class="product-title">Краткая информация о продукте</h5>
                        <p>{{getDetail.description1.substring(0,200)+"...."}}</p>
                      </div>
                      <p>(Идентификационный номер: {{ getDetail.id }})</p>
                      <br />
                      <div v-if="getDetail.price > 0">
                        <h4>Актуальные цены уточняйте на официальном сайте</h4>
                        <h4
                          v-if="getDetail.sale > 0"
                        >Ориентировочная цена: {{ discountedPrice(getDetail)}} руб.</h4>
                        <h4 v-else>Ориентировочная цена: {{ getDetail.price }} руб.</h4>
                        <h4 v-if="getDetail.sale && getDetail.discount > 0">
                          <del>{{ getDetail.price }} руб.</del>
                          - cкидка сайта {{ getDetail.discount }}%
                        </h4>
                        <!-- <br v-if="getDetail.discount > 0" /> -->
                        <div>
                          <h4
                            v-if="getDetail.promo > 0"
                          >+ 10% кэшбек по промокоду: {{ getDetail.promo }}.</h4>
                          <nuxt-link
                            target="_blank"
                            :to="{ path: '/page/account/contact'}"
                            title="Контактная информация"
                          >
                            <h6
                              v-if="(getDetail.brand == 'Инфоурок')"
                            >Предусмотрена дополнительная скидка 25%.</h6>
                            <h6
                              v-if="(getDetail.brand == 'Инфоурок')"
                            >Все вопросы к администратору этого сайта через контактную форму или по телефону.</h6>
                          </nuxt-link>
                          <br />
                          <!-- <br v-if="(getDetail.price * counter ) == 0" /> -->
                        </div>

                        <div class="pro_inventory" v-if="getDetail.allstudents || getDetail.stock">
                          <div class="inventory-scroll">
                            <span
                              :style="{width: (100/getDetail.allstudents*(getDetail.stock - counter)) +'%'}"
                            ></span>
                          </div>
                        </div>
                        <div class="pro_inventory" v-if="getDetail.allstudents">
                          <p
                            v-if="((getDetail.stock - counter) > 30)"
                            class="active"
                          >Осталось более 10 свободных мест</p>
                          <p
                            v-if="((getDetail.stock - counter) >= 5) && ((getDetail.stock - counter) <= 10)"
                            class="active"
                            style="color: green"
                          >Осталось {{getDetail.stock - counter}} свободных мест</p>
                          <p
                            v-if="((getDetail.stock - counter) < 5) && ((getDetail.stock - counter) > 1)"
                            class="active"
                            style="color: yellow"
                          >Осталось {{ getDetail.stock - counter}} свободных места</p>
                          <p
                            v-if="((getDetail.stock - counter) == 1)"
                            class="active"
                            style="color: orange"
                          >Осталось {{ getDetail.stock - counter}} свободное место</p>
                          <p
                            v-if="((getDetail.stock - counter) == 0)"
                            class="active avalibility"
                            style="color: red"
                          >Свободных мест нет</p>
                        </div>

                        <div class="product-description border-product">
                          <div v-if="(getDetail.stock > 0)" class="qty-box">
                            <h4 class="product-title">
                              Оплата за:
                              <span></span>
                            </h4>
                            <div class="input-group">
                              <span class="input-group-prepend">
                                <button
                                  type="button"
                                  class="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field
                                  @click="decrement()"
                                >
                                  <i class="ti-angle-left"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                name="quantity"
                                class="form-control input-number"
                                :disabled="counter > getDetail.stock"
                                v-model="counter"
                              />
                              <span class="input-group-prepend">
                                <button
                                  :disabled="counter >= getDetail.stock"
                                  type="button"
                                  class="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field
                                  @click="increment()"
                                >
                                  <i class="ti-angle-right"></i>
                                </button>
                              </span>
                            </div>
                            <h4 v-if="(counter >= 5 ) && (counter <= 30)" class="product-title">
                              <span></span>мест
                            </h4>
                            <h4 v-if="(counter > 1) && (counter < 5)" class="product-title">
                              <span></span>места
                            </h4>
                            <h4 v-if="counter == 1" class="product-title">
                              <span></span>место
                            </h4>
                            <h4 v-if="counter == 0" class="product-title">
                              <span></span>мест
                            </h4>
                          </div>
                        </div>
                        <div v-if="counter > 0">
                          <h3 v-if="getDetail.sale">{{ discountedPrice(getDetail) * counter }} руб.</h3>
                          <h3 v-else>{{ getDetail.price * counter }} руб.</h3>
                        </div>
                        <nuxt-link
                          target="_blank"
                          :to="{ path: '/page/account/contact'}"
                          title="Контактная информация<"
                        >
                          <h6
                            v-if="((getDetail.price * counter ) > 0) && (getDetail.brand == 'Инфоурок')"
                          >
                            Стоимость
                            <span style="color: red">ОБЯЗАТЕЛЬНО</span> уточняйте у администратора ЭТОГО сайта.
                          </h6>
                        </nuxt-link>
                        <br v-if="(getDetail.price * counter ) == 0" />
                        <br v-if="(getDetail.price * counter ) > 0" />
                        <br v-if="(getDetail.price * counter ) > 0" />
                        <div class="product-buttons">
                          <nuxt-link :to="{ path: '/page/account/cart'}">
                            <a
                              v-if="(getDetail.stock > 0)"
                              class="btn btn-solid mr-3"
                              style="border: 1px solid white; border-radius: 40px; width: 38%; padding: 15px"
                              title="Добавить в корзину"
                              @click="addToCart(getDetail, counter)"
                              :disabled="counter > getDetail.stock"
                            >В корзину</a>
                          </nuxt-link>
                          <a
                            v-if="(getDetail.stock > 0)"
                            class="btn btn-solid mr-3"
                            style="border: 1px solid white; border-radius: 40px; width: 38%; padding: 15px"
                            title="Купить"
                            @click="buyNow(getDetail, counter)"
                            :disabled="counter > getDetail.stock"
                          >Оплатить</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section class="tab-product m-0">
                <div class="row">
                  <div class="col-sm-12 col-lg-12">
                    <b-tabs card>
                      <b-tab title="Описание" active>
                        <!-- <h4>{{getDetail.title}}</h4> -->
                        <h4 v-if="getDetail.title3">{{getDetail.title3}}</h4>
                        <br v-if="getDetail.title3" />
                        <p v-if="getDetail.description1">{{getDetail.description1}}</p>
                        <br v-if="getDetail.description1" />
                        <p v-if="getDetail.description2">{{getDetail.description2}}</p>
                        <br v-if="getDetail.description2" />
                        <p v-if="getDetail.description3">{{getDetail.description3}}</p>
                        <br v-if="getDetail.description3" />
                        <p v-if="getDetail.description4">{{getDetail.description4}}</p>
                        <br v-if="getDetail.description4" />
                        <p v-if="getDetail.description5">{{getDetail.description5}}</p>
                        <br v-if="getDetail.description5" />
                        <p v-if="getDetail.description6">{{getDetail.description5}}</p>
                        <br v-if="getDetail.description6" />
                        <p v-if="getDetail.description7">{{getDetail.description2}}</p>
                        <br v-if="getDetail.description7" />
                        <p v-if="getDetail.description8">{{getDetail.description3}}</p>
                        <br v-if="getDetail.description8" />
                        <p v-if="getDetail.description9">{{getDetail.description4}}</p>
                        <br v-if="getDetail.description9" />
                        <p v-if="getDetail.description10">{{getDetail.description5}}</p>
                      </b-tab>
                      <b-tab title="Подробные сведения">
                        <h4 v-if="getDetail.title3">{{getDetail.title3}}</h4>
                        <br v-if="getDetail.title3" />
                        <p v-if="getDetail.description11">{{getDetail.description11}}</p>
                        <br v-if="getDetail.description11" />
                        <p v-if="getDetail.description12">{{getDetail.description12}}</p>
                        <br v-if="getDetail.description12" />
                        <p v-if="getDetail.description13">{{getDetail.description13}}</p>
                        <br v-if="getDetail.description13" />
                        <p v-if="getDetail.description14">{{getDetail.description14}}</p>
                        <br v-if="getDetail.description14" />
                        <p v-if="getDetail.description15">{{getDetail.description15}}</p>
                        <br v-if="getDetail.description15" />
                        <p v-if="getDetail.description16">{{getDetail.description16}}</p>
                        <br v-if="getDetail.description16" />
                        <p v-if="getDetail.description17">{{getDetail.description17}}</p>
                        <br v-if="getDetail.description17" />
                        <p v-if="getDetail.description18">{{getDetail.description18}}</p>
                        <br v-if="getDetail.description18" />
                        <p v-if="getDetail.description19">{{getDetail.description19}}</p>
                        <br v-if="getDetail.description19" />
                        <p v-if="getDetail.description20">{{getDetail.description20}}</p>
                        <br v-if="getDetail.description20" />
                        <p v-if="getDetail.description21">{{getDetail.description21}}</p>
                        <br v-if="getDetail.description21" />
                        <p v-if="getDetail.description22">{{getDetail.description22}}</p>
                        <br v-if="getDetail.description22" />
                        <p v-if="getDetail.description23">{{getDetail.description23}}</p>
                        <br v-if="getDetail.description23" />
                        <p v-if="getDetail.description24">{{getDetail.description24}}</p>
                        <br v-if="getDetail.description24" />
                        <p v-if="getDetail.description25">{{getDetail.description25}}</p>
                        <br v-if="getDetail.description25" />
                        <p v-if="getDetail.description26">{{getDetail.description26}}</p>
                        <br v-if="getDetail.description26" />
                        <p v-if="getDetail.description27">{{getDetail.description27}}</p>
                        <br v-if="getDetail.description27" />
                        <p v-if="getDetail.description28">{{getDetail.description28}}</p>
                        <br v-if="getDetail.description28" />
                        <p v-if="getDetail.description29">{{getDetail.description29}}</p>
                        <br v-if="getDetail.description29" />
                        <p v-if="getDetail.description30">{{getDetail.description30}}</p>
                        <br v-if="getDetail.description30" />
                        <p v-if="getDetail.description31">{{getDetail.description31}}</p>
                        <br v-if="getDetail.description31" />
                        <p v-if="getDetail.description32">{{getDetail.description32}}</p>
                        <br v-if="getDetail.description32" />
                        <p v-if="getDetail.description33">{{getDetail.description33}}</p>
                        <br v-if="getDetail.description33" />
                        <p v-if="getDetail.description34">{{getDetail.description34}}</p>
                        <br v-if="getDetail.description34" />
                        <p v-if="getDetail.description35">{{getDetail.description35}}</p>
                        <br v-if="getDetail.description35" />
                        <p v-if="getDetail.description36">{{getDetail.description36}}</p>
                        <!-- <div class="single-product-tables">
                            <table>
                              <tbody>
                                <tr>
                                  <td>111</td>
                                  <td>222</td>
                                </tr>5
                                <tr>
                                  <td>333</td>
                                  <td>444</td>
                                </tr>
                                <tr>
                                  <td>555</td>
                                  <td>666</td>
                                </tr>
                              </tbody>
                            </table>
                            <table>
                              <tbody>
                                <tr>
                                  <td>Длина</td>
                                  <td>50 Дюймов</td>
                                </tr>
                                <tr>
                                  <td>Размер</td>
                                  <td>S, M, L .XXL</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>-->
                      </b-tab>
                      <b-tab title="Видео">
                        <b-card-text>
                          <div class="mt-6 text-center">
                            <iframe
                              v-if="getDetail.video_dzen_src"
                              width="480"
                              height="270"
                              :src="getDetail.video_dzen_src"
                              frameborder="0"
                              scrolling="no"
                              allowfullscreen
                            ></iframe>
                            <!-- Youtube Embed -->
                            <!-- Легко встраивайте проигрыватель YouTube или Vimeo и лениво загружайте видео, чтобы сэкономить ресурсы и уменьшить первоначальный размер загрузки. Полезно, когда важна производительность и размер страницы или для сайтов с большим количеством встроенных видео. -->
                            <!-- https://github.com/seeratawan01/vue-lazytube -->
                            <!-- РАБОТАЕТ!!! ЗАДАЮТСЯ РАЗМЕРЫ, РАБОТАЮТ КНОПКИ!!! -->
                            <!-- <LazyYoutube
                              v-if="getDetail.video1src"
                              ref="lazyVideo"
                              maxWidth="540px"
                              :src="getDetail.video1src"
                            />
                            <br />
                            <button @click="handleClick('playVideo')">Play</button>
                            <button @click="handleClick('stopVideo')">Stop</button>
                            <button @click="handleClick('pauseVideo')">Pause</button>
                            <button @click="handleClick('resetView')">Reset</button>
                            <br />
                            <br />-->

                            <!-- Vimeo Embed -->
                            <!-- ВСЁ РАБОТАЕТ!!! -->
                            <!-- <LazyVimeo src="https://player.vimeo.com/video/64654583" /> -->

                            <!-- НИЖЕ РАЗМЕРЫ ОКНА ПРОИГРЫВАТЕЛЯ НЕ ИЗМЕНЯЮТСЯ, НАЙТИ ОШИБКУ!!! -->
                            <!-- ПРОИГРЫВАТЕЛЬ ЗАНИМАЕТ 100%!!! -->
                            <h4 v-if="getDetail.title1src">{{ getDetail.title1src }}</h4>
                            <video-embed
                              v-if="getDetail.video1src"
                              player-width="300"
                              player-height="200"
                              ref="youtube"
                              :params="{autoplay: 0}"
                              :src="getDetail.video1src"
                              frameborder="1"
                              css="embed-responsive-16by9"
                            ></video-embed>
                            <br v-if="getDetail.title2src" />
                            <h4 v-if="getDetail.title2src">{{ getDetail.title2src }}</h4>
                            <video-embed
                              v-if="getDetail.video2src"
                              player-width="300"
                              player-height="200"
                              ref="youtube"
                              :params="{autoplay: 0}"
                              :src="getDetail.video2src"
                              frameborder="1"
                              css="embed-responsive-16by9"
                            ></video-embed>
                            <br v-if="getDetail.title3src" />
                            <h4 v-if="getDetail.title3src">{{ getDetail.title3src }}</h4>
                            <video-embed
                              v-if="getDetail.video3src"
                              player-width="300"
                              player-height="200"
                              ref="youtube"
                              :params="{autoplay: 0}"
                              :src="getDetail.video3src"
                              frameborder="1"
                              css="embed-responsive-16by9"
                            ></video-embed>
                            <br v-if="getDetail.title4src" />
                            <h4 v-if="getDetail.title4src">{{ getDetail.title4src }}</h4>
                            <video-embed
                              v-if="getDetail.video4src"
                              player-width="300"
                              player-height="200"
                              ref="youtube"
                              :params="{autoplay: 0}"
                              :src="getDetail.video4src"
                              frameborder="1"
                              css="embed-responsive-16by9"
                            ></video-embed>
                            <br v-if="getDetail.title5src" />
                            <h4 v-if="getDetail.title5src">{{ getDetail.title5src }}</h4>
                            <video-embed
                              v-if="getDetail.video5src"
                              player-width="300"
                              player-height="200"
                              ref="youtube"
                              :params="{autoplay: 0}"
                              :src="getDetail.video5src"
                              frameborder="1"
                              css="embed-responsive-16by9"
                            ></video-embed>

                            <h4
                              v-if="getDetail.video_start_title  && getDetail.video_start"
                            >{{ getDetail.video_start_title }}</h4>
                            <a
                              v-if="getDetail.video_start"
                              :href="getDetail.video_start"
                              target="_blank"
                            >
                              <img
                                :src="require(`@/assets/images/theatre/${getDetail.id}_start.jpg`)"
                                class="img-fluid bg-img"
                                style="border: 1px solid white; border-radius: 10px; width: 80%;"
                              />
                            </a>
                            <br v-if="getDetail.video_z1_title && getDetail.video_z1" />
                            <br v-if="getDetail.video_z1_title && getDetail.video_z1" />
                            <h4
                              v-if="getDetail.video_z1_title  && getDetail.video_z1"
                            >{{ getDetail.video_z1_title }}</h4>
                            <a v-if="getDetail.video_z1" :href="getDetail.video_z1" target="_blank">
                              <img
                                :src="require(`@/assets/images/theatre/${getDetail.id}_z1.jpg`)"
                                class="img-fluid bg-img"
                                style="border: 1px solid white; border-radius: 10px; width: 80%;"
                              />
                            </a>
                            <br v-if="getDetail.video_z2_title && getDetail.video_z2" />
                            <br v-if="getDetail.video_z2_title && getDetail.video_z2" />
                            <h4
                              v-if="getDetail.video_z2_title  && getDetail.video_z2"
                            >{{ getDetail.video_z2_title }}</h4>
                            <a v-if="getDetail.video_z2" :href="getDetail.video_z2" target="_blank">
                              <img
                                :src="require(`@/assets/images/theatre/${getDetail.id}_z2.jpg`)"
                                class="img-fluid bg-img"
                                style="border: 1px solid white; border-radius: 10px; width: 80%;"
                              />
                            </a>
                            <br v-if="getDetail.video_z3_title && getDetail.video_z3" />
                            <br v-if="getDetail.video_z3_title && getDetail.video_z3" />
                            <h4
                              v-if="getDetail.video_z3_title  && getDetail.video_z3"
                            >{{ getDetail.video_z3_title }}</h4>
                            <a v-if="getDetail.video_z3" :href="getDetail.video_z3" target="_blank">
                              <img
                                :src="require(`@/assets/images/theatre/${getDetail.id}_z3.jpg`)"
                                class="img-fluid bg-img"
                                style="border: 1px solid white; border-radius: 10px; width: 80%;"
                              />
                            </a>
                            <br v-if="getDetail.video_z4_title && getDetail.video_z4" />
                            <br v-if="getDetail.video_z4_title && getDetail.video_z4" />
                            <h4
                              v-if="getDetail.video_z4_title  && getDetail.video_z4"
                            >{{ getDetail.video_z4_title }}</h4>
                            <a v-if="getDetail.video_z4" :href="getDetail.video_z4" target="_blank">
                              <img
                                :src="require(`@/assets/images/theatre/${getDetail.id}_z4.jpg`)"
                                class="img-fluid bg-img"
                                style="border: 1px solid white; border-radius: 10px; width: 80%;"
                              />
                            </a>
                            <br v-if="getDetail.video_end_title && getDetail.video_end" />
                            <br v-if="getDetail.video_end_title && getDetail.video_end" />
                            <h4
                              v-if="getDetail.video_end_title  && getDetail.video_end"
                            >{{ getDetail.video_end_title }}</h4>
                            <a
                              v-if="getDetail.video_end"
                              :href="getDetail.video_end"
                              target="_blank"
                            >
                              <img
                                :src="require(`@/assets/images/theatre/${getDetail.id}_end.jpg`)"
                                class="img-fluid bg-img"
                                style="border: 1px solid white; border-radius: 10px; width: 80%;"
                              />
                            </a>
                          </div>
                        </b-card-text>
                      </b-tab>
                      <b-tab title="Написать отзыв">
                        <b-card-text>
                          <form
                            action="../../../../form/mail2.php"
                            target="_blank"
                            method="POST"
                            class="theme-form"
                          >
                            <div class="form-row">
                              <div class="col-md-12">
                                <div class="media">
                                  <label>Рейтинг</label>
                                  <div class="media-body ml-3">
                                    <div class="rating three-star">
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <label for="fname">Имя</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="name"
                                  placeholder="Введите своё имя"
                                  name="fname"
                                  required
                                />
                              </div>
                              <div class="col-md-6">
                                <label for="email">Электронная почта</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="email"
                                  placeholder="Email"
                                  name="email"
                                  v-model="email"
                                  required
                                />
                              </div>
                              <div class="col-md-12">
                                <label for="review">Заголовок рецензии</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="review"
                                  placeholder="Введите тему вашего обзора"
                                  v-model="review"
                                  name="review"
                                  required
                                />
                              </div>
                              <div class="col-md-12">
                                <label for="message">Текст рецензии</label>
                                <textarea
                                  class="form-control"
                                  placeholder="Напишите здесь свой отзыв"
                                  id="exampleFormControlTextarea1"
                                  rows="6"
                                  v-model="message"
                                  name="message"
                                ></textarea>
                              </div>
                              <!-- Добавить кнопку Очистить -->
                              <div class="col-md-12">
                                <input
                                  class="btn btn-solid"
                                  style="border: 1px solid white; border-radius: 40px; width: 20%; padding: 15px"
                                  type="submit"
                                />
                                <input
                                  class="btn btn-solid"
                                  style="border: 1px solid white; border-radius: 40px; width: 20%; padding: 15px; margin-left: 10px"
                                  name="reset"
                                  accesskey="r"
                                  type="reset"
                                />
                              </div>
                            </div>
                          </form>
                        </b-card-text>
                      </b-tab>
                    </b-tabs>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <!-- Только педагогам скидка добавить проерку на Инфоурок -->
      <!-- Ссылки imagepath внизу -->
      <section v-if="getDetail.brand == 'Инфоурок'" class="section-b-space">
        <br />
        <br />
        <br />
        <div class="container">
          <div
            class="row banner-timer"
            v-bind:style="{ 'background-image': 'url(' + imagepath2 + ')' }"
            style="width: 100%; margin-top: -140px"
          >
            <div class="col-md-6">
              <div class="banner-text">
                <h2 v-html="offer_text"></h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Сопутствующие товары -->
      <relatedProduct
        v-if="getDetail.type == 'курсы'"
        :productTYpe="productTYpe"
        :productId="productId"
      />
      <!-- Размер одежды... -->
      <!-- <b-modal id="modal-1" size="md" centered hide-footer>
        <template v-slot:modal-title>{{getDetail.title}}</template>
        <img src="../../../assets/images/size-chart.jpg" alt="size-chart" class="img-fluid" />
      </b-modal>-->
    </section>
    <Footer />
  </div>
</template>
<script src="./vue-lazytube.umd.min.js"></script>
<script>
import Vue from "vue";
import Embed from "v-video-embed";
import { mapState, mapGetters } from "vuex";
import Footer from "../../../components/footer/footer";
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
import relatedProduct from "../../../components/widgets/related-products";
import LazyTube from "vue-lazytube";

Vue.use(Embed);

export default {
  components: {
    Footer,
    Breadcrumbs,
    relatedProduct
  },

  data() {
    return {
      errors: [],
      fname: null,
      lname: null,
      email: null,
      phone: null,
      review: null,
      message: null,
      counter: 0,
      activeColor: "",
      selectedSize: "",
      qty: "",
      size: [],
      productTYpe: "",
      productId: "",
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true
      },
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        centeredSlides: false
      }
    };
  },
  computed: {
    ...mapState({
      currency: state => state.products.currency
    }),
    ...mapGetters({
      curr: "products/changeCurrency"
    }),
    getDetail: function() {
      return this.$store.getters["products/getProductById"](
        this.$route.params.id
      );
    },
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.relatedProducts();
  },
  methods: {
    handleClick(event) {
      this.$refs["lazyVideo"][event]();
    },
    priceCurrency: function() {
      this.$store.dispatch("products/changeCurrency");
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    // Related Products display
    relatedProducts() {
      this.productTYpe = this.getDetail.type;
      this.productId = this.getDetail.id;
    },

    // add to cart
    addToCart: function(product, qty) {
      product.quantity = qty || 1;
      this.$store.dispatch("cart/addToCart", product);
    },
    buyNow: function(product, qty) {
      product.quantity = qty || 1;
      this.$store.dispatch("cart/addToCart", product);
      this.$router.push("/page/account/checkout");
    },
    // Item Count
    increment() {
      this.counter++;
    },
    decrement() {
      if (this.counter >= 1) this.counter--;
    },
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false);
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
      if (!this.phone) {
        this.errors.push("Требуется номер телефона.");
      }
      if (!this.review) {
        this.errors.push("Требуется заголовок рецензии.");
      }
      if (!this.message) {
        this.errors.push("Требуется текст рецензии.");
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
