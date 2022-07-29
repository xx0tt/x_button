export default {
  namespaced: true,
  state: {
    color: null
  },
  mutations: {
    updateColor(state, color) {
      state.color = color
    }
  },
  actions: {
    randomColorAction(context) {
      const num = Math.floor(Math.random() * 256)
      const num1 = Math.floor(Math.random() * 256)
      const num2 = Math.floor(Math.random() * 256)

      const color = `rgb(${num},${num1},${num2})`
      context.commit('updateColor', color)
    }
  },
  getters: {}
}
