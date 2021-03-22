<template>
  <transition name="slide-shake">
    <div v-if="modelValue" class="toast">
      {{ message }}
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: 'Ups, something wrong happened!',
    },
  },
})
</script>

<style scoped>
.toast {
  @apply absolute top-14 left-0 right-0 p-4 mx-auto text-white bg-red-600 rounded-md shadow-md w-80;
}

/* Slide-shake Transition*/
.slide-shake-enter-active {
  animation: slide-shake 0.5s;
}
.slide-shake-leave-to {
  @apply opacity-0 -top-14;
}
.slide-shake-leave-active {
  transition: all 0.3s ease-in;
}
</style>
