<template>
  <transition name="fade" :mode="todo.isEmpty ? 'in-out' : 'out-in'">
    <div v-if="todo.isEmpty" class="transform">{{ message }}</div>
    <todo-list-items v-else :todo="todo" class="transform" />
  </transition>
</template>

<script lang="ts">
import { Todo } from '@/modules/todos/Todo';
import TodoListItems from '@/components/todos/TodoListItems.vue';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  components: { TodoListItems },
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
    message: {
      type: String,
      default: 'No todos',
    },
  },
})
</script>

<style scoped>
/* fade transition*/
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 -translate-y-5;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-out;
}

</style>
