<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper" ref="swiperWrapper">
      <slot :data-width="item"></slot>
    </div>
  </div>
</template>
<script>
import SwiperItem from "./SwiperItem.vue";
export default {
  components: {
    "swiper-item": SwiperItem
  },
  data() {
    return {
      item: {
        width: 0
      }
    };
  },
  mounted() {
    this.item.width = this.$refs.swiperContainer.clientWidth;
    this.$refs.swiperWrapper.style.width = this.item.width * 3 + "px";
    this.slotChildren = [];
    for (let i = 0; i < this.$slots.default.length; i++) {
      if (this.$slots.default[i].elm.nodeType !== 3) {
        this.slotChildren.push(this.$slots.default[i]); // 获得 那些 插入的 按钮
      }
    }

    // this.slotChildren.style.width = item.width + "px";
    console.log(this.slotChildren);
  }
};
</script>