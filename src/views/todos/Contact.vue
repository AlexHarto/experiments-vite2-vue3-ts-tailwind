<template>
  <div class="p-4 text-center">
    <h3 class="my-16 text-4xl font-bold">Contact</h3>
    <transition-group
      appear
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
      class="grid grid-cols-2 gap-4 mx-auto max-w-min min-w-max"
    >
      <li v-for="option in options" :key="option.name" class="flex flex-col items-center justify-center w-40 h-24 gap-2 bg-white rounded-lg shadow-lg">
        <div class="w-6 h-6">
          <img :src="`/images/${option.svg}.svg`">
        </div>
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
      if (elh) {
        gsap.to(elh, {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: 'ease.out',
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

</style>
