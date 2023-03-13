<template>
  <div>
    <div class="row">
      <div class="col-xl-12">
        <div class="filter-main-btn" @click="filter = !filter">
          <span class="filter-btn btn btn-theme">
            <i class="fa fa-filter" aria-hidden="true"></i> Фильтр
          </span>
        </div>
      </div>
    </div>
    <div class="collection-filter" :class="{ 'openFilterbar' : filter }">
      <div class="collection-filter-block">
        <!-- brand filter start -->
        <div class="collection-mobile-back">
          <span class="filter-back" @click="filter = !filter">
            <i class="fa fa-angle-left" aria-hidden="true"></i> Назад
          </span>
        </div>
        <div class="collection-collapse-block open">
          <h3 class="collapse-block-title" v-b-toggle.category>Тип услуги</h3>
          <b-collapse id="category" visible accordion="myaccordion" role="tabpanel">
            <div class="collection-collapse-block-content">
              <div class="collection-brand-filter">
                <ul class="category-list">
                  <li>
                    <nuxt-link :to="{ path: '/collection/leftsidebar/all'}">Все услуги</nuxt-link>
                  </li>
                  <li v-for="(category,index) in filterbyCategory" :key="index">
                    <nuxt-link
                      :to="{ path: '/collection/leftsidebar/'+category}"
                      @click="getCategoryFilter(category)"
                    >{{ category }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
      <div class="collection-filter-block">
        <div class="collection-collapse-block open" v-if="filterbyBrand.length">
          <h3 class="collapse-block-title" v-b-toggle.brand>Бренд</h3>
          <b-collapse id="brand" visible accordion="myaccordion1" role="tabpanel">
            <div class="collection-collapse-block-content">
              <div class="collection-brand-filter">
                <div
                  class="custom-control custom-checkbox collection-filter-checkbox"
                  v-for="(brand,index) in filterbyBrand"
                  :key="index"
                >
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    :value="brand"
                    :id="brand"
                    v-model="applyFilter"
                    @change="appliedFilter(brand)"
                  />
                  <label class="custom-control-label" v-bind:for="brand">{{brand}}</label>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <!-- БРЭНД2 -->
        <div class="collection-collapse-block open" v-if="filterbyBrand2.length">
          <h3 class="collapse-block-title" v-b-toggle.brand2>Отдел</h3>
          <b-collapse id="brand2" visible accordion="myaccordion1" role="tabpanel">
            <div class="collection-collapse-block-content">
              <div class="collection-brand-filter">
                <div
                  class="custom-control custom-checkbox collection-filter-checkbox"
                  v-for="(brand2,index2) in filterbyBrand2"
                  :key="index2"
                >
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    :value="brand2"
                    :id="brand2"
                    v-model="applyFilter"
                    @change="appliedFilter(brand2)"
                  />
                  <label class="custom-control-label" v-bind:for="brand2">{{brand2}}</label>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="collection-collapse-block border-0 open">
          <h3 class="collapse-block-title" v-b-toggle.price>Цена</h3>
          <b-collapse id="price" visible accordion="myaccordion4" role="tabpanel">
            <div class="collection-collapse-block-content">
              <div class="collection-brand-filter price-rangee-picker">
                <vue-slider
                  v-model="value"
                  :min="0"
                  :max="150000"
                  ref="slider"
                  @change="sliderChange($refs.slider.getValue())"
                ></vue-slider>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
      <div class="collection-sidebar-banner">
        <nuxt-link :to="{ path: '/collection/leftsidebar/'}">
          <img :src="bannerimagepath" class="img-fluid" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  import VueSlider from "vue-slider-component";
  import "vue-slider-component/theme/antd.css";

  export default {
    data() {
      return {
        bannerimagepath: require("@/assets/images/side-banner.jpg"),
        value: [0, 150000],
        selectedcolor: [],
        selectedbrand: [],
        selectedbrand2: [],
        selectedsize: [],
        applyFilter: [],
        activeItem: "category",
        filter: false,
        swiperOption: {
          loop: false,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        }
      };
    },
    components: {
      VueSlider
    },
    computed: {
      ...mapState({
        productslist: state => state.products.productslist,
        currency: state => state.products.currency
      }),
      ...mapGetters({
        filterbyCategory: "filter/filterbyCategory",
        filterbyBrand: "filter/filterbyBrand",
        filterbyBrand2: "filter/filterbyBrand2",
        filterbycolor: "filter/filterbycolor",
        filterbysize: "filter/filterbysize"
      })
    },
    mounted() {
      this.$emit("priceVal", this.value);
    },
    methods: {
      getCategoryProduct(collection) {
        return this.productslist.filter(item => {
          if (item.collection.find(i => i === collection)) {
            return item;
          }
        });
      },
      getImgUrl(path) {
        return require("@/assets/images/" + path);
      },
      discountedPrice(product) {
        const price = product.price - (product.price * product.discount) / 100;
        return price;
      },
      isActive(filterItem) {
        return this.applyFilter.indexOf(filterItem) > -1;
      },
      appliedFilter(val) {
        this.$emit("allFilters", this.applyFilter);
      },
      sliderChange(event) {
        this.$emit("priceVal", event);
      },
      toggleSidebarBlock() {
        this.openBlock = !this.openBlock;
      },
      getCategoryFilter(category) {
        this.$store.dispatch("filter/getCategoryFilter", category);
      }
    }
  };
</script>
