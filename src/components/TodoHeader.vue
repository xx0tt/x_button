<template>
  <header class="header">
    <h1 :style="{ color: MyColor }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      v-model.trim="message"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="addTodoFn"
    />
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      message: ''
    }
  },
  computed: {
    ...mapGetters(['todosList', 'MyColor'])
  },
  methods: {
    ...mapActions('todos', ['addTodosAction']),
    addTodoFn() {
      if (!this.message) return alert('请输入内容')

      this.addTodosAction({
        id: this.todosList[0] ? this.todosList[0].id + 1 : 1,
        done: false,
        name: this.message
      })
      this.message = ''
    }
  }
}
</script>
