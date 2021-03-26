<template>
  <div class="page">
    <ul class="inline-flex mx-auto font-semibold">
      <li class="flex items-center justify-center">
        <router-link :to="{ name: routeNames.TODOS.HOME }" class="text-lg">Home</router-link>
        <span class="mx-4">|</span>
      </li>
      <li class="flex items-center justify-center">
        <router-link :to="{ name: routeNames.TODOS.ABOUT }" class="text-lg">About</router-link>
        <span class="mx-4">|</span>
      </li>
      <li class="flex items-center justify-center">
        <router-link :to="{ name: routeNames.TODOS.CONTACT }" class="text-lg">Contact</router-link>
      </li>
    </ul>
    <div class="absolute p-1 cursor-pointer top-2 right-3" @click="toggleMode">
      <transition name="vertical-switch" mode="out-in">
        <svg v-if="mode === 'light'" class="text-gray-600 transition-colors transform w-7 h-7 hover:text-gray-900">
          <use href="/images/moon.svg#moon" />
        </svg>
        <svg v-else class="text-gray-300 transition-colors transform w-7 h-7 hover:text-white">
          <use href="/images/sun.svg#sun" class="" />
        </svg>
      </transition>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { routeNames } from '@/constants/routes'

export default defineComponent({
  setup () {
    const mode = ref<'light' | 'dark'>('light');

    const toggleMode = () => {
      mode.value = mode.value === 'light' ? 'dark' : 'light';
      const html = document.getElementsByTagName('html');
      html[0].classList.toggle('dark');
    }

    return {
      routeNames,
      mode,
      toggleMode,
    }
  }
})
</script>

<style scoped>
.page {
  @apply relative h-full p-4 text-sm text-center;
  @apply transition-colors duration-300 ease-in-out;
  @apply bg-gray-100 dark:bg-gray-800 dark:text-white;
}

/* vertical-switch transition*/
.vertical-switch-enter-from {
  @apply opacity-0 translate-y-5;
}
.vertical-switch-leave-to {
  @apply opacity-0 -translate-y-5;
}
.vertical-switch-enter-active,
.vertical-switch-leave-active {
  transition: all 0.2s ease-out;
}
</style>
