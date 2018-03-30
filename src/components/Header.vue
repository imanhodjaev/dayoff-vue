<template>
  <header class="header">
    <h1 class="header__title">DayOff</h1>
    <div class="header__slot">
      <slot></slot>
    </div>

  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    user: Object
  },
};
</script>

<style lang="sass" scoped>
.header
  position: fixed
  top: 0
  left: 0
  right: 0
  width: 100%
  height: 4em
  background: #fff
  box-shadow: 0 0.04em 0 #eee
  padding: 0 0.6em 0.8em 0.8em
</style>
