import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from "./mutations";
import { actions } from "./actions";
import constants from "../assets/data/constants";

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        CONSTANTS: constants
    },
    getters: {
        CONSTANTS: state => {
            return state.CONSTANTS;
        }
    },
    mutations: mutations,
    actions: actions
});
