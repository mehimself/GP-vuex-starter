<template>
  <div class="pageHeader">
    <transition name="fade">
      <carousel
        :key="$route.name"
      ></carousel>
    </transition>
  </div>
</template>

<script>
import Carousel from './Carousel'

export default {
  name: 'PageHeader',
  components: {
    Carousel,
  }
}
</script>
<style scoped>
  .pageHeader {
    position: relative;
    height: 400px;
    width: 100%;
  }

  .fade-enter-active {
    transition: all 1s ease;
  }

  .fade-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
