<template>
  <div>
    <h2 hidden="true">Коллекционный баннер</h2>
    <section class="banner-goggles ratio2_3">
      <div class="container-fluid">
        <div class="row partition3">
          <div class="col-md-6" v-for="(item, index) in items" :key="index">
            <nuxt-link :to="{ path: item.src }">
              <div
                class="collection-banner p-center text-center"
                style="border: 1px solid white; border-radius: 10px;"
              >
                <div class="img-part">
                  <img
                    style="border: 1px solid white; border-radius: 10px;"
                    :src="item.imagepath"
                    class="img-fluid"
                    alt
                  />
                </div>
                <nuxt-link :to="{ path: item.src }" class="contain-banner banner-4">
                  <span
                    class="btn btn-solid"
                    style="border: 1px solid white; border-radius: 40px; padding: 0 10px;"
                    >{{ item.title }}</span
                  >
                </nuxt-link>
              </div>
            </nuxt-link>
          </div>
         </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        items: [
          {
            imagepath: require("@/assets/images/collection_banner/1.jpg"),
            src: "../shop/courses",
            title: "Курсы",
            subtitle: "",
          },
          {
            imagepath: require("@/assets/images/collection_banner/2.jpg"),
            src: "../shop/theatre",
            title: "Театр",
            subtitle: "",
          }
        ],
      };
    },
  };
</script>
