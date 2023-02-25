<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" >
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" >
          <nuxt-link class="nav-link" to="/">
            Главная
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about">
            О нас
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/courses">
            Курсы
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/contact">
            Контакты
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/login">
            Авторизация
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
  }
</script>

