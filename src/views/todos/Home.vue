<template>
  <div class="todos">
    <error-message v-model="showError" message="You must enter a value for the todo..." />
    <todo-input :todo="todo" @show-error="showErrorHandler" />
    <todo-list :todo="todo" message="Whoohoo, nothing left todo!" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref } from 'vue'
import { Todo } from '@/modules/todos/Todo';
import TodoList from '@/components/todos/TodoList.vue';
import TodoInput from '@/components/todos/TodoInput.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default defineComponent({
  components: { TodoList, TodoInput, ErrorMessage },
  setup () {
    const todo = new Todo()
    const showError = ref(false)

    // Not reactive
    let showErrorTimer: number | undefined;

    // Functions
    function showErrorHandler() {
      showError.value = true;
      showErrorTimer = setTimeout(() => {
        showError.value = false
        showErrorTimer = undefined
      }, 3000)
    }

    // Hooks
    onUnmounted(() => {
      if (showErrorTimer) {
        clearTimeout(showErrorTimer)
      }
    })

    return {
      todo,
      showError,
      showErrorHandler,
    }
  }
})
</script>

<style scoped>
.todos {
  @apply relative pt-20;
}
</style>
