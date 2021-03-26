<template>
  <div class="p-4 text-center">
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <h3 class="my-16 text-4xl font-bold">About</h3>
    </transition>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nam tempore. Quidem ipsum possimus, recusandae voluptatum fugit modi rerum aut libero quae? Quia at asperiores cupiditate eos porro velit et!
    Necessitatibus ipsum, dicta similique sit excepturi facere tempora. Deserunt quos iste voluptas nulla, vero perferendis dolorem dicta dolorum corporis repudiandae voluptates nostrum debitis illum soluta impedit ratione voluptate blanditiis alias.
    Consequatur veritatis corrupti neque, eum, nisi doloribus dignissimos, laborum temporibus in eveniet inventore atque nostrum quibusdam dolorem iste. Dignissimos unde expedita quia! Cumque, eaque praesentium. Non fugit quas laborum error.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nam tempore. Quidem ipsum possimus, recusandae voluptatum fugit modi rerum aut libero quae? Quia at asperiores cupiditate eos porro velit et!
    Necessitatibus ipsum, dicta similique sit excepturi facere tempora. Deserunt quos iste voluptas nulla, vero perferendis dolorem dicta dolorum corporis repudiandae voluptates nostrum debitis illum soluta impedit ratione voluptate blanditiis alias.
    Consequatur veritatis corrupti neque, eum, nisi doloribus dignissimos, laborum temporibus in eveniet inventore atque nostrum quibusdam dolorem iste. Dignissimos unde expedita quia! Cumque, eaque praesentium. Non fugit quas laborum error.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gsap from 'gsap';

export default defineComponent({
  setup () {

    const beforeEnter = (el: Element) => {
      const elh = el as HTMLElement
      if (elh) {
        elh.style.transform = 'translateY(-60px)'
        elh.style.opacity = '0'
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
    }
  }
})
</script>

<style scoped>

</style>
