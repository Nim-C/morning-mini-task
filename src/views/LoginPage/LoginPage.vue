<script setup>
import LoginForm from '../../components/LoginForm/LoginForm.vue'
</script>

<template>
  <div class="login">
    <div class="illustration-container">
      <img alt="illustration" class="login-illustration" src="@/assets/login-illustration.svg" />
    </div>
    <div class="form-container">
      <img alt="green-logo" class="green-logo" src="@/assets/green_logo.svg" />
      <LoginForm />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
