<template>
  <div>
    <h1>Спринт 4</h1>
    <CollectionBanner />
    <br />
    <Slider />
    <p>Почти чистый шаблон ветка gb2-5 commit 50bb86f96b3fe88df3739513726cf5905f986ba1</p>
    <Footer />
  </div>
</template>

<script>
import CollectionBanner from "./shop/components/collection_banner";
import Slider from "./shop/components/slider";
import Footer from "../components/footer/footer";

export default {
  components: {
    CollectionBanner,
    Slider,
    Footer
  }
};
</script>
