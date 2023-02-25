import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout'
import menu from './modules/menu';
Vue.use(Vuex);
const createStore = () => {
    return new Vuex.Store({
        modules: {
            layout,
            menu
        },
    });
};
export default createStore;
