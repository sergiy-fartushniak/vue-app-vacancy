<template>
  <div class="auth">
    <div class="auth__container">
    <h1 class="auth__title">Вхід в систему</h1>
    <h4 class="auth__subtitle">Зручний сервіс, зручні поїздки! </h4>
    <form class="auth__form" @submit.prevent="login">
      <label>
        <p class="input-text">Ім'я</p>
        <input
          type="text"
          name="text"
          placeholder="Введіть ім’я"
          class="input"
          v-model="userName"
        >
      </label>
      <label>
        <p class="input-text">Пароль</p>
        <input
          type="password"
          name="password"
          placeholder="Введіть пароль"
          class="input"
          v-model="userPassword"
        >
      </label>
      <label>
        <input
          type="checkbox"
          name="remember"
          v-model="rememberMe"
        >
        Запам’ятати мене
      </label>
      <button
        class="login-button"
        type="submit"

      >
        Увійти
      </button>
    </form>
    <a class="help-link" href="#" >Потрібна допомога</a>
  </div>
  </div>
</template>

<script>

export default {
  name: 'AuthPage',
  data() {
    return {
      userName: '',
      userPassword: '',
      rememberMe: false,
    };
  },
  methods: {

    login() {
      const { userName, userPassword } = this;
      this.$store.dispatch('user_token', { phone: userName, code: userPassword })
        .then(() => this.$router.push({ name: 'Vacancies' }));
    },
  },
};
</script>

<style scoped lang="scss">
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rbga(75, 72, 72 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &__container {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 480px;
  background-color: #F0F4F4;
  border-radius: 10px;
  padding: 72px;
  }
  &__title {
    margin: 0;
    font-size: 40px;
    line-height: 70px;

    text-align: center;

    color: #31353D;
  }

  &__subtitle {
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #31353D;
  }

  &__form {
    margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  }
  .input {
    padding-left: 14px;
    max-width: 330px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #ffffff;
  }
  .login-button {
    cursor: pointer;
    width: 225px;
    height: 50px;
    margin-top: 40px;
    background: #31353D;
    border-radius: 10px;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #F0F4F4;
    border: 1px solid #31353D;
  }
  .help-link {
    color: #2D9CDB;
    margin-top: 30px;
  }
  .input-text {
    text-align: left;
    margin: 10px;
    color: #484848;
    font-size: 16px;
    line-height: 18px;
  }
}
</style>
