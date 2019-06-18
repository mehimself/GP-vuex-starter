<template>
  <v-avatar
    :size="size"
    color="grey lighten-4"
  >
    <img
      v-if="src"
      :src="src"
    >
    <v-icon
      :size="size"
      v-else
    >{{ defaultIcon }}</v-icon>
  </v-avatar>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    src: {
      type: String
    },
    size: {
      type: Number,
      default: 96
    },
    defaultIcon: {
      type: String,
      default: 'person'
    }
  }
}
</script>
