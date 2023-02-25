<template>
  <div class="container-fluid layout-8">
    <Breadcrumbs title="Контакты" />
    <h1>Страница Контакты</h1>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/footer/footer";
import Breadcrumbs from "../../components/widgets/breadcrumbs";

export default {
  components: {
    Breadcrumbs,
    Footer
  }
};
</script>
