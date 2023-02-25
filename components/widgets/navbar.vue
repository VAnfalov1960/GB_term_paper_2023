<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
            Главная
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/page/about_courses">
            О нас
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/shop/courses">
            Курсы
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/page/contact">
            Контакты
          </nuxt-link>
          <li class="nav-item">
          <nuxt-link class="nav-link" to="/page/login">
            Авторизация
          </nuxt-link>
        </li>
        </li>
      </ul>
    </div>
  </nav>
</template>
