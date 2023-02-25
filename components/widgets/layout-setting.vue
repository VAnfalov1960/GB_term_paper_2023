<template>
  <div>
    <!-- theme setting -->
    <a href="javascript:void(0)">
      <div class="setting-sidebar" id="setting-icon" @click="openlayoutSidebar()">
        <div>
          <i class="fa fa-cog" aria-hidden="true"></i>
        </div>
      </div>
    </a>
    <div id="setting_box" class="setting-box" :class="{ opensetting:layoutsidebar }">
      <a href="javascript:void(0)" class="overlay" @click="closelayoutSidebar()"></a>
      <div class="setting_box_body">
        <div>
          <div class="sidebar-back text-left" @click="closelayoutSidebar()">
            <i class="fa fa-angle-left pr-2" aria-hidden="true"></i> Назад
          </div>
        </div>
        <div class="setting-body">

          <div class="setting-title" @click="opensettingcontent('color option')">
            <h4>
              Вариант цвета
              <span class="according-menu"></span>
            </h4>
          </div>
           <div class="setting-contant"  :class="{ opensubmenu: isActive('color option')}">
                    <ul class="color-box">
                        <li>
                            <input id="colorPicker1" type="color" :value="layout.config.color" name="Background" @change="customizeThemeColor($event)">
                            <span>Цвет темы по умолчанию</span>
                        </li>
                    </ul>
                </div>
          <div class="setting-title" @click="opensettingcontent('rtl')">
            <h4>
              RTL
              <span class="according-menu"></span>
            </h4>
          </div>
          <div class="setting-contant" :class="{ opensubmenu: isActive('rtl') }">
            <ul class="setting_buttons">
              <li class="active" id="ltr_btn">
                <a
                  href="javascript:void(0)"
                  @click="customizeLayoutType('')"
                  class="btn setting_btn"
                >LTR</a>
              </li>
              <li id="rtl_btn">
                <a
                  href="javascript:void(0)"
                  @click="customizeLayoutType('rtl')"
                  class="btn setting_btn"
                >RTL</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    <!-- theme setting -->
    <div class="sidebar-btn dark-light-btn">
      <div class="dark-light">
        <div class="theme-layout-version" @click="customizeLayoutVersion()">Тема</div>
      </div>
    </div>

    <!-- Copy Config -->
    <div class="addcart_btm_popup" id="fixed_cart_icon">
      <a href="#" class="fixed_cart">
        <i
          class="fa fa-clone"
          aria-hidden="true"
          v-b-tooltip.hover
          title="Конфигурация"
          @click="$bvModal.show('bv-modal-example')"
        ></i>
      </a>
    </div>

    <!-- Config Popup -->
    <b-modal id="bv-modal-example" centered hide-footer hide-header>
      <button class="close" type="button" @click="$bvModal.hide('bv-modal-example')">
        <span>×</span>
      </button>
      <div class="modal-header modal-copy-header">
        <h5 class="headerTitle mb-0">Конфигурация настройщика</h5>
      </div>
      <div class="d-block config-popup">
        <p>Чтобы заменить наш дизайн на желаемую тему. Пожалуйста, выполните настройку в</p>
        <p>
          <b>Path : data > config.json</b>
        </p>
        <pre><code>{{ layout }}</code></pre>
      </div>
    </b-modal>
  </div>
</template>
<script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        layoutsidebar: false,
        activeItem: "home",
        layoutType: "ltr",
        modalShow: false
      };
    },
    computed: {
      ...mapState({
        layout: state => state.layout.layout
      })
    },
    created() {
      this.$store.dispatch("layout/set");
      if (process.client) {
        this.activeColor = localStorage.getItem("color");
      }
    },
    methods: {
      openlayoutSidebar() {
        this.layoutsidebar = true;
      },
      closelayoutSidebar() {
        this.layoutsidebar = false;
      },
      isActive: function(menuItem) {
        return this.activeItem === menuItem;
      },
      opensettingcontent: function(menuItem) {
        if (this.activeItem === menuItem) {
          this.activeItem = "";
        } else {
          this.activeItem = menuItem;
        }
      },
      customizeLayoutType(val) {
        this.$store.dispatch("layout/setLayoutType", val);
        this.layoutType = val;
      },
      selectedColor: function(menuItem) {
        return this.activeColor === menuItem;
      },
      customizeThemeColor(val) {
        this.$store.dispatch("layout/setColorScheme", event.target.value);
        document.documentElement.style.setProperty(
          "--theme-deafult",
          event.target.value
        );
      },
      customizeLayoutVersion() {
        this.$store.dispatch("layout/setLayoutVersion");
      }
    }
  };
</script>
