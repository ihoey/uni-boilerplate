import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    systemInfo: null,
  },
  mutations: {
    ["GET_SYSTEMINFO_SUCCESS"](state: { systemInfo: any }, systemInfo: any) {
      state.systemInfo = systemInfo;
    },
  },
  actions: {
    getSystemInfo({ commit, state }: any) {
      return new Promise((resolve, reject) => {
        console.log(state);
        if (state.systemInfo) {
          resolve(state.systemInfo);
        } else {
          wx.getSystemInfo({
            success(res) {
              commit("GET_SYSTEMINFO_SUCCESS", res);
              resolve(res);
            },
            fail(err) {
              reject(err);
            },
          });
        }
      });
    },
  },
  getters: {
    isIphoneX: (state: { systemInfo: any }) => {
      return state.systemInfo ? state.systemInfo.model.includes("iPhone X") : false;
    },
  },
});
