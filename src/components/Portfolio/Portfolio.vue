<template>
  <div class="portfolio">
    <testimony
      v-for="(testimony, index) in testimonials"
      :key="'t' + index"
      :index="index"
      :name="testimony.name"
      :role="testimony.role"
      :text="testimony.text"
      :src="testimony.src"
    ></testimony>
  </div>
</template>

<script>
import Testimony from './Testimony'
export default {
  name: 'Portfolio',
  computed: {
    testimonials() {
      return this.$store.state.portfolio.testimonials
    }
  },
  components: {
    Testimony
  }
}
</script>
<style scoped>

  .content {
    grid-template-columns: 7fr 4fr;
    grid-template-areas: "text img";
  }

  .v-card:nth-child(2n) .content {
    grid-template-columns: 4fr 7fr;
    grid-template-areas: "img text";
  }

  .imageCard {
    height: 100% !important;
  }

  .body {
    margin-top: 1em;
  }

  .v-image {
    width: 100%;
    grid-area: img;
  }

  .text {
    grid-area: text;
  }
</style>
