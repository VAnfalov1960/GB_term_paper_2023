<template>
    <div class="img-wrapper">
      <div class="lable-block">
        <span class="lable3" v-if="product.new">Новое</span>
        <span class="lable4" v-if="product.sale">Акция</span>
      </div>
      <div class="front">
        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
          <img
            :src="getImgUrl(imageSrc ? imageSrc : product.images[0].src)"
            :id="product.id"
            class="img-fluid bg-img"
            :alt="product.title"
            :key="index"
            style="border: 1px solid white; border-radius: 10px; width:100%"
          />
        </nuxt-link>
      </div>
      <br />
      <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
        <h5>"{{ product.title }}"</h5>
        <h6 v-if="product.description">{{ product.description }}</h6>
      </nuxt-link>

      <h4 v-if="product.sale">
        {{ discountedPrice(product) }} руб.<br />
        <del>{{ product.price }} руб.</del>
      </h4>
      <h4 v-else>{{ product.price }} руб</h4>
    </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";

  export default {
    props: ["product", "index"],
    data() {
      return {
        imageSrc: "",
      };
    },
    computed: {
      ...mapState({
        productslist: state => state.products.productslist
      }),
    },
    methods: {
      getImgUrl(path) {
        return require("@/assets/images/" + path);
      },
      discountedPrice(product) {
        const price = product.price - (product.price * product.discount) / 100;
        return price;
      }
    }
  };
</script>
