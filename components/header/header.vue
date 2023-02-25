<template>
  <div>
    <header>
      <div class="mobile-fix-option"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-right pull-right">
                <Nav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
  import Nav from "../widgets/navbar";
  export default {
    data() {
      return {

      };
    },
    components: {
      Nav
    }
  };
</script>
