<template>
  <div>
    <h2 hidden="true">Коллекция товаров и услуг</h2>
    <section class="section-b-space ratio_square">
      <div class="container-fluid">
        <div class="title2">
          <h2>{{subtitle}}</h2>
          <h3 class="title-inner2">{{title}}</h3>
        </div>
        <div class="row">
          <div class="col">
            <div class="theme-tab layout7-product">
              <b-tabs content-class="mt-3">
                <b-tab :title="collection" v-for="(collection,index) in category" :key="index">
                  <div class="no-slider row">
                    <div
                      class="product-box"
                      v-for="(product,index) in getCategoryProduct(collection)"
                      :key="index"
                    >
                      <productBox1
                        :product="product"
                        :index="index"
                      />
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
  import productBox1 from "../../../../components/product-box/product-box1";
  export default {
    props: ["products", "category"],
    components: {
      productBox1
    },
    data() {
      return {
        subtitle: "Онлайн курсы",
        title: "профессиональной переподготовки и повышения квалификации"
      };
    },
    methods: {
      getCategoryProduct(collection) {
        return this.products.filter(item => {
          if (item.collection.find(i => i === collection)) {
            return item;
          }
        });
      }
    }
  };
</script>
