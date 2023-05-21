<script setup>
import { useRouter, RouterLink } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

function onLogoutClick() {
  store.dispatch('logout')
  router.push({ name: 'login' })
}
</script>

<template>
  <header v-if="$route.name === 'welcome' || $route.name === 'details'">
    <div class="links-container">
      <img alt="green-invoice-leaf" class="leaf" src="@/assets/green_leaf.svg" />
      <RouterLink to="/welcome">וולקאם</RouterLink>
      <RouterLink to="/details">פרטים</RouterLink>
    </div>
    <button class="logout-button" @click="onLogoutClick">יציאה</button>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--tea-rose-red);
  box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.1);
  font-size: 2rem;
  font-family: 'Almoni Neue AAA';
}

.leaf {
  aspect-ratio: 1 / 1;
  width: 2rem;
}

.links-container {
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;

    &:hover {
      background-color: var(--amaranth-pink-bg);
    }
  }
}

.logout-button {
  background-color: var(--chinese-violet);

  font-size: 2rem;
  font-family: 'Almoni Neue AAA';

  border: 0;
  border-radius: 0.4rem;
  padding: 0.6rem 1rem;
  color: var(--vt-c-white);
}
</style>
