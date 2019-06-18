<template>

  <div class="workshops">
    <v-card
      v-for="(card, index) in cards"
      :key="index"
      mode="out-in"
      class="imageCard"
      elevation-6
    >
      <v-card-text
        class="grid content"
      >
        <v-img
          :src="card.src"
          position="center left"
        ></v-img>
        <div class="text">
          <h1 v-html="card.title"></h1>
          <hr>
          <p
            class="body"
            v-html="card.body"
          >
          </p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Workshop',
  computed: {
    cards: {
      get() {
        return this.$store.state.workshop.cards
      }
    }
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
