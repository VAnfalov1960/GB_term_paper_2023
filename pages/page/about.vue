<template>
  <div class="container-fluid layout-8">
    <Breadcrumbs title="О нас" />
    <h1>Страница О нас</h1>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/footer/footer";
import Breadcrumbs from "../../components/widgets/breadcrumbs";

export default {
  components: {
    Footer,
    Breadcrumbs
  }
};
</script>
