<template>
  <div class="container-fluid layout-8">
    <Breadcrumbs title="Кино и театр" />
    <h1>Страница Услуги "Кино и театр"</h1>
    <div class="layout-8-bg">
      <ProductTab :products="products" :category="category" />
    </div>
    <Footer />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
import ProductTab from "./components/product_tab";
import Footer from "../../../components/footer/footer";
export default {
  components: {
    Breadcrumbs,
    ProductTab,
    Footer
  },
  data() {
    return {
      products: [],
      category: []
    };
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist
    })
  },
  mounted() {
    this.productsArray();
  },
  methods: {
    productsArray: function() {
      this.productslist.map(item => {
        if (item.type === "кино и театр") {
          this.products.push(item);
          item.collection.map(i => {
            const index = this.category.indexOf(i);
            if (index === -1) this.category.push(i);
          });
        }
      });
    }
  }
};
</script>
