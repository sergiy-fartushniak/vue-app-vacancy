import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const token = localStorage.getItem('user_token');
export default new Vuex.Store({
  state: {
    userName: '',
    userPassword: '',
    token: token || null,
    isAuth: !!token,
  },
  mutations: {
    user_token(state, tokenM) {
      state.token = tokenM;
    },
  },
  actions: {

    user_token(context, userData) {
      return new Promise((resolve) => {
        axios.post('https://burburbus.com.ua/api/web/login', {
          phone: userData.phone,
          code: userData.code,
        })
          .then((response) => {
            // eslint-disable-next-line prefer-destructuring
            const tokenA = response.data.result.token;
            localStorage.setItem('user_token', tokenA);
            context.commit('user_token', tokenA);
            resolve(response);
          });
      });
    },
  },
});
