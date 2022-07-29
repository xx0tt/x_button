<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="item in todosList"
      :key="item.id"
    >
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="delTodosAction(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('todos')
export default {
  computed: {
    ...mapGetters(['todosList'])
  },
  methods: {
    ...mapActions(['delTodosAction'])
  }
}
</script>
