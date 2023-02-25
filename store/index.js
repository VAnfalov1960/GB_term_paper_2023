import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout'
Vue.use(Vuex);
const createStore = () => {
    return new Vuex.Store({
        modules: {
            layout
        },
    });
};
export default createStore;
