import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import MyColor from './modules/MyColor'
import vuexPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {
    todosList: (state) => state.todos.todosList,
    MyColor: (state) => state.MyColor.color
  },
  modules: { todos, MyColor },
  plugins: [
    vuexPersistedstate({
      reducer(state) {
        return {
          todos: state.todos,
          color: state.MyColor
        }
      }
    })
  ]
})
