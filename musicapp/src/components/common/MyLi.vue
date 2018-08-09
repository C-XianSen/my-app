<template>
    <li>
        <slot></slot>
    </li>
</template>

<script>
export default {
  name: 'my-li',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.grid li{
    width: 33.3%;
    float: left;
    list-style: none;
    text-align: center;
    height: 90px;
}
</style>
