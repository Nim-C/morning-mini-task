<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const loggedUser = store.getters.loggedUser
const userName = `${loggedUser?.firstName} ${loggedUser?.lastName}`
const email = loggedUser?.email

const businessDetails = loggedUser?.businesses?.[0]
const businessName = businessDetails?.name
const city = businessDetails?.city
const currency = businessDetails?.settings?.documentCurrency

if (!loggedUser) {
  router.replace({ name: 'login' })
}
</script>

<template>
  <div class="details-page-container">
    <section class="details-container">
      <h1>פרטים</h1>
      <section class="user-details">
        <h2>הפרטים שלך</h2>
        <ul>
          <li>שם: {{ userName }}</li>
          <li>אימייל: {{ email }}</li>
        </ul>
      </section>

      <section class="business-details">
        <h2>הפרטים של העסק</h2>
        <ul>
          <li>שם: {{ businessName }}</li>
          <li>עיר: {{ city }}</li>
          <li>מטבע: {{ currency }}</li>
        </ul>
      </section>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import url('./style.scss');
</style>
