<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const store = useStore()
const router = useRouter()

async function loginAttempt() {
  try {
    await store.dispatch('loginAttempt', {
      email: email.value,
      password: password.value
    })
    router.replace({ name: 'welcome' })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <form class="login-form" @submit.prevent="loginAttempt">
    <h1 class="greeting">היי, טוב לראות אותך</h1>
    <ul>
      <li>
        <input class="email-input" v-model="email" type="email" placeholder="מייל" />
        <label class="email-input">כתובת המייל איתה נרשמת לחשבונית ירוקה</label>
      </li>
      <li>
        <input class="password-input" v-model="password" type="password" placeholder="סיסמה" />
        <label class="forgot-password" for="password-input">שכחת סיסמא?</label>
      </li>
    </ul>
    <div class="login-buttons-container">
      <button class="login-button" type="submit">כניסה</button>
      <button class="google-login" type="submit">
        כניסה מהירה
        <img
          alt="illustration"
          class="login-illustration"
          src="@/assets/Google_G.svg"
          width="24"
          height="24"
        />
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
