import { createStore } from "vuex";

// Initial State
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true");
}
const state = {
  isDarkMode: window.localStorage.getItem("isDarkMode") === "true",
};

// Getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  },
};

const mutations = {
  toggleDarkMode(state) {
    state.isDarkMode = !state.isDarkMode;
    state.isDarkMode
      ? (document.body.style.background = "#212c4f")
      : (document.body.style.background = "#f0f3f5");
    window.localStorage.setItem("isDarkMode", state.isDarkMode);
  },
};

const actions = {
  triggerDarkMode(context) {
    context.commit("toggleDarkMode");
  },
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
