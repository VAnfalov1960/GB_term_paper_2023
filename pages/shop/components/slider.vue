<template>
  <div>
    <h2 hidden="false">ДТДМ слайдер</h2>
    <section class="pt-0 padding-bottom-cls">
      <div class="slide-1 home-slider">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in items"
              :key="index"
            >
              <div
                class="home text-center"
                :class="item.alignclass"
                style="border: 1px solid white; border-radius: 40px"
                v-bind:style="{
                  'background-image': 'url(' + item.imagepath + ')',
                }"
              >
                <nuxt-link :to="{ path: item.src }">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div class="slider-contain">
                          <div class="typo-content typo-buttons">
                            <nuxt-link
                              style="border: 1px solid white; border-radius: 40px; width: 250px; margin-top: 80%"
                              class="btn btn-solid mr-3"
                              :to="{ path: item.src }"
                            >
                              <span>{{ item.title }}</span>
                              <span>{{ item.subtitle1 }}</span>
                            </nuxt-link>
                            <!-- <div class="typo-content typo-buttons">уууууууу</div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        swiperOption: {
          speed: 1000,
          slidesPerView: 1,
          spaceBetween: 10,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,

          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },

          effect: "fade",

          keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
        items: [
          {
            title: "Он-лайн обучение",
            subtitle1: "",
            imagepath: require("@/assets/images/home-banner/1001.jpg"),
            src: "../shop/courses",
            alignclass: "p-center",
          },
          {
            title: "Кино и театр",
            subtitle1: "",
            imagepath: require("@/assets/images/home-banner/1006.jpg"),
            src: "../shop/theatre",
            alignclass: "p-center",
          }
        ],
      };
    },
  };
</script>
