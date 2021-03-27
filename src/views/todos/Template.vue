<template>
  <div class="page">
    <ul class="inline-flex mx-auto font-semibold">
      <li
        v-for="(routeName, key, index) in routeNames.TODOS"
        :key="key"
        class="flex items-center justify-center"
      >
        <router-link :to="{ name: routeName }" class="text-lg">{{ routeName }}</router-link>
        <span class="mx-4" v-if="index < Object.keys(routeNames.TODOS).length - 1">|</span>
      </li>
    </ul>
    <div class="absolute p-1 cursor-pointer top-2 right-3" @click="toggleMode">
      <transition name="vertical-switch" mode="out-in">
        <svg v-if="mode === 'light'" class="text-gray-600 transition-colors transform w-7 h-7 hover:text-gray-900">
          <use href="@/assets/images/moon.svg#moon" />
        </svg>
        <svg v-else class="text-gray-300 transition-colors transform w-7 h-7 hover:text-white">
          <use href="@/assets/images/sun.svg#sun" class="" />
        </svg>
      </transition>
    </div>
    <router-view v-slot="{ Component, route }">
        <!-- @before-leave="leave" -->
      <transition
        name="router"
        @leave="leave"
        @enter="enter"
        :css="false"
        mode="out-in"
      >
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router';
import { routeNames } from '@/constants/routes'
import gsap from 'gsap';

export default defineComponent({
  setup () {
    const mode = ref<'light' | 'dark'>('light');

    const routes = Object.values(routeNames.TODOS)
    let direction = 0
    const router = useRouter()

    router.beforeEach((to, from) => {
      if (to.name && from.name) {
        direction = routes.indexOf(to.name.toString()) > routes.indexOf(from.name.toString()) ? 1 : -1
      } else {
        direction = 0;
      }
    })

    const toggleMode = () => {
      mode.value = mode.value === 'light' ? 'dark' : 'light'
      const html = document.getElementsByTagName('html')
      html[0].classList.toggle('dark')
    }

    const leave = (el: Element, done: Function) => {
      const elh = el as HTMLElement
      if (elh) {
        gsap.to(elh, {
          duration: 0.3,
          x: -100 * direction,
          opacity: 0,
          ease: 'ease.out',
          onComplete: () => done(),
        })
      }
    }

    const enter = (el: Element, done: Function) => {
      const elh = el as HTMLElement
      if (elh) {
        gsap.fromTo(elh, {
          opacity: 0,
          x: 100 * direction,
        }, {
          duration: 0.8,
          x: 0,
          opacity: 1,
          ease: 'ease.out',
          onComplete: () => done(),
        })
      }
    }

    return {
      routeNames,
      mode,
      toggleMode,
      enter,
      leave,
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
