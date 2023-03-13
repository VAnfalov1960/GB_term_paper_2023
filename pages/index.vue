<template>
  <div>
    <h1>Спринт 4</h1>
    <CollectionBanner />
    <br />
    <Slider />
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
