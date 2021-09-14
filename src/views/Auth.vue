<template>
  <div class="auth">
      <auth-page></auth-page>
  </div>
</template>

<script>
import AuthPage from '../components/AuthPage.vue';

export default {
  name: 'Auth',
  components: {
    AuthPage,
  },
};
</script>
