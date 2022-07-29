<template>
  <div>
    <button
      :style="{
        backgroundColor: color.bgc,
        color: color.color,
        border: `1px solid ${color.color}`,
        width: '90px',
        height: '30px',
        borderRadius: round ? '999em' : '5px',
        'pointer-events': disabled ? 'none' : 'auto',
        cursor: disabled ? 'wait' : 'auto'
      }"
      @click="$emit('click')"
    >
      <!-- 默认插槽，放文字 -->
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'content'
    },
    plain: {
      type: Boolean
    },
    round: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  computed: {
    color() {
      const plain = this.plain
      const arr = {
        content: { bgc: '#fff', color: '#606266' },
        primary: plain
          ? { bgc: '#ecf5ff', color: '#65b1ff' }
          : { bgc: '#65b1ff', color: '#fff' },
        success: plain
          ? { bgc: '#f0f9eb', color: '#67c23a' }
          : { bgc: '#67c23a', color: '#fff' },
        info: plain
          ? { bgc: '#f4f4f5', color: '#a6a9ad' }
          : { bgc: '#a6a9ad', color: '#fff' },
        warning: plain
          ? { bgc: '#fdf6ec', color: '#e6a23c' }
          : { bgc: '#e6a23c', color: '#fff' },
        danger: plain
          ? { bgc: '#fef0f0', color: '#f78989' }
          : { bgc: '#f78989', color: '#fff' }
      }
      if (!Object.keys(arr).includes(this.type)) {
        throw new Error('请输入有效type')
      }
      return arr[this.type]
    }
  }
}
</script>

<style></style>
