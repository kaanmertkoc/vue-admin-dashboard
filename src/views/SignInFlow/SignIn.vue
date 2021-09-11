<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <request-account />
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />

      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Design+Code HQ
      </h4>
      <input
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        type="email"
        placeholder="Email"
      />
      <input
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        type="password"
        placeholder="Password"
      />
      <button>Sign In</button>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
      >
        Forgot your password?
      </router-link>
      <theme-swtich />
    </div>
  </div>
</template>

<script>
import RequestAccount from "../../components/RequestAccount.vue";
import ThemeSwtich from "../../components/ThemeSwitch.vue";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwtich,
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
  width: 400px;
}
</style>
