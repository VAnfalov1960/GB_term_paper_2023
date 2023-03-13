import Vue from "vue";
import Vuex from "vuex";
import layout from "./modules/layout";
import menu from "./modules/menu";
import products from "./modules/products";
import cart from "./modules/cart";
import filter from "./modules/filter";

Vue.use(Vuex);
const createStore = () => {
    return new Vuex.Store({
        modules: {
            layout,
            menu,
            products,
            cart,
            filter,
        },
    });
};
export default createStore;