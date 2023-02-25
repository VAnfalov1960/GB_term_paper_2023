<template>
  <div>
    <Header />
    <nuxt id="body-content" />
    <div id="txt"></div>
    <layoutSetting />
    <div class="tap-top top-cls" v-scroll-to="'#body-content'" title="Переход вверх страницы">
      <div>
        <i class="fa fa-angle-double-up"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import layoutSetting from "../components/widgets/layout-setting";
export default {
  head() {
    return {
      title: "Курсовая работа GeekBrains"
    };
  },
  components: {
    layoutSetting,
    Header
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  }
};
</script>
