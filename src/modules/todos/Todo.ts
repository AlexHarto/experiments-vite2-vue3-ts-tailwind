import { ref, Ref } from "@vue/reactivity";

interface TodoItem {
  id: string
  item: string
}

class Todo {
  private todoList: Ref<TodoItem[]>

  get isEmpty() {
    return this.todoList.value.length === 0;
  }

  get allTodos() {
    return this.todoList.value;
  }

  constructor() {
    this.todoList = ref([]);
  }

  addTodo(item: string, atTop = false) {
    if (item) {
      const todoItem: TodoItem = {
        id: this.getRandomId(),
        item,
      }
      if (atTop) {
        this.todoList.value.unshift(todoItem)
      } else {
        this.todoList.value.push(todoItem)
      }
      return true;
    }
    return false;
  }

  removeTodo(id: string) {
    const index = this.todoList.value.findIndex(x => x.id === id)
    if (index >= 0) {
      this.todoList.value.splice(index, 1)
    }
  }

  private getRandomId(length = 15) {
    let str = '';
    while (str.length < length) {
      str += Math.random().toString(36).substr(2);
    }
    return str.substr(0, length);
  }
}

export { Todo };
