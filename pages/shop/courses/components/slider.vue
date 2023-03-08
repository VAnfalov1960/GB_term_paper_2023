<template>
  <div>
    <h2 hidden="true">Слайдер</h2>
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
                v-bind:style="{
                  'background-image': 'url(' + item.imagepath + ')',
                }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div class="typo-content typo-buttons">
                          <a
                            target="_blank"
                            :href="item.src"
                            class="btn btn-solid mr-3"
                            style="border-radius: 10px; width: 300px"
                          >
                            <span>{{ item.title }}</span>
                            <span>{{ item.subtitle1 }}</span>
                          </a>

                          <div class="typo-content typo-buttons">
                            <!-- <a :href="item.src" class="btn btn-solid mr-3" target="_blank">Подробнее</a> -->
                            <!-- <a
                              :href="item.src"
                              class="btn btn-outline mr-3"
                              target="_blank"
                            >{{ item.subtitle1 }}</a>-->
                            <!-- <a
                              :href="item.src"
                              class="btn btn-solid black-btn mr-3"
                              target="_blank"
                            >{{ item.subtitle1 }}</a>-->
                            <!-- <a
                              :href="item.src"
                              class="btn btn-solid btn-sm"
                              target="_blank"
                            >{{ item.subtitle1 }}</a>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            title: "Онлайн-курсы",
            subtitle1: "",
            imagepath: require("@/assets/images/slider/1001.jpg"),
            src: "#",
            alignclass: "p-center",
          },
          {
            title: "Онлайн-курсы",
            subtitle1: "",
            imagepath: require("@/assets/images/slider/1001.jpg"),
            src: "#",
            alignclass: "p-center",
          },
          {
            title: "Онлайн-курсы",
            subtitle1: "",
            imagepath: require("@/assets/images/slider/1001.jpg"),
            src: "#",
            alignclass: "p-center",
          },
        ],
      };
    },
  };
</script>
