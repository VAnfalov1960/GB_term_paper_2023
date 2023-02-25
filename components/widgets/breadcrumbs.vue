<template>
  <div>
    <div class="breadcrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="page-title">
              <nuxt-link :to="{ path: '/'}">
                    <!-- <img src="@/assets/images/icon/logo.png" class="img-fluid"  title="Переход на главную страницу" alt="Логотип" /> -->
                    <p><timeless-clock :displaySeconds="true" 
                      timezone="Europe/Samara" style="font-size: 16px; font-weight:bold;" /></p>
              </nuxt-link>
              <!-- НАДО ЛИ? -->
              <!-- <h2>{{ title }}</h2> -->
            </div>
          </div>
          <div class="col-sm-6">
            <nav aria-label="breadcrumb" class="theme-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link :to="{ path: '/' }">В начало</nuxt-link>
                </li>
                <li class="breadcrumb-item active" v-if="title">{{ title }}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import TimelessClock from 'vuejs-timeless-clock'

  export default {
    props: ["title"],
    components: {
      TimelessClock
    },
  };
</script>
