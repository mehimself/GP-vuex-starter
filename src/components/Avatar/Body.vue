<template>
  <v-layout full-height fluid>
    <v-flex xs12>
      <v-card-text>
        <div class="heading">
          <h2
              class="title"
              v-html="title"></h2>
          <div v-if="subtitle">
            <em
              class="subtitle"
              v-html="subtitle"></em>
          </div>
        </div>
        <p
          mt-8
          class="body"
          v-html="body"
        ></p>
      </v-card-text>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Body',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    body: {
      type: String,
      required: true
    }
  }
}
</script>
