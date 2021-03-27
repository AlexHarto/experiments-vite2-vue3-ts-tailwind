<template>
  <div class="p-4 text-center">
    <h3 class="my-16 text-4xl font-bold">Contact</h3>
    <transition-group
      appear
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
      class="group"
    >
      <li v-for="(option, index) in options"
        :key="option.name"
        :data-index="index"
        class="item"
      >
        <svg class="w-8 h-8">
          <!-- It's not easy to load them at runtime -->
          <use v-if="option.svg === 'at-symbol'" href="@/assets/images/at-symbol.svg#at-symbol"></use>
          <use v-if="option.svg === 'phone'" href="@/assets/images/phone.svg#phone"></use>
          <use v-if="option.svg === 'mail'" href="@/assets/images/mail.svg#mail"></use>
          <use v-if="option.svg === 'fire'" href="@/assets/images/fire.svg#fire"></use>
        </svg>
        <p class="font-semibold">{{option.text}}</p>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gsap from 'gsap'

export default defineComponent({
  setup () {

    const options = [
      {
        name: 'email',
        svg: 'at-symbol',
        text: 'by email'
      },
      {
        name: 'phone',
        svg: 'phone',
        text: 'by phone'
      },
      {
        name: 'post',
        svg: 'mail',
        text: 'by post'
      },
      {
        name: 'fire',
        svg: 'fire',
        text: 'by smoke signal'
      },
    ]

    const beforeEnter = (el: Element) => {
      const elh = el as HTMLElement
      if (elh) {
        elh.style.opacity = '0'
        elh.style.transform = 'translateY(100px)'
      }
    }
    const enter = (el: Element, done: Function) => {
      const elh = el as HTMLElement
      if (elh && elh.dataset.index) {
        gsap.to(elh, {
          duration: 0.8,
          delay: parseInt(elh.dataset.index) * 0.2,
          y: 0,
          opacity: 1,
          ease: 'ease.out',
          onComplete: () => done(),
        })
      }
    }

    return {
      beforeEnter,
      enter,
      options,
    }
  }
})
</script>

<style scoped>
.group {
  @apply grid grid-cols-2 gap-8 mx-auto text-lg max-w-min min-w-max;
}
.item {
  @apply flex flex-col items-center justify-center w-48 h-32 gap-2 bg-white rounded-lg shadow-lg;
  @apply cursor-pointer;
}
</style>
