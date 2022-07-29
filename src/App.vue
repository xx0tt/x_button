<template>
  <div>
    <button @click="randomColorAction">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
    <x-button @click="clickFn">默认按钮</x-button>
    <x-button type="primary" plain @click="clickFn">主要按钮</x-button>
    <x-button type="success" plain @click="clickFn">成功按钮</x-button>
    <x-button type="info" disabled @click="clickFn">信息 已禁用</x-button>
    <x-button type="warning" @click="clickFn">警告按钮</x-button>
    <x-button type="danger" @click="clickFn">危险按钮</x-button>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import { mapActions } from 'vuex'
import XButton from '@/components/XButton.vue'
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    XButton
  },

  created() {},

  methods: {
    ...mapActions('MyColor', ['randomColorAction']),
    clickFn() {
      alert('调用成功了')
    }
  }
}
</script>

<style scoped></style>
