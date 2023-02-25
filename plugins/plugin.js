import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Vue2Filters from 'vue2-filters';
import { VueMasonryPlugin } from 'vue-masonry';
import InfiniteLoading from 'vue-infinite-loading';
import firebase from 'firebase/app';
import PayPal from 'vue-paypal-checkout';
import VueLazyLoad from 'vue-lazyload';
import ProductZoomer from 'vue-product-zoomer';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueAwesomeSwiper);
Vue.use(Vue2Filters);
Vue.use(VueMasonryPlugin);
Vue.use(InfiniteLoading);
Vue.component('paypal-checkout', PayPal);
Vue.use(VueLazyLoad);
Vue.use(ProductZoomer);
Vue.use(VueScrollTo);

const config = {
    apiKey: "AIzaSyCIQY0NoVheAPkL4bWSHjqvu9Rjb06w8wE",
    authDomain: "dmtgl-2022.firebaseapp.com",
    projectId: "dmtgl-2022",
    storageBucket: "dmtgl-2022.appspot.com",
    messagingSenderId: "1072650465981",
    appId: "1:1072650465981:web:8818e35ced1b1878cefdd4",
    measurementId: "G-D75KX30J2D"
};
firebase.initializeApp(config);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)
