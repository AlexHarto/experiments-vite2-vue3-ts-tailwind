<template>
  <div class="input-container">
    <input type="text"
            v-model='todoInput'
            placeholder="Add a new todo..."
            @keyup.enter="addTodo">
    <div class="on-top"
         :class="{ 'rotated': onTop }"
         @click="onTop = !onTop">
      <svg class="w-6 h-6 text-gray-600 transition-colors cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
        <use href="/images/download.svg#download" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from '@/modules/todos/Todo'
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  emits: ['showError', 'addTodo'],
  setup (props, { emit }) {
    const todoInput = ref('')
    const onTop = ref(false)

    const addTodo = () => {
      if (!props.todo.addTodo(todoInput.value, onTop.value)) {
        emit('showError');
      }
      todoInput.value = ''
    }

    return {
      todoInput,
      onTop,
      addTodo,
    }
  }
})
</script>

<style scoped>
.input-container {
  @apply relative flex items-center justify-center mx-auto mb-6 w-80;
  & input {
    outline: none;
    @apply w-full pr-9 focus:ring-2 ring-gray-400 dark:bg-gray-600 dark:ring-gray-400 border dark:border-gray-500;
  }
}
.on-top {
  transform: scaleY(1);
  @apply absolute right-2 transition-transform duration-500;
  &.rotated {
    transform: scaleY(-1);
  }
}
</style>
