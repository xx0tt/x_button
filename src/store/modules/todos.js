import todosList from './数据'

export default {
  namespaced: true,
  state: {
    todosList: todosList
  },
  mutations: {
    addTodos(state, todo) {
      state.todosList.unshift(todo)
    },
    delTodos(state, index) {
      state.todosList.splice(index, 1)
    }
  },
  actions: {
    addTodosAction(context, todo) {
      context.commit('addTodos', todo)
    },
    delTodosAction(context, id) {
      const index = context.state.todosList.findIndex((item) => item.id === id)
      context.commit('delTodos', index)
    }
  },
  getters: {},
  modules: {}
}
