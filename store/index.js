import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout'
import menu from './modules/menu';
import products from './modules/products';

Vue.use(Vuex);
const createStore = () => {
    return new Vuex.Store({
        modules: {
            layout,
            menu,
            products
        },
    });
};
export default createStore;
