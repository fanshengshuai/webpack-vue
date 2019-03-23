<template>
  <div class="slider-item">
    {{dataWidth}}
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["dataWidth"],
  data() {
    return {};
  },
  mounted() {}
};
</script>