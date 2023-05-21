<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const loggedUser = store.getters.loggedUser
const businessName = loggedUser?.businesses?.[0].name
const userName = `${loggedUser?.firstName} ${loggedUser?.lastName}`

if (!loggedUser) {
  router.replace({ name: 'login' })
}
</script>

<template>
  <div class="welcome-page-container">
    <h2 class="greeting">וולקאם {{ userName }} 🙂</h2>
    <h3 class="glad-to-see-you">שמחים לראות אותך פה וברוך הבא לעמוד העסק שלך {{ businessName }}</h3>

    <h4 class="cta-go-to-details">עכשיו כשאתה איתנו, בוא נעבור ביחד על הפרטים שלך</h4>
    <RouterLink class="take-me-to-details" to="/details">קחו אותי לשם</RouterLink>
  </div>
</template>

<style scoped lang="scss">
@import url('./style.scss');
</style>
