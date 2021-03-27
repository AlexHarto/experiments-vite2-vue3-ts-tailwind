<template>
  <!--  -->
  <transition-group tag="ul" name="fade-scale" mode="out-in" appear class="relative">
    <li v-for="todoItem in todo.allTodos" :key="todoItem.id">
      <span class="item" @click="todo.removeTodo(todoItem.id)" @mouseenter="isOver = true" @mouseleave="isOver = false">
        <span class="w-full text-center select-none">{{ todoItem.item }}</span>
        <svg class="absolute w-5 h-5 right-2">
          <use href="@/assets/images/trash.svg#trash" />
        </svg>
      </span>
    </li>
  </transition-group>
</template>

<script lang="ts">
import { Todo } from '@/modules/todos/Todo';
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup () {
    const isOver = ref(false);
    return {
      isOver,
    }
  }
})
</script>

<style scoped>
.item {
  /*  */
  @apply relative inline-flex justify-between p-2 my-1 rounded-md cursor-pointer w-80;
  @apply bg-white;
  @apply dark:bg-gray-600 dark:text-white dark:border-gray-600;
  @apply transition-all duration-200 ease-in-out;
  & svg {
    @apply opacity-0 transition-all duration-300 ease-in-out;
  }
  &:hover {
    @apply text-gray-900 ring-2 ring-gray-400;
    @apply dark:text-white dark:border-gray-300;
    & svg {
      @apply text-gray-600 dark:text-gray-200 opacity-100;
    }
  }
}

/* fade-scale Transition*/
.fade-scale-enter-from,
.fade-scale-leave-to {
  @apply opacity-0 transform scale-0;
}
.fade-scale-enter-to,
.fade-scale-leave-from {
  @apply opacity-100 transform scale-100;
}
.fade-scale-move,
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}
.fade-scale-leave-active {
  @apply absolute left-0 right-0;
}

</style>
