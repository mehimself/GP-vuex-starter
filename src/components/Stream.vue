<template>
  <div class="stream">
    <v-container>
      <v-layout
        align-center
      >
        <v-flex offset-xs4 xs4>
          <v-card
            color="grey lighten-4"
          >
            <v-card-text>
              <clock/>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout
        style="height:200px"
        align-center
      >
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h1>API Streams coming soon...</h1>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Clock from './Clock'
export default {
  name: 'Stream',
  components: {
    Clock
  }
}
</script>

<style scoped>
 .stream {
   height: 100%;
 }
</style>
