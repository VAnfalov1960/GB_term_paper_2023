<template>
  <div id="mySidenav" class="sidenav" :class="{ openSide:leftSidebarVal }">
    <a class="sidebar-overlay" @click="closeLeftBar(leftSidebarVal)"></a>
    <nav>
      <a @click="closeLeftBar(leftSidebarVal)">
        <div class="sidebar-back text-left">
          <i class="fa fa-angle-left pr-2" aria-hidden="true"></i>Назад<br />МЕНЮ НЕ НАСТРОЕНО
        </div>
      </a>
      <!-- Sample menu definition -->
      <ul id="sub-menu" class="sidebar-menu">
        <li>
          <a href="javascript:void(0)" @click="setActive('clothing')">
            Услуги
            <span class="sub-arrow"></span>
          </a>
          <ul class="mega-menu clothing-menu" :class="{ opensidesubmenu: isActive('clothing') }">
            <li>
              <div class="row m-0">
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>Услуга 1</h5>
                    <ul>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                    </ul>
                    <h5>Услуга 2</h5>
                    <ul>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>Услуга 3</h5>
                    <ul>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <a href="#" class="mega-menu-banner">
                    <img src="../../assets/images/courses/1001.jpg" alt class="img-fluid" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Услуга 4</a>
        </li>
        <li>
          <a href="#">Услуга 5</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    props: ["leftSidebarVal"],
    data() {
      return {
        activeItem: "clothing"
      };
    },
    methods: {
      closeLeftBar(val) {
        val = false;
        this.$emit("closeVal", val);
      },
      isActive: function(menuItem) {
        return this.activeItem === menuItem;
      },
      setActive: function(menuItem) {
        if (this.activeItem === menuItem) {
          this.activeItem = "";
        } else {
          this.activeItem = menuItem;
        }
      }
    }
  };
</script>
